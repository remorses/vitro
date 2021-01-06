import fs from 'fs'
import { flatten, uniq } from 'lodash'
import path from 'path'
import { globWithGit } from 'smart-glob'
import { VIRTUAL_INDEX_TEMPLATE_LOCATION } from './constants'
import { VitroConfig } from './plugin'
import { debug, isWithin } from './support'
import { bfs, ExperimentsTree, makeExperimentsTree } from './tree'

const excludedDirs = ['**/.vitro/**', '**/pages/experiments/**']

export const generate = async (args: {
    root: string
    config: VitroConfig
    experimentsFilters: string[]
}) => {
    const { config, root, experimentsFilters = [] } = args
    let { experiments = [], ignore: userIgnore = [] } = config

    debug({ experimentsFilters })
    experiments = experiments.map(path.normalize)
    const ignoreGlobs = [...userIgnore, ...excludedDirs]

    debug(`starting globWithGit`)
    const results = await Promise.all(
        experiments.map((s) =>
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
    // await fs.promises.writeFile(
    //     path.join(cwd, 'experimentsTree.json'),
    //     JSON.stringify(experimentsTree, null, 4),
    // )
    debug(`created pages tree`)

    // generate the index virtual file from the tree, adding the routes list and global wrapper import

    // TODO generate the index.js file with routes
    // const targetDir = path.resolve(path.join(cwd, './pages/experiments'))
    // await generateExperiments({
    //     files,
    //     wrapperComponentPath: wrapper,
    //     targetDir,
    // })

    const virtualIndexCode = await generateVirtualIndexFile({
        experimentsTree,
        root: root,
    })
    return { experimentsTree, virtualIndexCode }
}

export async function generateVirtualIndexFile(args: {
    root: string
    experimentsTree: ExperimentsTree
    globalWrapperPath?: string
}) {
    const routes =
        '[\n' +
        bfs(args.experimentsTree)
            .slice(1) // first node is empty
            .filter((x) => x.url)
            .map((node) => {
                return `
                    {
                        fileExports: () => import('./${node.path}'),
                        url: ${JSON.stringify(node.url)},
                        sourceExperimentPath: ${JSON.stringify(
                            path.join(args.root, node.path),
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
    code = assertReplace(
        code,
        '// GlobalWrapper import goes here',
        args.globalWrapperPath
            ? `import GlobalWrapper from ${args.globalWrapperPath}`
            : `const GlobalWrapper = null`,
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
