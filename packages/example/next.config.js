const compose = require('compose-function')
const path = require('path')
const { withVitro } = require('@vitro/plugin')

// TODO move transpile in the plugin if idempotent
const transpile = require('next-transpile-modules')([
    path.resolve(__dirname, '../'),
    '@vitro', // TODO transpile only on DEV
])

const vitro = withVitro({
    __dirname,
    ...require('../vitro.config'),
})

const plugin = compose(transpile, vitro)

module.exports = plugin({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
})
