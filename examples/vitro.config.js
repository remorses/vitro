/** @type {import('@vitro/cli').VitroConfig} */
module.exports = {
    globs: ['./**/*.vitro.js', './**/*.vitro.jsx', './**/*.vitro.tsx'],
    // backend: 'vite',
    bundlessConfig: {
        prebundle: {
            // includeWorkspacePackages: true,
        },
    },
    ignore: ['__mirror__/**'],
    links: {
        github: {
            url: 'https://github.com/remorses/vitro',
            path: 'examples',
            branch: 'master',
        },
    },
    // basePath: '/vitro-test-1/example-upload',
}
