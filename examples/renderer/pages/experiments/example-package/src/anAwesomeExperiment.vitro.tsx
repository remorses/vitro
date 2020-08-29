import React from 'react'
import * as exported from '@vitro-root/../example-package/src/anAwesomeExperiment.vitro'
import { default as GlobalWrapper } from '@vitro-root/../@vitro/ui/src/components/DefaultWrapper'
import experimentsMap from '@vitro-root/experimentsMap'
import experimentsTree from '@vitro-root/experimentsTree.json'
import { ExperimentPage } from '@vitro/ui/src'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anAwesomeExperiment.vitro.tsx'

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
