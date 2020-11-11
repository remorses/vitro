const locationInjectPlugin = require('@vitro/babel-plugin-inject-location')

module.exports = {
    presets: ['next/babel'],
    plugins: [
        'babel-plugin-macros',
        locationInjectPlugin.default, // inject the filename and line number
    ],
}
