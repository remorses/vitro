import React from 'react'
import * as exported from '@/../styled-components/src/example-styled-components.vitro'
import { default as GlobalWrapper } from '@/../@vitro/ui/src/default_wrapper'
import storiesMap from '@/storiesMap'
import { StoryPage } from '@vitro/ui/src'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/example-styled-components.vitro.jsx'

export default function Page() {
    return (
        <StoryPage
            storiesMap={storiesMap}
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            storyExports={exported}
        />
    )
}
