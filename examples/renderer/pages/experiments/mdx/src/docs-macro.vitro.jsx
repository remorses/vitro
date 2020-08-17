import React from 'react'
import * as exported from '@vitro-root/../mdx/src/docs-macro.vitro'
import { default as GlobalWrapper } from '@vitro-root/../@vitro/ui/src/components/DefaultWrapper'
import experimentsMap from '@vitro-root/experimentsMap'
import { ExperimentPage } from '@vitro/ui/src'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/mdx/src/docs-macro.vitro.jsx'

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
