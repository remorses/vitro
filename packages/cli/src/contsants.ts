import path from 'path'

export const CMD = 'vitro'
export const NEXT_APP_PATH = '.vitro'
export const TESTING = process.env.NODE_ENV == 'test'

export const CONFIG_PATH = 'vitro.config.js'

export const TEMPLATE_PATH = TESTING
    ? path.resolve(__dirname, '../../template')
    : path.resolve(__dirname, '../template')

export const DEFAULT_CONFIG = `
module.exports = {
    experiments: ['./**',],
}
`

// const root = path.dirname(path.resolve(path.join('..', 'package.json')))
