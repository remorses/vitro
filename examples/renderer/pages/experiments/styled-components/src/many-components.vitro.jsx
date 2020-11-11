import React from 'react'
import * as exported from '_vitro-root_/../styled-components/src/many-components.vitro'
import { default as GlobalWrapper } from '@vitro/ui/src/components/DefaultWrapper'
import experimentsTree from '_vitro-root_/experimentsTree.json'
import { ExperimentPage } from '@vitro/ui/src'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/renderer/pages/experiments/styled-components/src/many-components.vitro.jsx'
const sourceExperimentPath = '/Users/morse/Documents/GitHub/react-comics/examples/renderer/styled-components/src/many-components.vitro.jsx'

export default function Page() {
    return (
        <ExperimentPage
            experimentsTree={experimentsTree}
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            sourceExperimentPath={sourceExperimentPath}
            fileExports={exported}
        />
    )
}
