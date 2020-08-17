import startCase from 'lodash/startCase'
import { useEffect, useState } from 'react'

export const version = require('../package.json').version

export const TOP_TITLE_H = '60px'

type GetExperimentsReturnType = {
    filename: string
    title: string
    absolutePath: string
    // getExports: () => Record<string, any>
}[]

export const getExperimentsPaths = (
    experimentsMap,
): GetExperimentsReturnType => {
    return Object.keys(experimentsMap).map((filename) => {
        return {
            absolutePath: experimentsMap[filename],
            filename,
            title: formatPathToTitle(filename),
        }
    })
}

export function formatPathToTitle(path: string) {
    const endPath = path
        .split('/')
        .map((x) => x.trim())
        .filter(Boolean)
        .reverse()[0]
    const withoutExt = endPath.split('.')[0]
    return startCase(withoutExt)
}

export function usePromise(p) {
    const [v, set] = useState(!isPromise(p) ? p : undefined)
    useEffect(() => {
        if (isPromise(p)) {
            p.then(set)
        } else {
            set(p)
        }
    }, [p])
    return [v]
}

// export function usePolledPromise(fn, time = 1000) {
//     const [v, set] = useState(undefined)
//     useEffect(() => {
//         let id = setInterval(() => {
//             fn().then((x) => {
//                 if (x !== v) {
//                     set(x)
//                 }
//             })
//         }, time)
//         return () => {
//             clearInterval(id)
//         }
//     }, [])
//     return [v]
// }

function isPromise(p) {
    return p && typeof p.then === 'function'
}
