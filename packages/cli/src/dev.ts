import { vitroPlugin } from '@vitro/plugin'
import { VIRTUAL_INDEX_PUBLIC_PATH } from '@vitro/plugin/dist/constants'
import chalk from 'chalk'
import { once } from 'events'
import { Server } from 'net'
import os from 'os'
import path from 'path'
import { esbuildOptimizerPlugin } from 'vite-esbuild-optimizer'
import { createServer } from 'vite/dist/node/server'
// import { NEXT_APP_PATH, CMD, CONFIG_PATH, VERSION_FILE_PATH } from './constants'
import { CommandModule } from 'yargs'
import {
    fatal,
    findVitroJsConfigPath,


    getVitroConfig, printRed
} from './support'
// const { version: cliVersion } = require('../package.json')

const command: CommandModule = {
    command: ['dev', '*'],
    describe: 'Starts vitro dev server',
    builder: (argv) => {
        argv.option('port', {
            alias: 'p',
            type: 'string',
            default: '7007',
            required: false,
            description: 'The port for the dev server',
        })
        return argv
    },
    handler: async (argv: any) => {
        try {
            // if no vitro config is present, ask to run init first
            const root = path.dirname(findVitroJsConfigPath())
            const vitroConfig = getVitroConfig()
            const experimentsFilters = (argv.filter?.length
                ? argv.filter
                : []
            ).map(path.resolve)

            const server = createServer({
                root,
                jsx: 'react',
                optimizeDeps: {
                    auto: false,
                },
                configureServer: [
                    esbuildOptimizerPlugin({
                        entryPoints: [VIRTUAL_INDEX_PUBLIC_PATH],
                        // link: ['example-linked-package'],
                        force: true,
                    }).configureServer as any,
                    vitroPlugin({
                        config: vitroConfig,
                        experimentsFilters,
                    }).configureServer,
                ],
            })
            await listen(server, { port: argv.port })
        } catch (e) {
            printRed(`could not start the dev server, ${e}`, true)
            fatal(`try rerunning the 'vitro init' command`)
        }
    },
} // as CommandModule

export default command

function listen(
    server: Server,
    options: {
        port?: number
        hostname?: string
        https?: boolean
        open?: boolean
    },
): Promise<any> {
    let port = options.port || 7070
    let hostname = options.hostname || 'localhost'
    const protocol = options.https ? 'https' : 'http'

    server.on('error', (e: Error & { code?: string }) => {
        if (e.code === 'EADDRINUSE') {
            console.log(`Port ${port} is in use, trying another one...`)
            setTimeout(() => {
                server.close()
                server.listen(++port)
            }, 100)
        } else {
            console.error(chalk.red(`[vite] server error:`))
            console.error(e)
        }
    })

    server = server.listen(port, () => {
        console.log()
        console.log(`  Dev server running at:`)
        const interfaces = os.networkInterfaces()
        Object.keys(interfaces).forEach((key) =>
            (interfaces[key] || [])
                .filter((details) => details.family === 'IPv4')
                .map((detail) => {
                    return {
                        type: detail.address.includes('127.0.0.1')
                            ? 'Local:   '
                            : 'Network: ',
                        host: detail.address.replace('127.0.0.1', hostname),
                    }
                })
                .forEach(({ type, host }) => {
                    const url = `${protocol}://${host}:${chalk.bold(port)}/`
                    console.log(`  > ${type} ${chalk.cyan(url)}`)
                }),
        )
        console.log()

        // if (options.open) {
        //     require('./utils/openBrowser').openBrowser(
        //         `${protocol}://${hostname}:${port}`,
        //     )
        // }
    })
    return once(server, 'listen')
}
