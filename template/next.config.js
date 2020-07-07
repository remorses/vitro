const compose = require('compose-function')
const path = require('path')
const fs = require('fs')
const { toRequireContext } = require('storyboards/dist')

// TODO the watcher should notify the user should call `start` again to make changes take effect (next dev does not reload config)

// TODO generate the context.require expression here, so i can make it as complex as i can and inject it via define plugin

const transpile = require('next-transpile-modules')([
    path.resolve(__dirname, '../'),
])

const composed = compose(transpile)

const input = path.join(path.resolve(__dirname, '../'), './**/*.story.tsx') // TODO this path is relative to template/components/

module.exports = composed({
    webpack: (config, options) => {
        const { webpack } = options
        // TODO add React and chakra to externals packages to not duplicate them in stories
        const { path: dir, recursive, match } = toRequireContext(input)
        console.log({ dir, recursive, match })
        config.plugins.push(
            new webpack.DefinePlugin({
                STORIES_EXTENSION: match,
                STORIES_PATH: JSON.stringify(dir),
                STORIES_RECURSIVE: JSON.stringify(recursive),
            }),
        )
        config.resolve.alias = {
            ...config.resolve.alias,
            ...aliasOfPackages(['react', '@chakra-ui']),
        }
        return config
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
})

function aliasOfPackages(packages) {
    return Object.assign(
        {},
        ...packages.map((p) => {
            const pkgPath = path.resolve(
                __dirname,
                '.',
                'node_modules',
                p,
            )
            if (fs.existsSync(pkgPath)) {
                return {
                    [p]: pkgPath,
                }
            }
            return {}
        }),
    )
}
