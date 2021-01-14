/** @type {import('@vitro/cli').VitroConfig} */
module.exports = {
    globs: ['./**/*.vitro.jsx', './**/*.vitro.tsx'],
    bundlessConfig: { build: { basePath: '/' } },
}
