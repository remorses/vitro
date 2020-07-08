import flatten from 'lodash/flatten'
import memoize from 'lodash/memoize'
import startCase from 'lodash/startCase'

const contexts = [
    // because require.context can't receive non literal values
    require.context(STORIES_PATH, STORIES_RECURSIVE, STORIES_EXTENSION),
].filter(Boolean)

type GetStoriesReturnType = {
    filename: string
    title: string
    getExports: () => Record<string, any>
}[]

export const getStories = memoize(
    (): GetStoriesReturnType => {
        const exports = flatten(
            contexts.map((c, i) =>
                c
                    .keys()
                    .map((filename) => ({ filename, context: contexts[i] })),
            ),
        )
        return exports.map(({ context, filename }) => {
            return {
                filename,
                title: formatPathToTitle(filename),
                getExports: () => {
                    return context(filename)
                },
            }
        })
    },
)

export function formatPathToTitle(path: string) {
    const endPath = path
        .split('/')
        .map((x) => x.trim())
        .filter(Boolean)
        .reverse()[0]
    const withoutExt = endPath.split('.')[0]
    return startCase(withoutExt)
}
