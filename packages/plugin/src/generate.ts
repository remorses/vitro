import fs from 'fs'
import { remove } from 'fs-extra'
import { flatten, uniq } from 'lodash'
import path from 'path'
import { globWithGit } from 'smart-glob'
import { TESTING } from './constants'
import { generateExperiments } from './experiments'
import { VitroConfig } from './plugin'
import { makeExperimentsTree } from './tree'
import { debug } from './support'

const excludedDirs = ['**/.vitro/**', '**/pages/experiments']
if (TESTING) {
    excludedDirs.push('**/template')
    excludedDirs.push('**/renderer/**')
}

export const generate = async (args: VitroConfig) => {
    let { experiments = [], ignore: userIgnore = [], wrapper, cwd } = args
    experiments = experiments.map(path.normalize)
    const ignoreGlobs = [...userIgnore, ...excludedDirs]

    debug(`starting globWithGit`)
    const results = await Promise.all(
        experiments.map((s) =>
            globWithGit(s, {
                ignoreGlobs,
                // absolute: true,
                cwd: path.resolve(path.join(cwd, '..')).toString(),
                // filesOnly: true,
            }),
        ),
    )
    debug(`finished globWithGit`)
    // console.log(results)
    const files: string[] = uniq(flatten(results)).filter(Boolean)

    debug(`creating pages tree`)
    await fs.promises.writeFile(
        path.join(cwd, 'experimentsTree.json'),
        JSON.stringify(makeExperimentsTree(files), null, 4),
    )
    debug(`created pages tree`)

    const targetDir = path.resolve(path.join(cwd, './pages/experiments'))

    // await remove(targetDir)
    await generateExperiments({
        files,
        wrapperComponentPath: wrapper,
        targetDir,
    })
}
