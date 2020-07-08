import path from 'path'

export const CMD = 'storyboards'
export const NEXT_APP_PATH = '.storyboards'

export const CONFIG_PATH = 'storyboards.config.js'

export const TEMPLATE_PATH =
    process.env.NODE_ENV == 'test'
        ? path.resolve(__dirname, '../../template')
        : path.resolve(__dirname, '../template') // TODO when building copy the template in the root folder

export const DEFAULT_CONFIG = `
module.exports = {
    stories: ['./**',],
}
`

// const root = path.dirname(path.resolve(path.join('..', 'package.json')))
