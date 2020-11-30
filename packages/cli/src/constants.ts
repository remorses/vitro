import path from 'path'

export const CMD = 'vitro'
export const TESTING = process.env.VITRO_TESTING

export const CONFIG_PATH = 'vitro.config.js'


// TODO add more options commented out and the docs link for the configuration object
export const getDefaultConfig = ({}) => `
// read more at https://vitro.now.sh/docs/config
module.exports = {
    experiments: ['./**/*.vitro.jsx'], // globs to search for experiment files
    globalCSS: [], // path to css files to use to for all experiments
    ignore: [], // add directories to ignore when searching for experiment files
    transpileModules: [], // list of packages to transpile
    // wrapper: './wrapper.tsx', // file that has a wrapper component as default export 
    // basePath: '/vitro-app', // modifies the deployed base path
    // nextjsConfig: {}, // custom nextjs config
}
`

// const root = path.dirname(path.resolve(path.join('..', 'package.json')))
