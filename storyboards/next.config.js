const compose = require('compose-function')
const path = require('path')

// TODO the watcher should notify the user should call `start` again to make changes take effect (next dev does not reload config)

// TODO generate the context.require expression here, so i can make it as complex as i can and inject it via define plugin

const transpile = require('next-transpile-modules')([path.resolve(__dirname, '../')])

const composed = compose(transpile)

module.exports = composed({
    webpack: (config, options) => {
        const { webpack } = options
        config.plugins.push(
            new webpack.DefinePlugin({
                REQUIRE_CONTEXT: `require.context('../../', true, /(?!.*(?:node_modules)).*story\.tsx$/)`,
            }),
        )
        // TODO add React and chakra to externals packages to not duplicate them in stories
        // config.module.rules.push({
        //     test: /\.+(js|jsx|mjs|ts|tsx)$/,
        //     loader: options.defaultLoaders.babel,
        //     include: [path.resolve(__dirname, '../example-package')],
        //     exclude: /node_modules/,
        // })

        return config
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
})
