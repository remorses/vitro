const { withVitro } = require('@vitro/plugin')

const plugin = withVitro({
    cwd: __dirname,
    ...require('../vitro.config'),
})

module.exports = plugin({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
})
