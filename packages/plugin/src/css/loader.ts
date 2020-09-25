// import ExtractCssChunks from 'extract-css-chunks-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import findUp from 'find-up'
// import OptimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin'

const fileExtensions = new Set()
let extractCssInitialized = false

export const cssLoaderConfig = (
    config,
    {
        extensions = [],
        cssModules = false,
        cssLoaderOptions = {},
        dev,
        isServer,
        postcssLoaderOptions = {} as any,
        loaders = [],
    },
) => {
    // We have to keep a list of extensions for the splitchunk config
    for (const extension of extensions) {
        fileExtensions.add(extension)
    }

    // if (!isServer) {
    //     config.optimization.splitChunks.cacheGroups.styles = {
    //         name: 'styles',
    //         test: new RegExp(`\\.+(${[...fileExtensions].join('|')})$`),
    //         chunks: 'all',
    //         enforce: true,
    //     }
    // }

    // if (!isServer && !extractCssInitialized) {
    //     // config.plugins.push(
    //     //     new MiniCssExtractPlugin({
    //     //         // Options similar to the same options in webpackOptions.output
    //     //         // both options are optional
    //     //         filename: dev
    //     //             ? 'static/chunks/[name].css'
    //     //             : 'static/chunks/[name].[contenthash:8].css',
    //     //         chunkFilename: dev
    //     //             ? 'static/chunks/[name].chunk.css'
    //     //             : 'static/chunks/[name].[contenthash:8].chunk.css',
    //     //         // hmr: dev,
    //     //         // reloadAll: dev,
    //     //         esModule: true,
    //     //         ignoreOrder: true,
    //     //     }),
    //     // )
    //     extractCssInitialized = true
    // }

    if (!dev) {
        if (!Array.isArray(config.optimization.minimizer)) {
            config.optimization.minimizer = []
        }

        // config.optimization.minimizer.push(
        //     new OptimizeCssAssetsWebpackPlugin({
        //         cssProcessorOptions: {
        //             discardComments: { removeAll: true },
        //         },
        //     }),
        // )
    }

    const postcssConfigPath = findUp.sync('postcss.config.js', {
        cwd: config.context,
    })
    let postcssLoader

    // if (postcssConfigPath) {
    //     // Copy the postcss-loader config options first.
    //     const postcssOptionsConfig = Object.assign(
    //         {},
    //         postcssLoaderOptions.config,
    //         { path: postcssConfigPath },
    //     )

    //     postcssLoader = {
    //         loader: 'postcss-loader',
    //         options: Object.assign({}, postcssLoaderOptions, {
    //             config: postcssOptionsConfig,
    //         }),
    //     }
    // }

    const cssLoader = {
        loader: 'css-loader',
        options: Object.assign(
            {},
            {
                modules: cssModules,
                sourceMap: false,
                // importLoaders: loaders.length + (postcssLoader ? 1 : 0),
                onlyLocals: isServer,
            },
            cssLoaderOptions,
        ),
    }

    // When not using css modules we don't transpile on the server
    if (isServer && !cssLoader.options.modules) {
        return ['ignore-loader']
    }

    // When on the server and using css modules we transpile the css
    if (isServer && cssLoader.options.modules) {
        return [cssLoader, postcssLoader, ...loaders].filter(Boolean)
    }

    return ['style-loader', 'css-loader', ...loaders].filter(Boolean)
}
