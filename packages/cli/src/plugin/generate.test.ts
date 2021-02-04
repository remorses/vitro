import { generate, generateVirtualIndexFile } from './generate'
import { makeExperimentsTree } from './tree'
import { globWithGit, glob } from 'smart-glob'

it('makeExperimentsTree', async () => {
    const files = await glob('./**', {
        cwd: __dirname,
        gitignore: true,
        absolute: false,
    })
    console.log({ files })
    const exampleTree = makeExperimentsTree(files, '/')
    // console.log({ exampleTree: JSON.stringify(exampleTree, null, 4) })
    const virtualIndexCode = await generateVirtualIndexFile({
        experimentsTree: exampleTree,
        root: __dirname,
    })
    console.log(virtualIndexCode)
})
