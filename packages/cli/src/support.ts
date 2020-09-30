import chalk from 'chalk'
import path from 'path'
import { spawn, execSync } from 'child_process'
import fs from 'fs'
import findUp from 'find-up'
import { CONFIG_PATH, NEXT_APP_PATH, VERSION_FILE_PATH } from './constants'
import { VitroConfig } from '@vitro/plugin'

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
export const debug = (...args) => {
    if (process.env.DEBUG) {
        console.error(...args)
    }
}

export function findVitroJsConfigPath() {
    // if (fs.existsSync(CONFIG_PATH)) {
    //     return path.resolve(CONFIG_PATH)
    // }
    const p = findUp.sync(CONFIG_PATH)
    if (!p) {
        fatal(
            `There is no ./${CONFIG_PATH} file, you probably need to run 'vitro init' first or change cwd`,
        )
    }
    return path.resolve(p)
}


export function getVitroConfig(): VitroConfig {
    try {
        return require(findVitroJsConfigPath())
    } catch (e) {
        fatal(`cannot require vitro config,\n${e}`)
    }
}


export function findVitroAppDir() {
    const p = findVitroJsConfigPath()
    return path.join(path.dirname(p), NEXT_APP_PATH)
}

export function getVitroAppVersion() {
    try {
        return require(path.resolve(findVitroAppDir(), VERSION_FILE_PATH))
    } catch {
        return '0.0.0'
        // fatal(`cannot find vitro app version file`)
    }
}

export function transformName(name: string) {
    return name.toLowerCase().replace('_', '-').replace(' ', '-')
}

export function readFile(path) {
    if (!fs.existsSync(path)) {
        throw new Error(`file ${path} does not exists`)
    }
    return fs.readFileSync(path, 'utf8')
}

const makeMiddleware = (fun) => (command) => {
    const handler = command.handler
    command.handler = async (argv) => {
        await fun(argv, (a) => handler(a || argv))
    }
    return command
}

export const withErrorHandling = makeMiddleware(async (argv, next) => {
    try {
        await next()
    } catch (e) {
        if (!process.env.DEBUG) {
            printRed(e)
        } else {
            console.error(e)
        }
        return
    }
})

export const print = console.info
export const printGreen = (x = '', pad = false) => {
    if (pad) {
        console.info()
    }
    console.info(chalk.green(x))
    if (pad) {
        console.info()
    }
}
export const printRed = (x = '', pad = false) => {
    if (pad) {
        console.info()
    }
    console.info(chalk.red(x))
    if (pad) {
        console.info()
    }
}
export const fatal = (x = '') => {
    console.info()
    console.info(chalk.red(x))
    console.info()
    process.exit(1)
}

export async function runCommand({
    command,
    env = {},
    silent = false,
    cwd = '.',
}) {
    // return execSync(command, {
    //     stdio: 'inherit',
    //     env: { ...process.env, ...env },
    //     cwd,
    // })
    return new Promise((res, rej) => {
        const ps = spawn(command, {
            stdio: silent ? 'ignore' : 'inherit',
            shell: true,
            cwd,
            env: {
                ...process.env,
                ...env,
            },
        })
        ps.on('close', (code) => {
            if (code !== 0) {
                rej(new Error(`${command} exited with code ${code}`))
            }
            res(code)
        })
        ps.on('error', (err) => {
            rej(err)
        })
    })
}
