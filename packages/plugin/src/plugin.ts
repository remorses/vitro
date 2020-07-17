import { generateStories, generateStoriesMap } from './stories'
import { loader } from 'webpack'
import transpilePlugin from 'next-transpile-modules'
import path from 'path'
import fs from 'fs'
import { TESTING } from './constants'

const excludedDirs = ['.vitro']
if (TESTING) {
    excludedDirs.push('template')
}

export const withVitro = ({
    stories,
    wrapper,
    basePath = '',
    transpileModules = [],
    __dirname,
    ignore = ['node_modules'],
}) => (nextConfig = {} as any) => {
    stories = stories.map(path.normalize)
    if (basePath && basePath.trim() === '/') {
        basePath = ''
    }

    const generate = once(async () => {
        const storiesMap = await generateStoriesMap({
            globs: stories,
            cwd: path.resolve(path.join(__dirname, '..')),
            ignore: [...ignore, ...excludedDirs],
        })

        fs.writeFileSync(path.join(__dirname, 'storiesMap.js'), storiesMap)

        await generateStories({
            globs: stories,
            wrapperComponentPath: wrapper,
            cwd: path.resolve(path.join(__dirname, '..')),
            targetDir: path.resolve(path.join(__dirname, './pages/stories')),
            ignore,
        })
    })
    generate()

    const transpile = transpilePlugin([
        path.resolve(__dirname, '../'),
        ...transpileModules,
    ])

    return transpile({
        ...nextConfig,
        webpack: (config, options) => {
            const { webpack } = options
            // console.log({ dir, recursive, match })
            config.plugins.push(
                new webpack.DefinePlugin({
                    WRAPPER_COMPONENT_PATH: JSON.stringify(
                        wrapper
                            ? path.join(path.resolve(__dirname, '../'), wrapper)
                            : '',
                    ),
                    BASE_PATH: JSON.stringify(basePath || '/'),
                }),
            )
            // replace the stories react packages with local ones to not dedupe
            config.resolve.alias = {
                ...config.resolve.alias,
                '@vitro': path.resolve(__dirname, '../'),
                ...aliasOfPackages([
                    'react',
                    'react-dom',
                    '@emotion/core',
                    // 'emotion-theming',
                    'next',
                    // '@vitro'
                ]),
            }
            config.module.rules.push({
                test: /\.tsx?$/,
                loader: {
                    loader: 'inspect-loader',
                    options: {
                        callback(inspect) {
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
            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        },
        ...(basePath ? { experimental: { basePath } } : {}),
    })
}

function aliasOfPackages(packages) {
    return Object.assign(
        {},
        ...packages.map((p) => {
            const pkgPath = path.resolve(__dirname, '.', 'node_modules', p)
            if (fs.existsSync(pkgPath)) {
                return {
                    [p]: pkgPath,
                }
            }
            return {}
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
