const { withVitro } = require('@vitro/plugin')

const plugin = withVitro({
    __dirname,
    ...require('../vitro.config'),
})

module.exports = plugin({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
})
