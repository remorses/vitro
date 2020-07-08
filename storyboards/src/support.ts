import chalk from 'chalk'
import path from 'path'
import { spawn } from 'child_process'
import fs from 'fs'

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

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
            printRed(e.message)
        } else {
            console.error(e)
        }
        return
    }
})

export const print = console.log
export const printRed = (x) => console.log(chalk.red(x))
export const printGreen = (x = '', pad=false) => {
    if (pad) {
        console.log()
    }
    console.log(chalk.green(x))
    if (pad) {
        console.log()
    }
}

export function runCommand({ command, env = {}, silent = false, cwd = '.' }) {
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
