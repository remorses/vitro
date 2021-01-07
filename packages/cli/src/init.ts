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
        debug('argv', argv)
        debug('cwd', process.cwd())
        // printGreen(
        //     'if you use workspaces remember to add .vitro to your packages globs first',
        //     true,
        // )
        // const packageManagerChoice = await prompts({
        //     type: 'select',
        //     name: 'value',
        //     message: 'What package manager do you use?',
        //     choices: [
        //         {
        //             title: 'Npm',
        //             value: 'npm',
        //         },
        //         {
        //             title: 'Yarn',
        //             value: 'yarn',
        //         },
        //         {
        //             title: 'Pnpm',
        //             value: 'pnpm',
        //         },
        //     ],
        //     initial: 0,
        // })
        // tell user to add the .vitro folder inside the workspace packages if using workspaces

        if (!existsSync(CONFIG_PATH)) {
            printGreen(`creating default ${CONFIG_PATH}`, true)
            await writeFile(CONFIG_PATH, getDefaultConfig({}))
        }
    },
} // as CommandModule

// async function addVitroToGitignore() {
//     if (existsSync('.gitignore')) {
//         if (!readFileSync('.gitignore').toString().includes(NEXT_APP_PATH)) {
//             printGreen(`adding ${NEXT_APP_PATH} to .gitignore`, true)
//             await appendFile('.gitignore', '\n' + NEXT_APP_PATH + '\n')
//         }
//     } else {
//         await writeFileSync('.gitignore', '\n' + NEXT_APP_PATH + '\n')
//     }
// }

export default command
