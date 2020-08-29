import React from 'react'
import * as exported from '@vitro-root/../tailwind/src/example-tailwind.vitro'
import { default as GlobalWrapper } from '@vitro-root/../@vitro/ui/src/components/DefaultWrapper'
import experimentsMap from '@vitro-root/experimentsMap'
import experimentsTree from '@vitro-root/experimentsTree.json'
import { ExperimentPage } from '@vitro/ui/src'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/tailwind/src/example-tailwind.vitro.jsx'

export default function Page() {
    return (
        <ExperimentPage
            experimentsMap={experimentsMap}
            experimentsTree={experimentsTree}
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            fileExports={exported}
        />
    )
}
