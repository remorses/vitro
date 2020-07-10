import fastGlob from 'fast-glob'
import globby from 'globby'
import globber from 'glob'
import tinyGlob from 'tiny-glob'
import { glob as myGlob } from '../src/glob'
import path from 'path'

const glob = '../**'
console.log(path.resolve(glob))

const benchmark = (name: string, f) => async () => {
    console.time(name)
    await f()
    console.timeEnd(name)
}

describe('benchmarks', () => {
    it(
        'myglob',
        benchmark('myglob', async () => {
            const files = await myGlob(glob, {
                filesOnly: true,
                ignore: ['node_modules'],
            })
            console.log(files)
        }),
    )
    it(
        'tiny-glob',
        benchmark('tiny-glob', async () => {
            const files = await tinyGlob(glob, {
                filesOnly: true,
                // ignore: ['node_modules'],
            })
            // console.log(files)
            // console.log(files)
        }),
    )
    it(
        'fast-glob',
        benchmark('fast-glob', () => {
            const files = fastGlob.sync([glob], {
                onlyFiles: true,

                ignore: ['node_modules'],
            })
            // console.log(files)
        }),
    )
    it(
        'globby',
        benchmark('globby', () => {
            const files = globby.sync([glob], {
                onlyFiles: true,

                // gitignore: true,
                ignore: ['node_modules'],
            })
            // console.log(files)
        }),
    )

    it(
        'glob',
        benchmark('glob', async () => {
            const files = globber.sync(glob, {
                nodir: true,
                // ignore: ['node_modules'],
            })
            // console.log(files)
        }),
    )
})
