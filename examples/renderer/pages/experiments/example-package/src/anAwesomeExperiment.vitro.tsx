import React from 'react'
import * as exported from '@/../example-package/src/anAwesomeExperiment.vitro'
import { default as GlobalWrapper } from '@/../@vitro/ui/src/components/DefaultWrapper'
import experimentsMap from '@/experimentsMap'
import { ExperimentPage } from '@vitro/ui/src'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anAwesomeExperiment.vitro.tsx'

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
