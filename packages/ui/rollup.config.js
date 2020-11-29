// rollup.config.js


import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'

/** @type {import('rollup').RollupOptions} */
const config = {
    input: 'src/index.ts',
    output: {
        name: 'bundle',
        dir: 'bundle',
        format: 'esm',
        sourcemap: 'inline',
    },
    sourcemap: '',
    external: ['react', 'react-dom', 'react-router-dom'],
    plugins: [
        resolve({
            // extensions: ['.js', '.ts', '.tsx', '.jsx'],
        }),
        esbuild({
            sourceMap: true,
            // exclude: ['node_modules/**'],
            // transforms: ['typescript', 'jsx'],
        }),
        commonjs(),
    ],
}

export default config
