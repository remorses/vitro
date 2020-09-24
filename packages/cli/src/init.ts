import { runCommand, printGreen, debug } from './support'
import path from 'path'
import prompts from 'prompts'
import {
    TEMPLATE_PATH,
    getDefaultConfig,
    CONFIG_PATH,
    NEXT_APP_PATH,
    TESTING,
    VERSION_FILE_PATH,
} from './constants'
import {
    copy,
    writeFile,
    exists,
    existsSync,
    appendFile,
    writeFileSync,
    readFileSync,
    remove,
} from 'fs-extra'
import { CommandModule } from 'yargs'
import { PackageManager } from '@vitro/plugin'
const { version } = require('../package.json')

const command: CommandModule = {
    command: ['init'],
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
        printGreen(
            'if you use workspaces remember to add .vitro to your packages globs first',
            true,
        )
        const packageManagerChoice = await prompts({
            type: 'select',
            name: 'value',
            message: 'What package manager do you use?',
            choices: [
                {
                    title: 'Npm',
                    value: 'npm',
                },
                {
                    title: 'Yarn',
                    value: 'yarn',
                },
                {
                    title: 'Pnpm',
                    value: 'pnpm',
                },
            ],
            initial: 0,
        })
        // tell user to add the .vitro folder inside the workspace packages if using workspaces

        await initHandler({
            skipInstall: Boolean(argv['skip-install']),
            packageManager: packageManagerChoice.value,
        })
    },
} // as CommandModule

export async function initHandler({
    skipInstall = false,
    packageManager = 'npm',
}: { skipInstall?: boolean; packageManager?: PackageManager } = {}) {
    printGreen(`creating ${NEXT_APP_PATH}`, true)
    await remove(NEXT_APP_PATH)
    await copy(TEMPLATE_PATH, NEXT_APP_PATH, {
        overwrite: true,
        recursive: true,
        filter: (src: string) => {
            {
                // debug(src)
                return true
                // return !src.includes('node_modules')
            }
        },
    })
    writeFileSync(
        path.join(NEXT_APP_PATH, VERSION_FILE_PATH),
        `module.exports = '${version}'`,
    )

    await addVitroToGitignore()
    if (!skipInstall) {
        printGreen(
            `installing dependencies inside ${NEXT_APP_PATH} with ${packageManager}`,
            true,
        )
        await runCommand({
            command: getInstallCommand(packageManager),
            env: {
                // npm_config_loglevel: 'silent',
            },
            cwd: path.resolve('.', NEXT_APP_PATH),
        })
    }
    if (!existsSync(CONFIG_PATH)) {
        printGreen(`creating default ${CONFIG_PATH}`, true)
        await writeFile(CONFIG_PATH, getDefaultConfig({ packageManager }))
    }
    
    printGreen('created vitro app successfully!', true)
}

async function addVitroToGitignore() {
    if (existsSync('.gitignore')) {
        printGreen(`adding ${NEXT_APP_PATH} to .gitignore`, true)
        if (!readFileSync('.gitignore').toString().includes(NEXT_APP_PATH)) {
            await appendFile('.gitignore', '\n' + NEXT_APP_PATH + '\n')
        }
    } else {
        await writeFileSync('.gitignore', '\n' + NEXT_APP_PATH + '\n')
    }
}

function getInstallCommand(packageManager: PackageManager): string {
    if (packageManager === 'npm') {
        return 'npm i --no-audit --quiet --ignore-scripts --no-fund'
    } else if (packageManager === 'yarn') {
        return 'yarn install'
    } else if (packageManager == 'pnpm') {
        return 'pnpm i --ignore-scripts'
    }
}

export default command
