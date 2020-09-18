/* eslint import/prefer-default-export: "off" */
import fs from 'fs'
import path from 'path'
import globby from 'globby'
import { applyTransform } from 'jscodeshift/dist/testUtils'
import { promisify } from 'util'
import { storiesofTransformer } from './transforms/storiesof'
import { mdxTransformer } from './transforms'

export * from './transforms'

export const DEFAULT_JSC_OPTIONS = {
    parser: 'tsx',
}

const renameAsync = promisify(fs.rename)

async function renameFile(file, from, to) {
    const newFile = file.replace(from, to)
    console.info(`Rename: ${file} ${newFile}`)
    return renameAsync(file, newFile)
}

export async function runMigrateCodemod({
    glob,
    dryRun = false,
    renames = [],
}) {
    renames.forEach((rename) => {
        const renameParts = rename.split(':')
        if (renameParts.length !== 2) {
            throw new Error(
                `Codemod rename: expected format "from:to", got "${rename}"`,
            )
        }
    })

    const files = await globby([glob, '!node_modules', '!dist'])

    const results = []
    for (let file of files) {
        let source = (await fs.promises.readFile(file)).toString()
        // TODO remove all variables that use storybook imports if unused
        // TODO remove all imports from storybook if unused
        if (file.endsWith('.d.ts')) {
            continue
        }
        const ext = path.extname(file)
        console.info(`=> Applying to [${file}]`)
        source = await applyTransform(
            /\.mdx?$/.test(ext) ? mdxTransformer : storiesofTransformer,
            { ...DEFAULT_JSC_OPTIONS },
            {
                source,
                path: file,
            },
            DEFAULT_JSC_OPTIONS
        )
        results.push(source)
        if (!dryRun) {
            await fs.promises.writeFile(file, source, { encoding: 'utf-8' })
        }
    }

    await Promise.all(
        renames.map(async (rename) => {
            const renameParts = rename.split(':')
            const [from, to] = renameParts
            console.info(`=> Renaming ${rename}: ${files.length} files`)
            if (!dryRun) {
                await Promise.all(
                    files.map((file) =>
                        renameFile(file, new RegExp(`${from}$`), to),
                    ),
                )
            }
        }),
    )
    return results
}
