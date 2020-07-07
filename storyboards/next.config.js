const compose = require('compose-function')

const transpile = require('next-transpile-modules')([
    // TODO generate packages to transpile list on command start, ro maybe import them from the config
    // TODO the watcher should notify the user should call `start` again to make changes take effect (next dev does not reload config)
    'example-package',
    '@example-package-scope',
])

const composed = compose(transpile)

module.exports = composed({
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
})
