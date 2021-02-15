// This file runs in the browser.
const defines = {
  "global": window,
  "module": {},
  "Buffer": String,
  "process": {},
  "__dirname": "",
  "__filename": "",
  "process.env": {},
  "process.cwd": String,
  "process.argv": [],
  "setImmediate": String,
  "process.chdir": String,
  "clearImmediate": String,
  "process.browser": true,
  "process.version": "",
  "process.env.NODE_ENV": "development",
};
Object.keys(defines).forEach((key) => {
    const segs = key.split('.');
    let target = window;
    for (let i = 0; i < segs.length; i++) {
        const seg = segs[i];
        if (i === segs.length - 1) {
            target[seg] = defines[key];
        }
        else {
            target = target[seg] || (target[seg] = {});
        }
    }
});
// use server configuration, then fallback to inference
const socketProtocol = null || (location.protocol === 'https:' ? 'wss' : 'ws');
const socketHost = `${null || location.hostname}:${9030}`;
const socketURL = `${socketProtocol}://${socketHost}`;
const isWindowDefined = typeof window !== 'undefined';
function log(...args) {
    console.info('[ESM-HMR]', ...args);
}
function reload() {
    if (!isWindowDefined) {
        return;
    }
    location.reload(true);
}
let SOCKET_MESSAGE_QUEUE = [];
let connected = false;
function _sendSocketMessage(msg) {
    socket.send(JSON.stringify(msg));
}
function sendSocketMessage(msg) {
    if (!connected) {
        SOCKET_MESSAGE_QUEUE.push(msg);
    }
    else {
        _sendSocketMessage(msg);
    }
}
const socket = new WebSocket(socketURL, 'esm-hmr');
const REGISTERED_MODULES = {};
class HotModuleState {
    constructor(path) {
        this.data = {};
        this.isLocked = false;
        this.isDeclined = false;
        this.isAccepted = false;
        this.acceptCallbacks = [];
        this.disposeCallbacks = [];
        this.path = '';
        this.path = path;
    }
    lock() {
        this.isLocked = true;
    }
    dispose(callback) {
        this.disposeCallbacks.push(callback);
    }
    invalidate() {
        reload();
    }
    decline() {
        this.isDeclined = true;
    }
    accept(_deps, callback = true) {
        if (this.isLocked) {
            return;
        }
        if (!this.isAccepted) {
            sendSocketMessage({ path: this.path, type: 'hotAccept' });
            this.isAccepted = true;
        }
        if (!Array.isArray(_deps)) {
            callback = _deps || callback;
            _deps = [];
        }
        if (callback === true) {
            callback = () => { };
        }
        const deps = _deps.map((dep) => {
            return new URL(dep, `${window.location.origin}${this.path}`)
                .pathname;
        });
        this.acceptCallbacks.push({
            deps,
            callback,
        });
    }
}
export function createHotContext(fullUrl) {
    const id = new URL(fullUrl).pathname;
    const existing = REGISTERED_MODULES[id];
    if (existing) {
        existing.lock();
        runModuleDispose(id);
        return existing;
    }
    const state = new HotModuleState(id);
    REGISTERED_MODULES[id] = state;
    return state;
}
/** Called when a new module is loaded, to pass the updated module to the "active" module */
// uses the graph lastUsedTimestamp to make the new timestamp to fetch, pass this in the hmr message?
async function runModuleAccept({ path, namespace, updateID }) {
    const state = REGISTERED_MODULES[path];
    if (!state) {
        log(`${path} has not been registered, reloading`);
        log(Object.keys(REGISTERED_MODULES));
        return false;
    }
    if (state.isDeclined) {
        log(`${path} has declined HMR, reloading`);
        return false;
    }
    const acceptCallbacks = state.acceptCallbacks;
    for (const { deps, callback: acceptCallback } of acceptCallbacks) {
        const encodedNamespace = encodeURIComponent(namespace || 'file');
        const [module, ...depModules] = await Promise.all([
            import(appendQuery(path, `namespace=${encodedNamespace}&t=${updateID}`)),
            ...deps.map((d) => import(appendQuery(d, `t=${Date.now()}&namespace=file`))),
        ]);
        acceptCallback({ module, deps: depModules });
    }
    return true;
}
/** Called when a new module is loaded, to run cleanup on the old module (if needed) */
async function runModuleDispose(id) {
    const state = REGISTERED_MODULES[id];
    if (!state) {
        return false;
    }
    if (state.isDeclined) {
        return false;
    }
    const disposeCallbacks = state.disposeCallbacks;
    state.disposeCallbacks = [];
    state.data = {};
    disposeCallbacks.map((callback) => callback());
    return true;
}
function getErrorMessageMappedSource(message) {
    if (typeof sourceMapSupport !== 'undefined') {
        return (sourceMapSupport.getErrorSource({
            message,
            name: '',
            stack: '',
        }) || message);
    }
    return message;
}
function getErrorStackMappedSource(stack) {
    if (typeof sourceMapSupport !== 'undefined') {
        return (sourceMapSupport.getErrorSource({
            stack,
            message: '',
            name: '',
        }) || stack);
    }
    return stack;
}
socket.addEventListener('message', ({ data: _data }) => {
    if (!_data) {
        return;
    }
    const data = JSON.parse(_data);
    if (data.type === 'connected') {
        connected = true;
        SOCKET_MESSAGE_QUEUE.forEach(_sendSocketMessage);
        SOCKET_MESSAGE_QUEUE = [];
        setInterval(() => {
            try {
                socket.send(JSON.stringify({ type: 'ping' }));
            }
            catch { }
        }, 30000);
        return;
    }
    if (data.type === 'reload') {
        log('message: reload');
        reload();
        return;
    }
    if (data.type === 'overlay-error') {
        log('message: error');
        InfoOverlay.clear();
        ErrorOverlay.show(data.err);
        return;
    }
    if (data.type === 'overlay-info-open') {
        log('message: info open');
        ErrorOverlay.clear();
        InfoOverlay.show({ ...data.info, stack: '' });
        return;
    }
    if (data.type === 'overlay-info-close') {
        log('message: info close');
        InfoOverlay.clear();
        return;
    }
    if (data.type === 'update') {
        if (ErrorOverlay.isOpen()) {
            log(`error overlay is open: reloading`);
            return reload();
        }
        log('message: update', data);
        runModuleAccept(data)
            .then((ok) => {
            if (ok) {
                ErrorOverlay.clear();
                InfoOverlay.clear();
            }
            else {
                reload();
            }
        })
            .catch((err) => {
            console.error('[ESM-HMR] Hot Update Error', err);
            // A failed import gives a TypeError, but invalid ESM imports/exports give a SyntaxError.
            // Failed build results already get reported via a better WebSocket update.
            // We only want to report invalid code like a bad import that doesn't exist.
            if (err instanceof SyntaxError) {
                ErrorOverlay.show({
                    message: `Hot Update Error for ${data.path}: ${err.message}`,
                    stack: err.stack || '',
                });
            }
        });
        return;
    }
    log('message: unknown', data);
});
log('listening for file changes...');
/** Runtime error reporting: If a runtime error occurs, show it in an overlay. */
if (isWindowDefined) {
    window.addEventListener('error', function (event) {
        const err = {
            message: `${event.message}`,
            stack: event.error ? event.error.stack : '',
        };
        ErrorOverlay.show(err);
    });
}
const enableOverlay = true;
function appendQuery(url, query) {
    if (query.startsWith('?')) {
        query = query.slice(1);
    }
    if (url.includes('?')) {
        return url + query;
    }
    return `${url}?${query}`;
}
const template = ({ mainColor, tip = '' }) => /*html*/ `
<style>
:host {
  position: fixed;
  z-index: 1000001;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: 0;
  background: rgba(0, 0, 0, 0.66);
  --monospace: 'SFMono-Regular', Consolas,
              'Liberation Mono', Menlo, Courier, monospace;
  --red: #ff5555;
  --yellow: #e2aa53;
  --purple: #cfa4ff;
  --cyan: #2dd9da;
  --dim: #c9c9c9;
}

.window {
  font-family: var(--monospace);
  line-height: 1.5;
  width: 800px;
  color: #d8d8d8;
  margin: 30px auto;
  padding: 25px 40px;
  position: relative;
  background: #000;
  border-radius: 6px 6px 8px 8px;
  box-shadow: 0 19px 38px rgba(0,0,20,0.01), 0 15px 12px rgba(0,0,20,0.1);
  overflow: hidden;
  border-top: 8px solid var(${mainColor});
  min-height: 200px;
}

pre {
  font-family: var(--monospace);
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 1em;
  overflow-x: scroll;
  scrollbar-width: none;
}

pre::-webkit-scrollbar {
  display: none;
}

.message {
  line-height: 1.3;
  font-weight: 600;
  white-space: pre-wrap;
}

.message-body {
  color: var(${mainColor});
}

.plugin {
  color: var(--purple);
}

.file {
  color: var(--cyan);
  margin-bottom: 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.frame {
  color: var(--yellow);
}

.stack {
  font-size: 13px;
  color: var(--dim);
}

.tip {
  font-size: 13px;
  color: #999;
  border-top: 1px dotted #999;
  padding-top: 13px;
}

code {
  font-size: 13px;
  font-family: var(--monospace);
  color: var(--yellow);
}

.file-link {
  text-decoration: underline;
  cursor: pointer;
}
</style>
<div class="window">
  <pre class="message"><span class="plugin"></span><span class="message-body"></span></pre>
  <pre class="file"></pre>
  <pre class="frame"></pre>
  <pre class="stack"></pre>
  ${tip &&
    `<div class="tip">
        ${tip}
        </div>
  `}
</div>
`;
class CommonOverlay extends HTMLElement {
    static isOpen() {
        const elements = document.querySelectorAll(this.overlayId);
        return elements.length > 0;
    }
    static show(arg) {
        if (!enableOverlay)
            return;
        this.clear();
        // @ts-ignore
        const instance = new this(arg);
        document.body.appendChild(instance);
    }
    static clear() {
        document
            .querySelectorAll(this.overlayId)
            .forEach((n) => n.close());
    }
    close() {
        var _a;
        (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this);
    }
    displayText(selector, text, linkFiles = false) {
        var _a;
        const el = this.root.querySelector(selector);
        if (!linkFiles) {
            el.textContent = text;
        }
        else {
            const matches = getAllMatches(text, /(https?:\/\/.*)/g);
            for (let { frag, matched } of matches) {
                el.appendChild(document.createTextNode(frag));
                const link = document.createElement('a');
                link.textContent = matched;
                link.className = 'file-link';
                const isUrl = /https?:\/\//.test(matched);
                let path = isUrl ? new URL(matched).pathname : matched;
                const fileLocationRegex = /(:\d+:\d+)$/;
                if (!fileLocationRegex.test(path)) {
                    const lineNumAndCol = ((_a = fileLocationRegex.exec(matched)) === null || _a === void 0 ? void 0 : _a[1]) || '';
                    path += lineNumAndCol;
                }
                link.onclick = () => {
                    console.info(`Opening ${path} in editor`);
                    fetch('/__open-in-editor?file=' + encodeURIComponent(path));
                };
                el.appendChild(link);
            }
        }
    }
}
CommonOverlay.overlayId = 'overlay';
function getAllMatches(text, regex) {
    let curIndex = 0;
    let match;
    const matches = [];
    while ((match = regex.exec(text))) {
        let { 0: matched, index } = match;
        matched = matched.trim();
        if (index != null) {
            const frag = text.slice(curIndex, index);
            matches.push({ frag, matched });
            curIndex += frag.length + matched.length;
        }
    }
    return matches;
}
export class ErrorOverlay extends CommonOverlay {
    constructor(err) {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = template({
            mainColor: '--red',
            tip: `Click outside or fix the code to dismiss.<br>`,
        });
        if (err.plugin) {
            this.displayText('.plugin', `[plugin:${err.plugin}] `);
        }
        const message = getErrorMessageMappedSource(err.message);
        this.displayText('.message-body', message.trim());
        const stack = getErrorStackMappedSource(err.stack);
        this.displayText('.stack', stack.trim(), true);
        this.root.querySelector('.window').addEventListener('click', (e) => {
            e.stopPropagation();
        });
        this.addEventListener('click', () => {
            this.close();
        });
    }
}
ErrorOverlay.overlayId = 'bundless-error-overlay';
customElements.define(ErrorOverlay.overlayId, ErrorOverlay);
export class InfoOverlay extends CommonOverlay {
    constructor(info) {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = template({ mainColor: '--cyan' });
        this.displayText('.message-body', info.message.trim());
        this.root.querySelector('.window').addEventListener('click', (e) => {
            e.stopPropagation();
        });
        // this.addEventListener('click', () => {
        //     this.close()
        // })
    }
}
InfoOverlay.overlayId = 'bundless-info-overlay';
customElements.define(InfoOverlay.overlayId, InfoOverlay);
// InfoOverlay.show({ message: 'Prebundling modules' })
//template.js.map