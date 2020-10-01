import { outputFile, readFile, unlink } from 'fs-extra'
import { files as readFiles } from 'node-dir'
import path, { ParsedPath } from 'path'
import { TESTING } from './constants'
import { debug } from './support'
import { globWithGit } from 'smart-glob'

export async function generateExperiments(p: {
    files: string[]
    targetDir: string
    wrapperComponentPath: string
}) {
    let { files, targetDir, wrapperComponentPath } = p
    debug(`generateExperiments generating pages`)
    if (!wrapperComponentPath) {
        wrapperComponentPath = `@vitro/ui/${
            TESTING ? 'src' : 'dist'
        }/components/DefaultWrapper`
    } else {
        wrapperComponentPath = removeExtension(
            '_vitro-root_/../' + path.normalize(wrapperComponentPath),
        )
    }

    const generatedFiles = await Promise.all(
        // TODO batched promise.all
        files.map(async (p) => {
            const absolutePath = path.join(targetDir, p)
            const sourceExperimentPath = path.resolve(p)
            // console.log({ target: absolutePath })
            const code = generateExperimentPage({
                importPath: removeExtension(
                    '_vitro-root_/../' + path.normalize(p),
                ),
                absolutePath,
                sourceExperimentPath,
                wrapperComponentPath,
            }).trim()
            const existing = await readFile(absolutePath)
                .catch(() => '')
                .toString()
                .trim()
            if (existing === code) {
                return absolutePath
            }
            await outputFile(absolutePath, code + '\n')
            return absolutePath
        }),
    )
    // TODO removed unused pages
    const allFiles = await globWithGit(path.join(targetDir, '**'), {
        absolute: true,
    })
    // console.log(allFiles)
    allFiles.forEach((file) => {
        if (!generatedFiles.includes(file)) {
            console.info('removing unused file', file)
            unlink(file)
        }
    })
}

function generateExperimentPage({
    importPath,
    absolutePath,
    sourceExperimentPath,
    wrapperComponentPath,
}) {
    return `
import React from 'react'
import * as exported from '${importPath}'
import { default as GlobalWrapper } from '${wrapperComponentPath}'
import experimentsTree from '_vitro-root_/experimentsTree.json'
import { ExperimentPage } from '@vitro/ui${TESTING ? '/src' : ''}'

const absolutePath = '${absolutePath}'
const sourceExperimentPath = '${sourceExperimentPath}'

export default function Page() {
    return (
        <ExperimentPage
            experimentsTree={experimentsTree}
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            sourceExperimentPath={sourceExperimentPath}
            fileExports={exported}
        />
    )
}
`
}

function removeExtension(f: string) {
    const parsed = path.parse(f)
    const p: ParsedPath = {
        ...parsed,
        base: parsed.name,
    }
    return path.format(p)
}
