import { Plugin, Config as BundlessConfig } from '@bundless/cli'
import { escapeRegExp } from 'lodash'
import memoize from 'memoizee'
import path from 'path'
import {
    EXPERIMENTS_TREE_PATH,
    VIRTUAL_INDEX_PATH,
    EXPERIMENTS_TREE_GLOBAL_VARIABLE,
} from './constants'
import { generate } from './generate'
import { transformInlineMarkdown } from './docs'
import { ReactRefreshPlugin } from '@bundless/plugin-react-refresh'
import { injectLocationPlugin } from './inject-location'
import { init, parse } from 'es-module-lexer'
import { transform } from 'esbuild'

export interface VitroConfig {
    globs: string[]
    ignore?: string[]
    basePath?: string
    bundlessConfig?: BundlessConfig
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
        setup(hooks) {
            const {
                ctx: { root },
                onTransform,
                onResolve,
                onLoad,
            } = hooks
            // TODO invalidate cache on file changes
            onResolve({ filter: /\.html$/ }, (args) => {
                return { path: path.resolve(root, args.path) }
            })
            onLoad({ filter: /\.html$/ }, (args) => {
                return { contents: htmlTemplate }
            })

            // resolve react and react-dom to root to prevent duplication
            // TODO add react aliases after esbuild allows resolve overrides https://github.com/evanw/esbuild/issues/501
            // onResolve({ filter: /^(react|react-dom)/ }, async (args) => {
            //     const resolved = await resolveAsync(args.path, {
            //         basedir: root,
            //         extensions: ['.js', '.cjs'],
            //         preserveSymlinks: false,
            //         mainFields: MAIN_FIELDS,
            //     })
            //     if (resolved) {
            //         return {
            //             path: resolved,
            //         }
            //     }
            // })

            let parserReady = false
            onTransform({ filter: /\.(tsx?|jsx)$/ }, async (args) => {
                // TODO only run if there is an import to docs
                let contents = args.contents
                if (args.contents.includes('docs`')) {
                    contents = transformInlineMarkdown(args.contents)
                }

                const result = await transform(contents, {
                    // format: 'esm', // passing format reorders exports https://github.com/evanw/esbuild/issues/710
                    sourcemap: 'inline',
                    sourcefile: args.path,
                    minify: false,
                    keepNames: true,
                    // treeShaking: 'ignore-annotations',
                    loader: 'default',
                })

                contents = result.code

                if (!parserReady) {
                    await init
                    parserReady = true
                }
                const exported = getExports(contents, args.path)

                contents += `\n\nexport const __vitroExportsOrdering = ${JSON.stringify(
                    exported,
                )};`

                return {
                    contents,
                    loader: 'js', // TODO skip built in esbuild if loader is already js
                }
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

            // TODO does not work because jsx id replaced by esbuild, this should run before esbuild
            ReactRefreshPlugin({ babelPlugins: [injectLocationPlugin] }).setup(
                hooks,
            )

            onLoad(
                { filter: new RegExp(escapeRegExp(EXPERIMENTS_TREE_PATH)) },
                async (args) => {
                    const { experimentsTree } = await generateCode(root)
                    const contents =
                        `const tree = ${JSON.stringify(
                            experimentsTree,
                            null,
                            4,
                        )};\nexport default tree;\n` +
                        `window.${EXPERIMENTS_TREE_GLOBAL_VARIABLE} = tree;\n`
                    return {
                        contents,
                        loader: 'js',
                    }
                },
            )
        },
    }
}

function getExports(source: string, filename) {
    try {
        const [, exports] = parse(source)
        return exports
    } catch (e) {
        throw new Error(`Could not analyze exports for ${filename}\n${source}`)
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
