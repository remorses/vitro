import { VERBOSE } from './constants'
import { attempt, mapKeys } from 'lodash'
import path from 'path'
import { isError } from 'util'

export const debug = (...args) => {
    if (process.env.DEBUG) {
        console.error('[DEBUG]', ...args)
    }
}

export function resolve(p, opts?: { paths?: string[] }) {
    return path.dirname(
        require.resolve(path.join(p, 'package.json').toString(), opts),
    )
}
