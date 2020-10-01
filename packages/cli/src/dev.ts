import {
    runCommand,
    printGreen,
    printRed,
    fatal,
    findVitroJsConfigPath,
    findVitroAppDir,
    getVitroAppVersion,
    getVitroConfig,
} from './support'
import path from 'path'
// import { NEXT_APP_PATH, CMD, CONFIG_PATH, VERSION_FILE_PATH } from './constants'
import { CommandModule } from 'yargs'
import { initHandler } from './init'
import { existsSync } from 'fs-extra'
import { VitroConfig, PackageManager } from '@vitro/plugin'
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
    handler: async (argv) => {
        try {
            // if no vitro config is present, ask to run init first
            const jsConfigPath = findVitroJsConfigPath()
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
            await start({
                port: argv.port,
                verbose: Boolean(argv.verbose),
                packageManager,
                cwd: appDir,
            })
        } catch (e) {
            printRed(`could not start the dev server, ${e}`, true)
            fatal(`try rerunning the 'vitro init' command`)
        }
    },
} // as CommandModule

export default command

async function start({ port, verbose, packageManager, cwd }) {
    const command = getDevCommand(packageManager, port)
    return await runCommand({
        command,
        env: {
            ...process.env,
            ...(verbose
                ? {
                      VERBOSE: 'true',
                  }
                : {}),
        },
        
        silent: false,
        cwd,
    }).catch((e) => {
        throw new Error(`could not start vitro: ${e}`)
    })
}

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
