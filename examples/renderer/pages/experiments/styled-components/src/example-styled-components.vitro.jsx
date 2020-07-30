import React from 'react'
import * as exported from '@/../styled-components/src/example-styled-components.vitro'
import { default as GlobalWrapper } from '@/../@vitro/ui/dist/components/DefaultWrapper'
import experimentsMap from '@/experimentsMap'
import { ExperimentPage } from '@vitro/ui'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/example-styled-components.vitro.jsx'

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
