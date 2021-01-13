import fs from 'fs'
import memoize from 'micro-memoize'
import { glob as smartGlob } from 'smart-glob'
import { flatten, uniq } from 'lodash'
import path from 'path'
import { globWithGit } from 'smart-glob'
import {
    VIRTUAL_INDEX_TEMPLATE_LOCATION,
    DEFAULT_OVERRIDES_BASENAME,
} from './constants'
import { VitroConfig } from './plugin'
import { debug, isWithin } from './support'
import { bfs, ExperimentsTree, makeExperimentsTree } from './tree'

export const generate = async (args: {
    root: string
    config: VitroConfig
    experimentsFilters: string[]
}) => {
    const { config, root, experimentsFilters = [] } = args
    let { globs = [], ignore: userIgnore = [] } = config

    debug({ experimentsFilters })
    globs = globs.map(path.normalize)
    const ignoreGlobs = [...userIgnore]

    debug(`starting globWithGit`)
    const results = await Promise.all(
        globs.map((s) =>
            globWithGit(s, {
                ignoreGlobs,
                gitignore: true,
                absolute: false,
                cwd: root,
                // filesOnly: true,
            }),
        ),
    )
    debug(`finished globWithGit`)
    // console.log(results)
    const files: string[] = uniq(flatten(results))
        .filter(Boolean)
        .filter((p) => {
            return (
                !experimentsFilters?.length ||
                experimentsFilters.some((f) => isWithin(f, path.join(root, p)))
            )
        })

    debug(`creating pages tree`)
    const experimentsTree = makeExperimentsTree(files)
    
    debug(`created pages tree`)

    // generate the index virtual file from the tree, adding the routes list and global wrapper import
    const virtualIndexCode = await generateVirtualIndexFile({
        experimentsTree,
        root: root,
    })
    return { experimentsTree, virtualIndexCode }
}

export async function generateVirtualIndexFile(_args: {
    root: string
    experimentsTree: ExperimentsTree
    overridesBasename?: string
}) {
    const {
        experimentsTree,
        root,
        overridesBasename = DEFAULT_OVERRIDES_BASENAME,
    } = _args
    const routes =
        '[\n' +
        bfs(experimentsTree)
            .slice(1) // first node is empty
            .filter((x) => x.url)
            .map((node) => {
                return `
                    {
                        fileExports: () => import('./${node.path}'),
                        url: ${JSON.stringify(node.url)},
                        sourceExperimentPath: ${JSON.stringify(
                            path.join(root, node.path),
                        )},
                    }`
            })
            .join(',\n') +
        '\n]'
    let code = (
        await fs.promises.readFile(VIRTUAL_INDEX_TEMPLATE_LOCATION)
    ).toString()
    code = assertReplace(
        code,
        '// routes go here',
        `const __ROUTES__ = ${routes}`,
    )
    const overrides = await generateOverridesCode({
        root,
        overridesBasename,
    })
    code = assertReplace(
        code,
        '// overrides go here',
        `const __OVERRIDES__ = ${overrides}`,
    )
    return code
}

function assertReplace(code, replaced, replacement) {
    const res = code.replace(replaced, replacement)
    if (res === code) {
        throw new Error(`could not find ${replaced}`)
    }
    return res
}

const generateOverridesCode = async ({ root, overridesBasename }) => {
    const files = await smartGlob('**/' + overridesBasename, {
        cwd: root,
        gitignore: true,
        absolute: true,
    })

    const couples = files
        .map((file) => {
            const relative = path.posix.relative(root, file)
            return `\n    ${JSON.stringify(
                path.dirname(file),
            )}: () => import(${JSON.stringify('./' + relative)})\n`
        })
        .join(',\n')

    const code = `{\n${couples}\n}`

    return code
}
