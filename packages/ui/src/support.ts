import startCase from 'lodash/startCase'
import { useEffect, useState } from 'react'
import cloneDeep from 'lodash/cloneDeep'

// export const version = require('../package.json').version

export const TOP_TITLE_H = '60px'
export const VITRO_BLOCK_CLASS = '__vitro-block'

export const debug = (x) => {
    if (process.env.DEBUG) {
        console.log('[DEBUG]', x)
    }
}

export function formatPathToTitle(filePath: string) {
    const endPath = filePath
        .split('\\')
        .pop()
        .split('/')
        .pop()
    const withoutExt = endPath.split('.')[0]
    return startCase(withoutExt)
}

export function usePromise(p, defaultValue) {
    const [v, set] = useState(defaultValue)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        if (!p) {
            return
        }
        setLoading(true)
        p()
            .then((x) => {
                set(x)
                setLoading(false)
            })
            .catch((e) => {
                setLoading(false)
                setError(e)
                console.error('error in usePromise\n' + e)
                console.error(e.stack)
            })
    }, [p])
    return { value: v, loading, error }
}

function isPromise(p) {
    return p && typeof p.then === 'function'
}

/////////// tree utils ///////////////////

export interface ExperimentsTree {
    path?: string
    name?: string
    children?: ExperimentsTree[]
    url?: string
    title?: string
    // meta?: Record<string, any>
}

export function findTreeInPath(
    tree: ExperimentsTree,
    path,
): ExperimentsTree | null {
    // remove leading and trailing slashes
    path = path.replace(/^\/|\/$/g, '')
    if (!tree?.children?.length) {
        return null
    }
    if (tree.path === path) {
        return tree
    }
    for (let child of tree.children) {
        let found = findTreeInPath(child, path)
        if (found) {
            return found
        }
    }
}

export function findSubtreeInPathByUrl(
    tree: ExperimentsTree,
    url,
): {
    current?: ExperimentsTree
    previous?: ExperimentsTree
    next?: ExperimentsTree
} {
    if (!tree?.children?.length) {
        return null
    }
    for (let i = 0; i < tree.children.length; i++) {
        let child = tree.children[i]
        if (child.url === url) {
            return {
                previous: tree.children[i - 1],
                current: tree,
                next: tree.children[i + 1], // TODO if type is directory get the first node in folder
            }
        }
        let found = findSubtreeInPathByUrl(child, url)
        if (found) {
            return found
        }
    }
}

export function filterTree(
    tree: ExperimentsTree,
    filter: (x: ExperimentsTree) => boolean,
) {
    if (!tree) {
        return tree
    }
    return {
        ...tree,
        children: filterChildren(cloneDeep(tree?.children || []), filter),
    }
}

function filterChildren(data: ExperimentsTree[], filter) {
    var r = data.filter(function(o) {
        if (o?.children) o.children = filterChildren(o.children, filter)
        return filter(o)
    })
    return r
}

export function bfs(tree: ExperimentsTree): ExperimentsTree[] {
    const results = []
    // tree.depth = 0
    var queue = [tree]
    var n: ExperimentsTree

    while (queue.length > 0) {
        n = queue.shift()
        results.push(n)

        if (!n.children) {
            continue
        }
        for (var i = 0; i < n.children.length; i++) {
            const child = n.children[i]
            // child.depth = (n.depth || 0) + 1
            queue.push(child)
        }
    }
    return results
}
