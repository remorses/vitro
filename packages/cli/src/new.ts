import { runCommand, printGreen, debug } from './support'
import path from 'path'
import {
    TEMPLATE_PATH,
    DEFAULT_CONFIG,
    CONFIG_PATH,
    NEXT_APP_PATH,
    TESTING,
} from './contsants'
import { copy, writeFile, exists, existsSync, appendFile, writeFileSync } from 'fs-extra'
import { CommandModule } from 'yargs'
const { version } = require('../package.json')

const command: CommandModule = {
    command: ['new'],
    describe: 'Creates a new vitro app',
    builder: (argv) => {
        argv.option('skip-install', {
            type: 'boolean',
            boolean: true,
            default: false,
        })

        return argv
    },
    handler: async (argv) => {
        debug('argv', argv)
        debug('cwd', process.cwd())
        printGreen(`creating ${NEXT_APP_PATH}`, true)
        await copy(TEMPLATE_PATH, NEXT_APP_PATH, {
            overwrite: true,
            recursive: true,
            filter: (src: string) => {
                {
                    debug(src)
                    return !src.includes('node_modules')
                }
            },
        })
        writeFileSync(path.join(NEXT_APP_PATH, 'version.js'), `module.exports = '${version}'`)

        if (!argv['skip-install']) {
            printGreen(`installing dependencies inside ${NEXT_APP_PATH}`, true)
            await runCommand({
                command: 'npm i --no-audit --quiet --ignore-scripts --no-fund',
                env: {
                    npm_config_loglevel: 'silent',
                },
                cwd: path.resolve('.', NEXT_APP_PATH),
            })
        }
        if (!existsSync(CONFIG_PATH)) {
            printGreen(`creating default ${CONFIG_PATH}`, true)
            await writeFile(CONFIG_PATH, DEFAULT_CONFIG)
        }
        // if (existsSync('.gitignore')) {
        //     printGreen(`adding ${NEXT_APP_PATH} to .gitignore`, true)
        //     await appendFile('.gitignore', '\n' + NEXT_APP_PATH)
        // }
        printGreen('created vitro app successfully!', true)
    },
} // as CommandModule

export default command
