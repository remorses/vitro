import { serve } from '@bundless/cli'
import { VitroPlugin } from '@vitro/plugin'
import path from 'path'
// import { NEXT_APP_PATH, CMD, CONFIG_PATH, VERSION_FILE_PATH } from './constants'
import { CommandModule } from 'yargs'
import {
    fatal,
    findVitroJsConfigPath,
    getVitroConfig,
    printRed,
} from './support'
// const { version: cliVersion } = require('../package.json')

const command: CommandModule = {
    command: ['dev', '*'],
    describe: 'Starts vitro dev server',
    builder: (argv) => {
        argv.option('port', {
            alias: 'p',
            type: 'number',
            default: 7007,
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

            // only run stories inside cwd
            const cwd = path.resolve(process.cwd())
            if (cwd !== root) {
                experimentsFilters.push(cwd)
            }

            const server = serve({
                root,
                jsx: 'react',
                entries: ['index.html'],
                server: {
                    port: argv.port,
                },
                // entries: ['./index.html'],
                plugins: [
                    VitroPlugin({
                        config: vitroConfig,
                        experimentsFilters,
                    }),
                ],
            })
        } catch (e) {
            printRed(`could not start the dev server, ${e}`, true)
            fatal(`try rerunning the 'vitro init' command`)
        }
    },
} // as CommandModule

export default command
