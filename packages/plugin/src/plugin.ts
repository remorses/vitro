import fs from 'fs'
import { withCSS } from './css'
import globrex from 'globrex'
// import transpilePlugin from 'next-transpile-modules'
// import SpeedMeasurePlugin from 'speed-measure-webpack-plugin'
// import { ProfilingAnalyzer } from 'umi-webpack-profiling-analyzer'

import path from 'path'

import { TESTING, VERBOSE } from './constants'

import { debug, resolve, regexEqual } from './support'
import { generate } from './generate'
import chokidar from 'chokidar'
import { mapKeys, throttle } from 'lodash'
import { transpilationPlugin } from './transpilePlugin'

export type PackageManager = 'yarn' | 'npm' | 'pnpm'

export interface VitroConfig {
    experiments: string[]
    packageManager: PackageManager
    wrapper?: string
    importCSS?: boolean
    basePath?: string
    transpileModules?: string[]
    globalCSS?: string[]
    cwd: string
    ignore?: string[]
    doNotTranspile?: string[]
}

export const withVitro = (vitroConfig: VitroConfig) => (
    nextConfig = {} as any,
) => {
    if (!vitroConfig.experiments) {
        throw new Error(
            `Config file has no 'experiments' field, add a field with an array of globs`,
        )
    }

    // validate
    mapKeys(vitroConfig, (v, k) => {
        if (
            v &&
            ['experiments', 'globalCSS', 'transpileModules'].includes(k) &&
            !Array.isArray(v)
        ) {
            throw new Error(`${k} should be an array, received '${v}'`)
        }
    })

    let {
        experiments = [],
        wrapper,
        importCSS,
        transpileModules = [],
        doNotTranspile = [],
        globalCSS = [],
        cwd,
    } = vitroConfig

    experiments = experiments.map(path.normalize)

    // console.log({transpileModules})
    // const transpile = transpilePlugin([
    //     path.resolve(cwd, '../').toString(),
    //     ...transpileModules,
    // ])

    let resultConfig = {
        ...nextConfig,
        webpack: (config, options) => {
            const { webpack } = options

            watchChanges({
                cb: async (p) => {
                    if (options.isServer) {
                        return
                    }
                    console.info('generating experiments files')
                    await generate(vitroConfig).catch(console.error)
                    console.info('generated experiments files')
                },
                ignored: [
                    'pages/experiments',
                    '.next/',
                    'node_modules',
                    '.git/',
                ],
                globs: [
                    ...experiments.map((p) => path.join('../', p)),
                    ...(wrapper ? [wrapper] : []),
                ],
            })

            // console.log({ dir, recursive, match })
            config.plugins.push(
                new webpack.DefinePlugin({
                    'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
                    GLOBAL_CSS_CODE: makeCssImportCodeSnippet(globalCSS),
                    WRAPPER_COMPONENT_PATH: JSON.stringify(
                        wrapper
                            ? path.join(
                                  path.resolve(cwd, '../').toString(),
                                  wrapper,
                              )
                            : '',
                    ),
                }),
            )
            if (
                !options.isServer &&
                // process.env.NODE_ENV === 'production' &&
                process.env.DEBUG
            ) {
                const {
                    ProfilingAnalyzer,
                } = require('umi-webpack-profiling-analyzer')
                // console.log({ ProfilingAnalyzer })
                if (ProfilingAnalyzer) {
                    config.plugins.push(
                        new ProfilingAnalyzer({
                            analyzerMode: 'none',
                        }),
                    )
                }
                // const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
                // config.plugins.push(
                //     new SpeedMeasurePlugin({
                //         // outputFormat: 'humanVerbose',
                //     }),
                // )
            }
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

            // resolve loaders for yarn v2
            config.resolveLoader.alias = {
                'inspect-loader': require.resolve('inspect-loader'),
                ...(importCSS && {
                    'css-loader': require.resolve('css-loader'),
                    'style-loader': require.resolve('style-loader'),
                    'ignore-loader': require.resolve('ignore-loader'),
                }),
                'imports-loader': require.resolve('imports-loader'),
                ...config.resolveLoader.alias,
            }

            // add css imports to _app.tsx
            if (globalCSS && globalCSS.length) {
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
            }

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        },
    }

    const transpilePlugin = transpilationPlugin({
        rootPath: path.resolve(cwd, '../').toString(),
        doNotTranspile,
        transpileModules,
    })

    resultConfig = transpilePlugin(resultConfig)

    if (importCSS) {
        console.log(
            `using css loader version ${
                require('css-loader/package.json').version
            }`,
        )
        resultConfig = withCSS(resultConfig)
    }
    return resultConfig
}

function watchChanges({ ignored, globs, cb }) {
    if (process.env.DISABLE_WATCH || process.env.NODE_ENV === 'production') {
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

function makeCssImportCodeSnippet(imports: string[]) {
    let code = ''
    imports.forEach((p) => {
        code += `import '${p}'\n`
    })
    return code
}
