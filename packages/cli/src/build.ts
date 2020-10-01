import {
    runCommand,
    printGreen,
    debug,
    printRed,
    findVitroJsConfigPath,
    findVitroAppDir,
    getVitroConfig,
    fatal,
} from './support'
import path from 'path'
import os from 'os'
import { generate } from '@vitro/plugin'
import { TEMPLATE_PATH, CONFIG_PATH, NEXT_APP_PATH, TESTING } from './constants'
import {
    copy,
    writeFile,
    exists,
    existsSync,
    appendFile,
    writeFileSync,
} from 'fs-extra'
import { CommandModule } from 'yargs'
import { getExperimentsPathFilter } from '@vitro/plugin'
const { version } = require('../package.json')

const command: CommandModule = {
    command: ['build'],
    describe:
        'Generates the experiments pages and files map using `vitro.config.js` found in cwd',
    builder: (argv) => {
        return argv
    },
    handler: async (argv: any) => {
        // debug('argv', argv)
        // debug('cwd', process.cwd())
        const jsConfigPath = findVitroJsConfigPath()
        process.chdir(path.resolve(path.dirname(jsConfigPath)))
        const cwd = findVitroAppDir()
        await generate({
            ...getVitroConfig(),
            cwd,
            filter: argv.filter?.length
                ? argv.filter
                : getExperimentsPathFilter(),
        })
        // TODO maybe also run next build?
        printGreen(`Generated pages inside ${cwd}`, true)
    },
} // as CommandModule

export default command
