import flatten from 'lodash/flatten'

import uniq from 'lodash/uniq'
import { outputFile, existsSync, exists, readFile } from 'fs-extra'
import path, { ParsedPath } from 'path'
import { memoizedGlob, GlobOptions } from 'smart-glob'

export async function generateStories(p: {
    globs: string[]
    targetDir: string
    wrapperComponentPath: string
    ignore?: string[]
    cwd?: string
}) {
    const {
        globs,
        targetDir,
        ignore,
        cwd = '.',
        wrapperComponentPath = '@vitro/ui/src/default_wrapper', // TODO replace src path when not in template
    } = p
    const options: GlobOptions = {
        ignore,
        cwd,
        filesOnly: true,
    }
    const results: string[][] = await Promise.all(
        globs.map((s) => memoizedGlob(s, options)),
    )
    const files: string[] = uniq(flatten(results))

    await Promise.all(
        // TODO batched promise.all
        files.map(async (p) => {
            const target = path.join(targetDir, p)
            const code = generateStoryPage({
                importPath: removeExtension('@/../' + path.normalize(p)),
                absolutePath: path.resolve('..', p),
                wrapperComponentPath: removeExtension(
                    '@/../' + path.normalize(wrapperComponentPath),
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

// TODO remove the src and only on DEV

function generateStoryPage({ importPath, absolutePath, wrapperComponentPath }) {
    return `
import * as exported from '${importPath}'
import { default as GlobalWrapper } from '${wrapperComponentPath}'
import React from 'react'
import { StoryPage } from '@vitro/ui/src/story'

const absolutePath = '${absolutePath}'

export default function Page() {
    return (
        <StoryPage
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            storyExports={exported}
        />
    )
}
`
}

export async function generateStoriesMap({ cwd = '.', globs, ignore }) {
    const options: GlobOptions = {
        ignore,
        cwd,
        filesOnly: true,
    }
    const results: string[][] = await Promise.all(
        globs.map((s) => memoizedGlob(s, options)),
    )
    const files: string[] = uniq(flatten(results))
    return printStoriesMap({ files })
}

function printStoriesMap(p: { files: string[] }) {
    let result = 'module.exports = {\n'
    p.files.forEach((f) => {
        // const importPath = p.base + path.join(f)
        result += '    '
        result += `'${removeExtension(f)}': '${path.resolve('..', f)}',`
        result += '\n'
    })
    result += '}'
    return result
}

function removeExtension(f: string) {
    const parsed = path.parse(f)
    const p: ParsedPath = {
        ...parsed,
        base: parsed.name,
    }
    return path.format(p)
}
