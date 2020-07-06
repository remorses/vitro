const compose = require('compose-function')
const transpile = require('next-transpile-modules')(['example-package'])

const composed = compose(transpile)

module.exports = composed({
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
})
