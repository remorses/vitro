import { build } from '@bundless/cli'
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

const buildCommand: CommandModule = {
    command: ['build'],
    describe: 'Builds to a static folder',
    builder: (argv) => {
        argv.option('out', {
            alias: 'o',
            type: 'string',
            default: 'out',
            required: false,
            description: 'The folder to store the static site',
        })
        return argv
    },
    handler: async (argv: any) => {
        try {
            // if no vitro config is present, ask to run init first
            const root = path.dirname(findVitroJsConfigPath())
            const vitroConfig = getVitroConfig()
            const buildResult = build({
                root,
                jsx: 'react',
                entries: ['index.html'],
                build: {
                    minify: true,
                    outDir: argv.out,
                },
                // entries: ['./index.html'],
                plugins: [
                    VitroPlugin({
                        config: vitroConfig,
                        experimentsFilters: [],
                    }),
                ],
            })
        } catch (e) {
            printRed(`could not build`, true)
            printRed(e.message)
            printRed(e.stack)
            fatal()
        }
    },
} // as CommandModule

export default buildCommand
