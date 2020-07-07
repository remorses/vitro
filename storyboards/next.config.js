const compose = require('compose-function')
const transpile = require('next-transpile-modules')(['example-package',  '@example-package-scope'])

const composed = compose(transpile)

module.exports = composed({
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
})
