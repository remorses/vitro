import { existsSync, writeFile } from 'fs-extra'
import { CommandModule } from 'yargs'
import { CONFIG_PATH, getDefaultConfig } from './constants'
import { debug, printGreen } from './support'
// const { version } = require('../package.json')

const command: CommandModule = {
    command: ['init'],
    describe: 'Creates a new vitro app',
    builder: (argv) => {
        return argv
    },
    handler: async (argv) => {
        if (existsSync(CONFIG_PATH)) {
            return printGreen(`${CONFIG_PATH} already exist`, true)
        }
        printGreen(`creating default ${CONFIG_PATH}`, true)
        await writeFile(CONFIG_PATH, getDefaultConfig({}))
        // printGreen(`creating some example stories`, true)
        printGreen(`Run 'vitro dev' to start the dev server`, true)
        
    },
}

export default command
