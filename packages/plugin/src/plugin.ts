import fs from 'fs'
import transpilePlugin from 'next-transpile-modules'
import path from 'path'
import { loader } from 'webpack'
import { TESTING, VERBOSE } from './constants'
import { generateExperiments, generateExperimentsMap } from './experiments'
import { debug, resolve } from './support'
import { generate } from './generate'

export interface PluginArgs {
    experiments: string[]
    wrapper?: string
    basePath?: string
    transpileModules?: string[]
    globalCSS?: string[]
    cwd: string
    ignore?: string[]
}

export const withVitro = (args: PluginArgs) => (nextConfig = {} as any) => {
    let {
        experiments = [],
        wrapper,
        basePath = '',
        transpileModules = [],
        globalCSS = [],
        cwd,
    } = args
    experiments = experiments.map(path.normalize)
    if (basePath && basePath.trim() === '/') {
        basePath = ''
    }

    generate(args)

    const transpile = transpilePlugin([
        path.resolve(cwd, '../'),
        ...transpileModules,
    ])

    return transpile({
        ...nextConfig,
        webpack: (config, options) => {
            const { webpack } = options
            // console.log({ dir, recursive, match })
            config.plugins.push(
                new webpack.DefinePlugin({
                    GLOBAL_CSS_CODE: makeCssImportCodeSnippet(globalCSS),
                    WRAPPER_COMPONENT_PATH: JSON.stringify(
                        wrapper
                            ? path.join(path.resolve(cwd, '../'), wrapper)
                            : '',
                    ),
                    BASE_PATH: JSON.stringify(basePath || '/'),
                }),
            )
            // replace the experiments react packages with local ones to not dedupe
            config.resolve.alias = {
                ...config.resolve.alias,
                // '@vitro': path.resolve(__dirname, '../'),
                ...aliasOfPackages({
                    cwd,
                    packages: [
                        'react',
                        'react-dom',
                        'next',
                        // '@emotion/core', // TODO sometimes emotion is picked from different places (in yarn workspaces for example) maybe i should vendor it
                        // 'emotion-theming',
                        // '@vitro'
                    ],
                }),
            }

            // prints some info about what is being compiled
            config.module.rules.push({
                test: /\.tsx?$/,
                loader: {
                    loader: 'inspect-loader',
                    options: {
                        callback(inspect) {
                            if (!VERBOSE) {
                                return
                            }
                            // console.log(inspect.arguments)
                            const context: loader.LoaderContext =
                                inspect.context
                            console.log(
                                'compiling',
                                path.relative(
                                    path.resolve('..'),
                                    context.resourcePath,
                                ),
                            )
                            // console.log(inspect.options)
                        },
                    },
                },
            })

            // add css imports to _app.tsx
            config.module.rules.push({
                // You can use `regexp`
                // test: /example\.js/$
                test: /_app\.tsx$/,
                use: [
                    {
                        loader: 'imports-loader',
                        options: {
                            imports: globalCSS.map((moduleName) => ({
                                syntax: 'side-effects',
                                moduleName,
                            })),
                        },
                    },
                ],
            })

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        },
        ...(basePath ? { experimental: { basePath } } : {}),
    })
}

function aliasOfPackages(args: { packages: string[]; cwd }) {
    return Object.assign(
        {},
        ...args.packages.map((p) => {
            try {
                const resolved = resolve(p)
                debug(`using local instance of '${p}' at '${resolved}'`)
                return {
                    [p]: resolved,
                }
            } catch (e) {
                console.error(`ERROR: cannot resolve local instance of ${p}`)
                return {}
            }
        }),
    )
}

function once(fn) {
    var result
    return function () {
        if (fn) {
            result = fn.apply(this, arguments)
            fn = null
        }
        return result
    }
}

function makeCssImportCodeSnippet(imports: string[]) {
    let code = ''
    imports.forEach((p) => {
        code += `import '${p}'\n`
    })
    return code
}
