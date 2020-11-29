import { UserConfig } from 'vite'

const config: UserConfig = {
    jsx: 'react',
    optimizeDeps: {
        include: ['prop-types', 'react-router-dom'],
        // link: ['@vitro/ui'],
    },
    configureServer: (ctx) => {
        return
    },
}

export default config
