import EsmExternals from '@esbuild-plugins/esm-externals'
import { build } from 'esbuild'

async function bundle() {
    await build({
        plugins: [EsmExternals({ externals: ['react', 'react-dom'] })],
        target: 'es2018',
        bundle: true,
        format: 'esm',
        entryPoints: ['src/index.ts'],
        sourcemap: true,
        outfile: 'bundle/index.js',
    })
}

if (process.env.WATCH) {
    const chokidar = require('chokidar')

    // One-liner for current directory
    chokidar
        .watch('.', { ignored: /(node_modules|bundle|dist|tsconfig\.tsbuildinfo)/, ignoreInitial: true })
        .on('change', (event, path) => {
            console.log(event)
            bundle()
        })
    bundle()
} else {
    bundle()
}
