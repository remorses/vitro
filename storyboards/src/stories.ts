import flatten from 'lodash/flatten'

import uniq from 'lodash/uniq'
import { outputFile, existsSync } from 'fs-extra'
import path, { ParsedPath } from 'path'
import { memoizedGlob, GlobOptions } from 'smart-glob'

export async function generateStories(p: {
    globs: string[]
    targetDir: string
    ignore?: string[]
    cwd?: string
}) {
    const { globs, targetDir, ignore, cwd = '.' } = p
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
        files.map((p) => {
            const target = path.join(targetDir, p)
            if (existsSync(target)) {
                return
            }
            return outputFile(
                target,
                generateStoryPage({
                    importPath: removeExtension('@/../' + path.normalize(p)),
                    absolutePath: path.resolve('..', p),
                }),
            )
        }),
    )
}

function generateStoryPage({ importPath, absolutePath }) {
    return `
import * as exported from '${importPath}'
const absolutePath = '${absolutePath}'
import React, { Fragment } from 'react'
import { StoryPage } from 'storyboards/dist/story'

const GlobalWrapper = getWrapperComponent()

export default function Page() {
    return (
        <StoryPage
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            storyExports={exported}
        />
    )
}

function getWrapperComponent() {
    try {
        return require(WRAPPER_COMPONENT_PATH).default
    } catch (e) {
        return Fragment
    }
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
        // TODO memoize glob
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
