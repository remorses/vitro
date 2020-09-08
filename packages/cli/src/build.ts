import { runCommand, printGreen, debug, printRed } from './support'
import path from 'path'
import os from 'os'
import { generate,  } from '@vitro/plugin'
import {
    TEMPLATE_PATH,
    CONFIG_PATH,
    NEXT_APP_PATH,
    TESTING,
} from './constants'
import {
    copy,
    writeFile,
    exists,
    existsSync,
    appendFile,
    writeFileSync,
} from 'fs-extra'
import { CommandModule } from 'yargs'
const { version } = require('../package.json')

const command: CommandModule = {
    command: ['build'],
    describe:
        'Generates the experiments pages and files map using `vitro.config.js` found in cwd',
    builder: (argv) => {
        argv.option('cwd', {
            type: 'string',
            default: '',
        })
        return argv
    },
    handler: async (argv) => {
        // debug('argv', argv)
        // debug('cwd', process.cwd())
        const startingPath = argv['cwd'] as string
        const configPath: string = path.resolve(startingPath, CONFIG_PATH).toString()
        if (!existsSync(configPath)) {
            printRed(`There is no '${CONFIG_PATH}' file at ${configPath}`, true)
            return process.exit(1)
        }
        const config = require(configPath)
        const cwd = path.resolve(startingPath, NEXT_APP_PATH).toString()
        await generate({
            ...config,
            cwd,
        })
        // TODO maybe also run next build?
        printGreen(`Generated pages inside ${cwd}`, true)
    },
} // as CommandModule

export default command
