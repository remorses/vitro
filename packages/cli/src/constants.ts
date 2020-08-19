import path from 'path'

export const CMD = 'vitro'
export const TESTING = process.env.NODE_ENV == 'test'
export const NEXT_APP_PATH = TESTING ? 'renderer' : '.vitro'

export const CONFIG_PATH = 'vitro.config.js'
export const VERSION_FILE_PATH = 'version.js'

export const TEMPLATE_PATH = TESTING
    ? path.resolve(__dirname, '../../template')
    : path.resolve(__dirname, '../template')

// TODO add more options commented out and the docs link for the configuration object
export const DEFAULT_CONFIG = `
// read more at https://vitro.now.sh/docs/config
module.exports = {
    experiments: ['./**/*.vitro.jsx'], // globs to search for experiment files
    globalCSS: [], // path to css files to use to for all experiments
    ignore: [], // add directories to ignore when searching for experiment files
    transpileModules: [], // list of packages to transpile
    // wrapper: './wrapper.tsx' // file that has a wrapper component as default export 
    // basePath: '/vitro-app', // modifies the deployed base path
}
`

// const root = path.dirname(path.resolve(path.join('..', 'package.json')))
