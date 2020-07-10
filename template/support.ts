import flatten from 'lodash/flatten'
import memoize from 'lodash/memoize'
import startCase from 'lodash/startCase'
import { Fragment } from 'react'
import path from 'path'
import storiesMap from './storiesMap'

type GetStoriesReturnType = {
    filename: string
    title: string
    absolutePath: string
    // getExports: () => Record<string, any>
}[]

export const getStories = (): GetStoriesReturnType => {
    return Object.keys(storiesMap).map((filename) => {
        return {
            absolutePath: path.join(STORIES_PATH, filename),
            filename,
            title: formatPathToTitle(filename),
        }
    })
}

// export const _getStories = memoize(
//     (): GetStoriesReturnType => {
//         const exports = flatten(
//             contexts.map((c, i) =>
//                 c.keys().map((filename) => ({
//                     filename,
//                     context: contexts[i],
//                     absolutePath: path.join(STORIES_PATH, filename),
//                 })),
//             ),
//         )
//         return exports.map(({ context, filename, ...rest }) => {
//             return {
//                 ...rest,
//                 filename,
//                 title: formatPathToTitle(filename),
//                 getExports: () => {
//                     return context(filename)
//                 },
//             }
//         })
//     },
// )

export function formatPathToTitle(path: string) {
    const endPath = path
        .split('/')
        .map((x) => x.trim())
        .filter(Boolean)
        .reverse()[0]
    const withoutExt = endPath.split('.')[0]
    return startCase(withoutExt)
}

// TODO memoize this
export function getWrapperComponent() {
    try {
        return require(WRAPPER_COMPONENT_PATH).default
    } catch (e) {
        return Fragment
    }
}
