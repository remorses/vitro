import { runCommand, printGreen } from './support'
import path from 'path'
import {
    TEMPLATE_PATH,
    DEFAULT_CONFIG,
    CONFIG_PATH,
    NEXT_APP_PATH,
    TESTING,
} from './contsants'
import { copy, writeFile, exists, existsSync, appendFile } from 'fs-extra'
import { CommandModule } from 'yargs'

const command: CommandModule = {
    command: ['new'],
    describe: 'Creates a new storyboard',
    builder: (argv) => {
        argv.option('skip-install', {
            type: 'boolean',
            boolean: true,
            default: false,
        })

        return argv
    },
    handler: async (argv) => {
        printGreen(`creating ${NEXT_APP_PATH}`, true)
        await copy(TEMPLATE_PATH, NEXT_APP_PATH, {
            filter: (src: string) => !src.includes('node_modules'),
        })

        if (!argv['skip-install']) {
            printGreen(`installing dependencies inside ${NEXT_APP_PATH}`, true)
            await runCommand({
                command: 'npm ci --quiet --ignore-scripts',
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
        printGreen('created storyboard successfully!', true)
    },
} // as CommandModule

export default command
