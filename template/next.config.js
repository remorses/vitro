const compose = require('compose-function')
const { generateStories, generateStoriesMap } = require('../storyboards')
const path = require('path')
const fs = require('fs')
const { toRequireContext } = require('./configSupport')

/*
parameters used
- transpiled packages, no pass them explicity
- required config obj
- wrapper component path
- aliases
*/

const transpile = require('next-transpile-modules')([
    path.resolve(__dirname, '../'),
])

const composed = compose(transpile)

const excludedDirs = ['.storyboards']
if (process.env.STORYBOARDS_TEMPLATE) {
    excludedDirs.push('template')
}

let { stories, wrapper, basePath, ignore = ['node_modules'] } =
    getConfig() || {}

stories = stories.map(path.normalize)
if (basePath && basePath.trim() === '/') {
    basePath = ''
}

// const storiesGlobs = stories.map((g) => path.normalize(path.join('./', g)))
// console.log({ storiesGlobs })

const generate = once(async () => {
    const storiesMap = await generateStoriesMap({
        globs: stories,
        cwd: path.resolve(path.join(__dirname, '..')),
        ignore: [...ignore, ...excludedDirs],
    })

    fs.writeFileSync(path.join(__dirname, 'storiesMap.js'), storiesMap)

    await generateStories({
        globs: stories,
        cwd: path.resolve(path.join(__dirname, '..')),
        targetDir: path.resolve(path.join(__dirname, './pages/stories')),
        ignore,
    })
})
generate()

module.exports = composed({
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
                        console.log(inspect.context.resourcePath)
                        // console.log(inspect.options)
                    },
                },
            },
        })
        return config
    },
    ...(basePath ? { experimental: { basePath } } : {}),
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
})

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

function getConfig() {
    try {
        return require('../storyboards.config')
    } catch (e) {
        console.log(`cannot find './storyboards.config.js'`)
        process.exit(1)
    }
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
