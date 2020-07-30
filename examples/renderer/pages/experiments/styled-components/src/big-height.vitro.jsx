import React from 'react'
import * as exported from '@/../styled-components/src/big-height.vitro'
import { default as GlobalWrapper } from '@/../@vitro/ui/src/default_wrapper'
import experimentsMap from '@/experimentsMap'
import { ExperimentPage } from '@vitro/ui/src'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/big-height.vitro.jsx'

export default function Page() {
    return (
        <ExperimentPage
            experimentsMap={experimentsMap}
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            storyExports={exported}
        />
    )
}
