import { build, Config as BundlessConfig } from '@bundless/cli'
import { VitroPlugin } from '@vitro/plugin'
import { ReactRefreshPlugin } from '@bundless/plugin-react-refresh'
import path from 'path'
import { CommandModule } from 'yargs'
import {
    fatal,
    findVitroJsConfigPath,
    getVitroConfig,
    printRed,
} from './support'
import deepmerge from 'deepmerge'
import { CONFIG_NAME } from '@bundless/cli/dist/constants'

const buildCommand: CommandModule = {
    command: ['build [cwd]'],
    describe: 'Builds to a static folder',
    builder: (argv) => {
        argv.option('out', {
            alias: 'o',
            type: 'string',
            default: 'out',
            required: false,
            description: 'The folder to store the static site',
        })
        argv.positional('cwd', {
            type: 'string',
            required: false,
            description: `The starting directory to search for ${CONFIG_NAME}`,
        })
        return argv
    },
    handler: async (argv: any) => {
        try {
            await buildHandler(argv)
        } catch (e) {
            printRed(`could not build`, true)
            printRed(e.message)
            printRed(e.stack)
            fatal()
        }
    },
}

export async function buildHandler(argv: {
    cwd?: string
    out?: string
}): Promise<any> {
    // if no vitro config is present, ask to run init first
    const cwd = path.resolve(argv.cwd || process.cwd())
    const root = path.dirname(findVitroJsConfigPath(cwd))
    const vitroConfig = getVitroConfig(findVitroJsConfigPath(cwd))
    const ownConfig: BundlessConfig = {
        root,
        jsx: 'react',
        entries: ['index.html'],
        build: {
            minify: true,
            outDir: argv.out,
            basePath: vitroConfig.basePath || '/',
        },
        // entries: ['./index.html'],
        plugins: [
            VitroPlugin({
                config: vitroConfig,
                experimentsFilters: [],
            }),
        ],
    }
    const buildResult = await build(
        deepmerge(vitroConfig.bundlessConfig || {}, ownConfig),
    )
    return buildResult
}

export default buildCommand
