import React from 'react'
import * as exported from '_vitro-root_/../example-package/src/anotherExperiment copy copy copy.vitro'
import { default as GlobalWrapper } from '_vitro-root_/../@vitro/ui/src/components/DefaultWrapper'
import experimentsTree from '_vitro-root_/experimentsTree.json'
import { ExperimentPage } from '@vitro/ui/src'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anotherExperiment copy copy copy.vitro.tsx'

export default function Page() {
    return (
        <ExperimentPage
            experimentsTree={experimentsTree}
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            fileExports={exported}
        />
    )
}
