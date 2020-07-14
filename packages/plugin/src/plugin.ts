import { generateStories, generateStoriesMap } from './stories'
import path from 'path'
import fs from 'fs'

/*
parameters used
- transpiled packages, no pass them explicity
- wrapper component path
- aliases
*/

const excludedDirs = ['.vitro']
if (process.env.VITRO_TEMPLATE) {
    excludedDirs.push('template')
}

export const withVitro = ({
    stories,
    wrapper,
    basePath,
    __dirname,
    ignore = ['node_modules'],
}) => {
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

    return {
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
                ...aliasOfPackages([
                    'react',
                    'react-dom',
                    '@emotion/core',
                    'emotion-theming',
                    'next',
                    // '@chakra-ui'
                ]),
            }
            config.module.rules.push({
                test: /\.tsx?$/,
                loader: {
                    loader: 'inspect-loader',
                    options: {
                        callback(inspect) {
                            // console.log(inspect.arguments)
                            // TODO only show for client or node
                            console.log(
                                'compiling',
                                path.relative(
                                    path.resolve('..'),
                                    inspect.context.resourcePath,
                                ),
                            )
                            // console.log(inspect.options)
                        },
                    },
                },
            })
            return config
        },
        ...(basePath ? { experimental: { basePath } } : {}),
    }
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
