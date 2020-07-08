const compose = require('compose-function')
const path = require('path')
const fs = require('fs')
const { toRequireContext } = require('storyboards/dist')

const transpile = require('next-transpile-modules')([
    path.resolve(__dirname, '../'),
])

const composed = compose(transpile)

const { stories } = getConfig() || {}

const storiesGlobs = stories.map((g) =>
    path.join(path.resolve(__dirname, '../'), g),
)

module.exports = composed({
    webpack: (config, options) => {
        const { webpack } = options
        const { path: dir, recursive, match } = toRequireContext(storiesGlobs[0]) // TODO support for more stories paths
        // console.log({ dir, recursive, match })
        config.plugins.push(
            new webpack.DefinePlugin({
                STORIES_EXTENSION: match,
                STORIES_PATH: JSON.stringify(dir),
                STORIES_RECURSIVE: JSON.stringify(recursive),
            }),
        )
        // replace the stories react packages with local ones to not dedupe
        config.resolve.alias = {
            ...config.resolve.alias,
            ...aliasOfPackages([
                'react',
                'react-dom',
                // '@chakra-ui'
            ]),
        }
        return config
    },
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
