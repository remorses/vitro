import { runCommand, printGreen } from './support'
import {
    TEMPLATE_PATH,
    DEFAULT_CONFIG,
    CONFIG_PATH,
    NEXT_APP_PATH,
} from './contsants'
import { copy, writeFile, exists, existsSync, appendFile } from 'fs-extra'
import { CommandModule } from 'yargs'

const command: CommandModule = {
    command: ['new'],
    describe: 'Creates a new storyboard',
    builder: (argv) => {
        // argv.option('port', {
        //     alias: 'p',
        //     type: 'string',
        //     default: '6006',
        //     required: false,
        //     description: 'The port for the dev server',
        // })
        return argv
    },
    handler: async (argv) => {
        console.log(`creating ${NEXT_APP_PATH}`)
        await copy(TEMPLATE_PATH, NEXT_APP_PATH)
        if (!existsSync(CONFIG_PATH)) {
            console.log(`creating default ${CONFIG_PATH}`)
            await writeFile(CONFIG_PATH, DEFAULT_CONFIG)
        }
        if (existsSync('.gitignore')) {
            console.log(`adding ${NEXT_APP_PATH} to .gitignore`)
            await appendFile('.gitignore', '\n' + NEXT_APP_PATH)
        }
        console.log()
        printGreen('created storyboard!')
        console.log()
    },
} // as CommandModule

export default command
