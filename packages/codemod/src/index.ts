/* eslint import/prefer-default-export: "off" */
import fs from 'fs'
import path from 'path'
import globby from 'globby'
import { applyTransform } from 'jscodeshift/dist/testUtils'
import { promisify } from 'util'
import { storiesofTransformer } from './transforms/storiesof'

export * from './transforms'

export const DEFAULT_JSC_OPTIONS = {
    parser: 'tsx',
}

const renameAsync = promisify(fs.rename)

async function renameFile(file, from, to) {
    const newFile = file.replace(from, to)
    console.log(`Rename: ${file} ${newFile}`)
    return renameAsync(file, newFile)
}

export async function runMigrateCodemod(
    { glob, dryRun=false, rename = '' },
) {
    let renameParts = null
    if (rename) {
        renameParts = rename.split(':')
        if (renameParts.length !== 2) {
            throw new Error(
                `Codemod rename: expected format "from:to", got "${rename}"`,
            )
        }
    }

    const files = await globby([glob, '!node_modules', '!dist'])
    console.log(`=> Applying to [${files.map(x => path.basename(x)).join(', ')}]`)

        const results = []
        for (let file of files) {
            let source = (await fs.promises.readFile(file)).toString()

            // TODO apply mdx to export if extension is mdx
            // TODO remove all variables that use storybook imports if unused
            // TODO remove all imports from storybook if unused
            source = await applyTransform(
                storiesofTransformer,
                { ...DEFAULT_JSC_OPTIONS },
                {
                    source,
                    path: file,
                },
            )
            results.push(source)
            if (!dryRun) {

                await fs.promises.writeFile(file, source, {encoding: 'utf-8'})
            }
        }


    if (renameParts) {
        const [from, to] = renameParts
        console.log(`=> Renaming ${rename}: ${files.length} files`)
        if (!dryRun) {await Promise.all(
            files.map((file) => renameFile(file, new RegExp(`${from}$`), to)),
        )}
    }
    return results
}
