import path from 'path'

export const CMD = 'vitro'
export const TESTING = process.env.VITRO_TESTING

export const CONFIG_PATH = 'vitro.config.js'


// TODO add more options commented out and the docs link for the configuration object
export const getDefaultConfig = ({}) => `
// read more at https://vitro.now.sh/docs/config
/** @type {import('@vitro/cli').VitroConfig} */
module.exports = {
    globs: ['./**/*.vitro.jsx'], // globs to search for experiment files
    ignore: [], // add directories to ignore when searching for experiment files
    // basePath: '/vitro-app', // modifies the deployed base path
}
`

// const root = path.dirname(path.resolve(path.join('..', 'package.json')))
