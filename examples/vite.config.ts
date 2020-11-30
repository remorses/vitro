import { UserConfig } from 'vite'
import vitro from '@vitro/plugin'
import fs from 'fs'
import path from 'path'

const config: UserConfig = {
    jsx: 'react',
    optimizeDeps: {
        include: ['prop-types', 'react-router-dom', 'react-is'],
        // link: ['@vitro/ui'],
    },
    plugins: [vitro(require('./vitro.config'))],
}

export default config
