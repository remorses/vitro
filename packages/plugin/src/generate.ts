import fs from 'fs'
import { remove } from 'fs-extra'
import path from 'path'
import { TESTING } from './constants'
import { generateExperiments, printExperimentsMap } from './experiments'
import { VitroConfig } from './plugin'
import { glob } from 'smart-glob'

import { uniq, flatten } from 'lodash'

const excludedDirs = ['.vitro']
if (TESTING) {
    excludedDirs.push('template')
}

export const generate = async (args: VitroConfig) => {
    let { experiments = [], ignore: userIgnore = [], wrapper, cwd } = args
    experiments = experiments.map(path.normalize)
    const ignore = [...userIgnore, ...excludedDirs]

    const results = await Promise.all(
        experiments.map((s) =>
            glob(s, {
                ignore,
                cwd: path.resolve(path.join(cwd, '..')),
                gitignore: true,
                filesOnly: true,
            }),
        ),
    )
    const files: string[] = uniq(flatten(results))

    await fs.promises.writeFile(
        path.join(cwd, 'experimentsMap.js'),
        await printExperimentsMap({
            files,
        }),
    )

    const targetDir = path.resolve(path.join(cwd, './pages/experiments'))
    await remove(targetDir)
    await generateExperiments({
        files,
        wrapperComponentPath: wrapper,
        targetDir,
    })
}

