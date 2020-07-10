import flatten from 'lodash/flatten'
import uniq from 'lodash/uniq'
import { glob, GlobOptions } from './glob'

export async function generateModulesMap({ globs, ignore }) {
    const options: GlobOptions = {
        ignore,
        filesOnly: true,
    }
    const results: string[][] = await Promise.all(
        globs.map((s) => glob(s, options)),
    )
    const files: string[] = uniq(flatten(results))
    return printModulesMap({ files })
}

function printModulesMap(p: { files: string[] }) {
    let result = 'module.exports = {\n'
    p.files.forEach((f) => {
        result += '    '
        result += `'${f}': () => require('${f}'),`
        result += '\n'
    })
    result += '}'
    return result
}
