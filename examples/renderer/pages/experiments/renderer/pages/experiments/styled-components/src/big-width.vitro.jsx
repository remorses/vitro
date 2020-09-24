import React from 'react'
import * as exported from '_vitro-root_/../renderer/pages/experiments/styled-components/src/big-width.vitro'
import { default as GlobalWrapper } from '@vitro/ui/dist/components/DefaultWrapper'
import experimentsTree from '_vitro-root_/experimentsTree.json'
import { ExperimentPage } from '@vitro/ui'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/renderer/pages/experiments/renderer/pages/experiments/styled-components/src/big-width.vitro.jsx'

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
