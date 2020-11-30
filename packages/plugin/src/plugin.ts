import chokidar from 'chokidar'
import dedent from 'dedent'
import { throttle } from 'lodash'
import memoize from 'memoizee'
import { Plugin, ServerPluginContext } from 'vite'
import { EXPERIMENTS_TREE_PUBLIC_PATH, VIRTUAL_INDEX_PUBLIC_PATH } from './constants'
import { generate } from './generate'

export interface VitroConfig {
    experiments: string[]
    wrapper?: string
    basePath?: string
    ignore?: string[]
}

export function createConfigureServer(config: VitroConfig) {
    const generateCode = memoize(() => generate(process.cwd(), config))
    function configureServer({ app, watcher, root }: ServerPluginContext) {
        app.use(async (ctx, next) => {
            const { experimentsTree, virtualIndexCode } = await generateCode()
            // TODO manually trigger a hmr reload on virtual file on new stories added?
            if (ctx.path === VIRTUAL_INDEX_PUBLIC_PATH) {
                ctx.body = virtualIndexCode
                ctx.type = 'js'
            }
            if (ctx.path === EXPERIMENTS_TREE_PUBLIC_PATH) {
                ctx.body = `export default ${JSON.stringify(
                    experimentsTree,
                    null,
                    4,
                )}`
                ctx.type = 'js'
            }
            await next()
            if (ctx.path === '/' || ctx.path === '/index.html') {
                ctx.body = dedent`
                    <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="utf-8" />
                            <link rel="icon" href="/favicon.ico" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <meta
                                name="description"
                                content="Vitro"
                            />
                            <title>Vitro</title>
                        </head>
                        <body>
                            <div id="root"></div>
                            <noscript>You need to enable JavaScript to run this app.</noscript>
                            <script>window.global = window</script>
                            <script type="module" src="${VIRTUAL_INDEX_PUBLIC_PATH}"></script>
                        </body>
                    </html>
                    `
                ctx.type = 'html'
                ctx.status = 200
            }
        })
    }
    return configureServer
}

export function vitroPlugin(config: VitroConfig): Plugin {
    return {
        configureServer: createConfigureServer(config),
    }
}

function watchChanges({ ignored, globs, cb, dev }) {
    if (process.env.DISABLE_WATCH || !dev) {
        return cb()
    }
    const onChange = throttle(cb, 500)
    // onChange()
    const watcher = chokidar.watch(globs, {
        ignored: (path) => {
            return ignored.some((s) => path.includes(s))
        },
        ignoreInitial: true,
        persistent: true,
    })

    // Add event listeners.
    watcher.on('add', onChange).on('change', onChange).on('unlink', onChange)
}

// function aliasOfPackages(args: { packages: string[]; cwd }) {
//     return Object.assign(
//         {},
//         ...args.packages.map((p) => {
//             try {
//                 const resolved = resolve(p)
//                 debug(`using local instance of '${p}' at '${resolved}'`)
//                 return {
//                     [p]: resolved,
//                 }
//             } catch (e) {
//                 console.error(`ERROR: cannot resolve local instance of ${p}`)
//                 return {}
//             }
//         }),
//     )
// }

// function makeCssImportCodeSnippet(imports: string[]) {
//     let code = ''
//     imports.forEach((p) => {
//         code += `import '${p}'\n`
//     })
//     return code
// }
