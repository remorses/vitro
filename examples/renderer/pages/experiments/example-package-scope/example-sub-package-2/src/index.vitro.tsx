import React from 'react'
import * as exported from '@vitro-root/../example-package-scope/example-sub-package-2/src/index.vitro'
import { default as GlobalWrapper } from '@vitro-root/../@vitro/ui/dist/components/DefaultWrapper'
import experimentsMap from '@vitro-root/experimentsMap'
import { ExperimentPage } from '@vitro/ui'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-2/src/index.vitro.tsx'

export default function Page() {
    return (
        <ExperimentPage
            experimentsMap={experimentsMap}
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            fileExports={exported}
        />
    )
}
