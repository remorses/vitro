import { runCommand, printGreen, printRed, fatal } from './support'
import path from 'path'
import { NEXT_APP_PATH, CMD, CONFIG_PATH, VERSION_FILE_PATH } from './contsants'
import { CommandModule } from 'yargs'
import { initHandler } from './init'
import { existsSync } from 'fs-extra'
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
            if (!existsSync(CONFIG_PATH)) {
                fatal(
                    `There is no ./${CONFIG_PATH} file, you probably need to run '${CMD} init' first or change cwd`,
                )
            }
            // if no vitro app is present, run init
            if (!existsSync(NEXT_APP_PATH)) {
                printGreen(
                    `no ${NEXT_APP_PATH} found, running init command first`,
                    true,
                )
                // this way you can run vitro even if .vitro is inside .gitignore
                await initHandler()
            }
            // if vitro version is different, run init
            const vitroAppVersion = getVitroAppVersion()
            if (cliVersion !== vitroAppVersion) {
                printGreen(
                    `vitro app version ('${vitroAppVersion}') is different than the cli version ('${cliVersion}'), running init`,
                    true,
                )
                // this way you can run vitro even if .vitro is inside .gitignore
                await initHandler()
            }
            // if no node_modules folder is present inside the app, rerun init
            if (
                !existsSync(
                    path.resolve(NEXT_APP_PATH, 'node_modules', 'react'),
                )
            ) {
                printGreen(
                    `${NEXT_APP_PATH}/node_modules is empty, rerunning init`,
                    true,
                )
                await initHandler()
            }

            console.log('starting the server')
            await start({ port: argv.port, verbose: Boolean(argv.verbose) })
        } catch (e) {
            printRed(`could not start the dev server, ${e}`, true)
            fatal(`try rerunning the 'vitro init' command`)
        }
    },
} // as CommandModule

function getVitroAppVersion() {
    try {
        require(path.resolve(NEXT_APP_PATH, VERSION_FILE_PATH))
    } catch {
        fatal(`cannot find vitro app version file`)
    }
}

export default command

async function start({ port, verbose }) {
    if (!existsSync(NEXT_APP_PATH)) {
        // TODO if no app is present but there is a config, copy the app and run npm install
        // this way you can run vitro even if .vitro is inside .gitignore
        printRed(
            `There is no ${NEXT_APP_PATH} folder, you probably need to run '${CMD} init' first`,
            true,
        )
        return process.exit(1)
    }
    const NEXT_BIN = path.resolve(NEXT_APP_PATH, `node_modules/.bin/next`)
    return await runCommand({
        command: `${NEXT_BIN} dev -p ${port} ${path.resolve(NEXT_APP_PATH)}`,
        env: verbose
            ? {
                  VERBOSE: 'true',
              }
            : {},
        // cwd: path.resolve('.', NEXT_APP_PATH),
    }).catch((e) => {
        throw new Error(`could not start ${CMD}`)
    })
}
