import { Plugin } from '@bundless/cli'
import chokidar from 'chokidar'
import { escapeRegExp, throttle } from 'lodash'
import memoize from 'memoizee'
import path from 'path'
import { EXPERIMENTS_TREE_PATH, VIRTUAL_INDEX_PATH } from './constants'
import { generate } from './generate'

export interface VitroConfig {
    experiments: string[]
    wrapper?: string
    ignore?: string[]
}

interface PluginArgs {
    config: VitroConfig
    experimentsFilters: string[]
}

export function VitroPlugin(args: PluginArgs): Plugin {
    const { config, experimentsFilters } = args
    const generateCode = memoize((root) =>
        generate({ config, root, experimentsFilters }),
    )
    return {
        name: 'vitro',
        setup({ ctx: { root }, onTransform, onResolve, onLoad }) {
            // TODO invalidate cache on file changes
            onResolve({ filter: /\.html$/ }, (args) => {
                return { path: path.resolve(args.path) }
            })
            onLoad({ filter: /\.html$/ }, (args) => {
                return { contents: htmlTemplate }
            })

            onResolve(
                { filter: new RegExp(escapeRegExp(VIRTUAL_INDEX_PATH)) },
                (args) => {
                    return {
                        path: path.resolve(root, VIRTUAL_INDEX_PATH),
                    }
                },
            )
            onLoad(
                { filter: new RegExp(escapeRegExp(VIRTUAL_INDEX_PATH)) },
                async (args) => {
                    const { virtualIndexCode } = await generateCode(root)
                    return {
                        contents: virtualIndexCode,
                        loader: 'jsx',
                    }
                },
            )
            onResolve(
                { filter: new RegExp(escapeRegExp(EXPERIMENTS_TREE_PATH)) },
                (args) => {
                    return {
                        path: path.resolve(root, EXPERIMENTS_TREE_PATH),
                    }
                },
            )
            onLoad(
                { filter: new RegExp(escapeRegExp(EXPERIMENTS_TREE_PATH)) },
                async (args) => {
                    const { experimentsTree } = await generateCode(root)
                    const contents = `export default ${JSON.stringify(
                        experimentsTree,
                        null,
                        4,
                    )}`
                    return {
                        contents,
                        loader: 'js',
                    }
                },
            )
        },
    }
}

const htmlTemplate = `
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
        <script type="module" src="/${VIRTUAL_INDEX_PATH}?namespace=file"></script>
    </body>
</html>
`

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
