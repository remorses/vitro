import React from 'react'
import * as exported from '@vitro-root/../tailwind/src/example-tailwind.vitro'
import { default as GlobalWrapper } from '@vitro-root/../@vitro/ui/dist/components/DefaultWrapper'
import experimentsMap from '@vitro-root/experimentsMap'
import { ExperimentPage } from '@vitro/ui'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/tailwind/src/example-tailwind.vitro.jsx'

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
