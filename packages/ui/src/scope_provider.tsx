import * as React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/core";
import memoize from "@emotion/memoize";
import stylisPluginExtraScope from "stylis-plugin-extra-scope";

let memoizedCreateCacheWithScope = memoize(scope => {
  return createCache({
    stylisPlugins: [stylisPluginExtraScope(scope)]
  });
});

export const ScopeProvider = props => {
  return (
    <CacheProvider value={memoizedCreateCacheWithScope(props.scope)}>
      {props.children}
    </CacheProvider>
  );
};
