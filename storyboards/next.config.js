const compose = require('compose-function')
const webpack = require('webpack') // eslint-disable-line

// TODO generate packages to transpile list on command start, or maybe pass them via environment
// TODO the watcher should notify the user should call `start` again to make changes take effect (next dev does not reload config)
const targetPackages = ['example-package', '@example-package-scope']

const transpile = require('next-transpile-modules')(targetPackages)

const composed = compose(transpile)

module.exports = composed({
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        const variablesToInject = Object.assign(
            {},
            ...targetPackages.map((value, i) => {
                return {
                    [`TARGET_PACKAGE_${i}`]: JSON.stringify(value),
                }
            }),
        )
        config.plugins.push(new webpack.DefinePlugin(variablesToInject))
        config.plugins.push(
            new webpack.DefinePlugin({
                STORIES_EXTENSION: '/story.tsx$/',
            }),
        )
        return config
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
})
