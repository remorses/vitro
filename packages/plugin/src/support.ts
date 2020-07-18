import { VERBOSE } from './constants'
import { attempt } from 'lodash'
import path from 'path'
import { isError } from 'util'

export const debug = (...args) => {
    if (VERBOSE) {
        console.error(...args)
    }
}

export function resolveOuterFirst({ package: p, __dirname }) {
    let result
    result = attempt(() => {
        resolve(p, { paths: [path.resolve(__dirname, '../')] })
    })
    if (!isError(result)) {
        return result
    }
    return resolve(p)
}

function resolve(p, opts?: { paths?: string[] }) {
    return path.dirname(require.resolve(path.join(p, 'package.json'), opts))
}
