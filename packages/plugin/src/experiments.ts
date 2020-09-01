import flatten from 'lodash/flatten'

import uniq from 'lodash/uniq'
import {
    outputFile,
    existsSync,
    exists,
    readFile,
    remove,
    unlink,
} from 'fs-extra'
import path, { ParsedPath } from 'path'
import { memoizedGlob, GlobOptions } from 'smart-glob'
import { TESTING } from './constants'

export async function generateExperiments(p: {
    files: string[]
    targetDir: string
    wrapperComponentPath: string
}) {
    let { files, targetDir, wrapperComponentPath } = p

    if (!wrapperComponentPath) {
        wrapperComponentPath = `@vitro/ui/${
            TESTING ? 'src' : 'dist'
        }/components/DefaultWrapper`
    } else {
        wrapperComponentPath = removeExtension(
            '_vitro-root_/../' + path.normalize(wrapperComponentPath),
        )
    }

    await Promise.all(
        // TODO batched promise.all
        files.map(async (p) => {
            const target = path.join(targetDir, p)
            const code = generateExperimentPage({
                importPath: removeExtension(
                    '_vitro-root_/../' + path.normalize(p),
                ),
                absolutePath: path.resolve('..', p),
                wrapperComponentPath,
            }).trim()
            const existing = await readFile(target)
                .catch(() => '')
                .toString()
                .trim()
            if (existing === code) {
                return
            }
            // TODO remove files that have not been generated but still exists in the experiments directory
            await Promise.all(
                getConflictingFiles(target).map((x) => unlink(x).catch()),
            )
            return await outputFile(target, code + '\n')
        }),
    )
}

function getConflictingFiles(target: string) {
    const conflictingFileExt = path.extname(target) === '.tsx' ? '.jsx' : '.tsx'
    const fileToRemove = path.join(
        path.parse(target).dir,
        path.parse(target).name + conflictingFileExt,
    )
    // console.log(target, fileToRemove)
    return [fileToRemove]
}

function generateExperimentPage({
    importPath,
    absolutePath,
    wrapperComponentPath,
}) {
    return `
import React from 'react'
import * as exported from '${importPath}'
import { default as GlobalWrapper } from '${wrapperComponentPath}'
import experimentsTree from '_vitro-root_/experimentsTree.json'
import { ExperimentPage } from '@vitro/ui${TESTING ? '/src' : ''}'

const absolutePath = '${absolutePath}'

export default function Page() {
    return (
        <ExperimentPage
            experimentsTree={experimentsTree}
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
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
