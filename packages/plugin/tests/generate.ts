import { generate, generateVirtualIndexFile } from '../src/generate'
import { makeExperimentsTree } from '../src/tree'
import { globWithGit, glob } from 'smart-glob'

it('generate', async () => {
    const files = await glob('.', { cwd: __dirname, gitignore: true })
    console.log({files})
    const exampleTree = makeExperimentsTree(files)
    // console.log({ exampleTree: JSON.stringify(exampleTree, null, 4) })
    const virtualIndexCode = await generateVirtualIndexFile({
        experimentsTree: exampleTree,
        root: __dirname,
    })
    console.log(virtualIndexCode)
})
