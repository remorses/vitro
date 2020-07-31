import fs from 'fs'
import path from 'path'
import { TESTING } from './constants'
import { generateExperiments, generateExperimentsMap } from './experiments'
import { PluginArgs } from './plugin'

const excludedDirs = ['.vitro']
if (TESTING) {
    excludedDirs.push('template')
}

export const generate = async (args: PluginArgs) => {
    const { experiments = [], ignore = [], wrapper, cwd } = args
    const experimentsMap = await generateExperimentsMap({
        globs: experiments,
        cwd: path.resolve(path.join(cwd, '..')),
        ignore: [...ignore, ...excludedDirs],
    })

    fs.writeFileSync(path.join(cwd, 'experimentsMap.js'), experimentsMap)

    await generateExperiments({
        globs: experiments,
        wrapperComponentPath: wrapper,
        cwd: path.resolve(path.join(cwd, '..')),
        targetDir: path.resolve(path.join(cwd, './pages/experiments')),
        ignore,
    })
}
