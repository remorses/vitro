import flatten from 'lodash/flatten'

import uniq from 'lodash/uniq'
import { outputFile, existsSync, exists, readFile } from 'fs-extra'
import path, { ParsedPath } from 'path'
import { memoizedGlob, GlobOptions } from 'smart-glob'
import { TESTING } from './constants'

export async function generateExperiments(p: {
    files: string[]
    targetDir: string
    wrapperComponentPath: string
}) {
    const {
        files,
        targetDir,
        wrapperComponentPath = `@vitro/ui/${
            TESTING ? 'src' : 'dist'
        }/components/DefaultWrapper`,
    } = p

    await Promise.all(
        // TODO batched promise.all
        files.map(async (p) => {
            const target = path.join(targetDir, p)
            const code = generateExperimentPage({
                importPath: removeExtension(
                    '_vitro-root_/../' + path.normalize(p),
                ),
                absolutePath: path.resolve('..', p),
                wrapperComponentPath: removeExtension(
                    '_vitro-root_/../' + path.normalize(wrapperComponentPath),
                ),
            }).trim()
            const existing = await readFile(target)
                .catch(() => '')
                .toString()
                .trim()
            if (existing === code) {
                return
            }
            return await outputFile(target, code + '\n')
        }),
    )
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
