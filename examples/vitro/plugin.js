const fs = require('fs')

module.exports = function (snowpackConfig, pluginOptions) {
    return {
        name: 'my-snowpack-plugin',
        resolve: {
            input: ['.json'],
            output: ['.json'],
        },
        async load({ filePath }) {
            return fs.readFileSync(filePath).toString()
        },
        // ...
    }
}
