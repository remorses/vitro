import { UserConfig } from 'vite'
import vitro from '@vitro/plugin'

import { esbuildOptimizerPlugin } from 'vite-esbuild-optimizer'

import fs from 'fs'
import path from 'path'
import { VIRTUAL_INDEX_PUBLIC_PATH } from '@vitro/plugin/dist/constants'

const useEsbuild = true

const config: UserConfig = {
    jsx: 'react',
    optimizeDeps: {
        auto: !useEsbuild,
        include: ['prop-types', 'react-router-dom', 'react-is'],
        // link: ['@vitro/ui'],
    },
    plugins: [
        useEsbuild &&
            esbuildOptimizerPlugin({
                entryPoints: [VIRTUAL_INDEX_PUBLIC_PATH],
                // link: ['example-linked-package'],
                force: true,
            }),
        vitro(require('./vitro.config')),
    ],
}

export default config
