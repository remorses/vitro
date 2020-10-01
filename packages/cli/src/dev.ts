import {
    runCommand,
    printGreen,
    printRed,
    fatal,
    findVitroJsConfigPath,
    findVitroAppDir,
    getVitroAppVersion,
    getVitroConfig,
    getExperimentsFilters,
} from './support'
import path from 'path'
// import { NEXT_APP_PATH, CMD, CONFIG_PATH, VERSION_FILE_PATH } from './constants'
import { CommandModule } from 'yargs'
import { initHandler } from './init'
import { existsSync } from 'fs-extra'
import {
    VitroConfig,
    PackageManager,
    FILTER_EXPERIMENTS,
    getExperimentsPathFilter,
} from '@vitro/plugin'
import { NEXT_APP_PATH } from './constants'
const { version: cliVersion } = require('../package.json')

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
            const jsConfigPath = findVitroJsConfigPath()
            const experimentsFilter = getExperimentsFilters(argv)
            process.chdir(path.resolve(path.dirname(jsConfigPath)))
            const appDir = findVitroAppDir()
            const vitroConfig = getVitroConfig()
            const packageManager = vitroConfig.packageManager || 'npm'
            // if no vitro app is present, run init
            if (!existsSync(appDir)) {
                printGreen(
                    `no ./${NEXT_APP_PATH} found, running init command first`,
                    true,
                )
                // this way you can run vitro even if .vitro is inside .gitignore
                await initHandler({
                    packageManager,
                })
            }
            // if vitro version is different, run init
            const vitroAppVersion = getVitroAppVersion()
            if (cliVersion !== vitroAppVersion) {
                printGreen(
                    `vitro app version ('${vitroAppVersion}') is different than the cli version ('${cliVersion}'), running init`,
                    true,
                )
                // this way you can run vitro even if .vitro is inside .gitignore
                await initHandler({
                    packageManager,
                })
            }

            console.info('starting the server')
            const command = getDevCommand(packageManager, argv.port)
            await runCommand({
                command,
                env: {
                    ...process.env,
                    ...(Boolean(argv.verbose)
                        ? {
                              VERBOSE: 'true',
                          }
                        : {}),
                    [FILTER_EXPERIMENTS]: experimentsFilter.join(','),
                },
                silent: false,
                cwd: appDir,
            }).catch((e) => {
                throw new Error(
                    `error running vitro's nextjs application: ${e}`,
                )
            })
        } catch (e) {
            printRed(`could not start the dev server, ${e}`, true)
            fatal(`try rerunning the 'vitro init' command`)
        }
    },
} // as CommandModule

export default command

function getDevCommand(packageManager: PackageManager, port): string {
    if (packageManager === 'yarn') {
        return `yarn run dev -p ${port}`
    }
    if (packageManager === 'npm') {
        // const NPM_NEXT_BIN = path.join(
        //     findVitroAppDir(),
        //     `node_modules/.bin/next`,
        // )
        return `npm run dev -- -p ${port}`
    }
    if (packageManager === 'pnpm') {
        return `pnpm dev -- -p ${port}`
    }
}
