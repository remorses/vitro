// read more at https://vitro.now.sh/docs/config
module.exports = {
    packageManager: 'yarn', // npm or yarn
    experiments: ['./**/*.vitro.tsx'], // globs to search for experiment files
    globalCSS: [], // path to css files to use to for all experiments
    ignore: [], // add directories to ignore when searching for experiment files
    transpileModules: ['@vitro'], // list of packages to transpile
    // wrapper: './wrapper.tsx' // file that has a wrapper component as default export
    // basePath: '/vitro-app', // modifies the deployed base path
}
