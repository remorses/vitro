import React from 'react'
import * as exported from '@/../example-package/src/anotherStory.vitro'
import { default as GlobalWrapper } from '@/../@vitro/ui/src/default_wrapper'
import experimentsMap from '@/experimentsMap'
import { ExperimentPage } from '@vitro/ui/src'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anotherStory.vitro.tsx'

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
