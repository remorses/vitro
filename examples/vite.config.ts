import { UserConfig } from 'vite'
import fs from 'fs'
import path from 'path'

const config: UserConfig = {
    jsx: 'react',
    optimizeDeps: {
        include: ['prop-types', 'react-router-dom', 'react-is'],
        // link: ['@vitro/ui'],
    },
    configureServer: ({ app }) => {
        app.use(async (ctx, next) => {
            // TODO manually trigger a hmr reload on virtual file on new stories added?
            if (ctx.path === '/entry.tsx') {
                ctx.read(path.resolve('./index.tsx'))
                ctx.type = 'js'
            }
            return next()
        })
    },
}

export default config
