"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _chalk = require('chalk'); var _chalk2 = _interopRequireDefault(_chalk);

var _child_process = require('child_process');
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);

 const sleep = (ms) => new Promise((r) => setTimeout(r, ms)); exports.sleep = sleep

 function transformName(name) {
    return name.toLowerCase().replace('_', '-').replace(' ', '-')
} exports.transformName = transformName;

 function readFile(path) {
    if (!_fs2.default.existsSync(path)) {
        throw new Error(`file ${path} does not exists`)
    }
    return _fs2.default.readFileSync(path, 'utf8')
} exports.readFile = readFile;

const makeMiddleware = (fun) => (command) => {
    const handler = command.handler
    command.handler = async (argv) => {
        await fun(argv, (a) => handler(a || argv))
    }
    return command
}

 const withErrorHandling = makeMiddleware(async (argv, next) => {
    try {
        await next()
    } catch (e) {
        if (!process.env.DEBUG) {
            exports.printRed.call(void 0, e.message)
        } else {
            console.error(e)
        }
        return
    }
}); exports.withErrorHandling = withErrorHandling

 const print = console.log; exports.print = print
 const printRed = (x) => console.log(_chalk2.default.red(x)); exports.printRed = printRed
 const printGreen = (x) => console.log(_chalk2.default.green(x)); exports.printGreen = printGreen

 function runCommand({ command, args, env, silent = false }) {
    return new Promise((res, rej) => {
        const ps = _child_process.spawn.call(void 0, command, args, {
            stdio: silent ? 'ignore' : 'inherit',
            env: {
                ...process.env,
                ...env,
            },
        })
        ps.on('close', (code) => {
            if (code !== 0) {
                rej(new Error(`${command} exited with code ${code}`))
            }
            res(code)
        })
        ps.on('error', (err) => {
            rej(err)
        })
    })
} exports.runCommand = runCommand;
