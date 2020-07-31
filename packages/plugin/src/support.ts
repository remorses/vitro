import { VERBOSE } from './constants'
import { attempt, mapKeys } from 'lodash'
import path from 'path'
import { isError } from 'util'

export const debug = (...args) => {
    if (VERBOSE) {
        console.error(...args)
    }
}

export function resolve(p, opts?: { paths?: string[] }) {
    return path.dirname(require.resolve(path.join(p, 'package.json'), opts))
}

