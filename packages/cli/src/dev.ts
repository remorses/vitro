import { serve, Config as BundlessConfig } from '@bundless/cli'

import { VitroPlugin } from './plugin'
import path from 'path'
import deepmerge from 'deepmerge'
// import { NEXT_APP_PATH, CMD, CONFIG_PATH, VERSION_FILE_PATH } from './constants'
import { CommandModule } from 'yargs'
import {
    fatal,
    findVitroJsConfigPath,
    getVitroConfig as loadVitroConfig,
    printRed,
} from './support'
import { CONFIG_NAME } from '@bundless/cli/dist/constants'

const command: CommandModule = {
    command: ['dev [cwd]', '*'],
    describe: 'Starts vitro dev server',
    builder: (argv) => {
        argv.option('port', {
            alias: 'p',
            type: 'number',
            default: 7007,
            description: 'The port for the dev server',
        })
        argv.option('force', {
            type: 'boolean',
            description: 'Force prebundling of dependencies',
        })
        argv.option('stats', {
            type: 'boolean',
            description: 'Show profiling stats on terminal after command exits',
        })
        argv.positional('cwd', {
            type: 'string',
            description: `The starting directory to search for ${CONFIG_NAME}`,
        })
        return argv
    },
    handler: async (argv: any) => {
        try {
            return await devHandler(argv)
        } catch (e) {
            printRed(`could not start the dev server`, true)
            printRed(e.message)
            printRed(e.stack)
            fatal()
        }
    },
}

export async function devHandler(argv: {
    cwd?: string
    filter?: string[]
    force?: boolean
    stats?: boolean
    port?: number
}) {
    // if no vitro config is present, ask to run init first
    const cwd = path.resolve(argv.cwd || process.cwd())
    const configPath = findVitroJsConfigPath(cwd)
    const root = path.dirname(configPath)
    const vitroConfig = loadVitroConfig(configPath)
    const experimentsFilters = (argv.filter?.length
        ? argv.filter
        : []
    ).map((x) => path.resolve(x))

    // only run stories inside cwd
    if (cwd !== root) {
        experimentsFilters.push(cwd)
    }

    const ownConfig: BundlessConfig = {
        root,
        jsx: 'react',
        entries: ['index.html'],
        define: {
            'process.env.NODE_ENV': '"development"',
        },
        server: {
            port: argv.port,
        },
        prebundle: {
            force: argv.force,
        },
        printStats: argv.stats,
        // entries: ['./index.html'],
        plugins: [
            VitroPlugin({
                config: vitroConfig,
                root,
                experimentsFilters,
            }),
        ],
    }
    const server = await serve(
        deepmerge(vitroConfig?.bundlessConfig || {}, ownConfig),
    )
    return server
}

export default command
