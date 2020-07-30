const { withVitro } = require('@vitro/plugin')

const plugin = withVitro({
    ...require('../vitro.config'),
    cwd: __dirname,
})

module.exports = plugin({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
})
