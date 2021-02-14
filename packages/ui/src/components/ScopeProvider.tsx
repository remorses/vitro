import * as React from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import memoize from '@emotion/memoize'
import stylisPluginExtraScope from 'stylis-plugin-extra-scope'

let memoizedCreateCacheWithScope = memoize((scope) => {
    return createCache({
        key: 'vitro',
        stylisPlugins: [stylisPluginExtraScope(scope)],
    })
})

export const ScopeProvider = (props) => {
    return (
        <CacheProvider value={memoizedCreateCacheWithScope(props.scope)}>
            {props.children}
        </CacheProvider>
    )
}
