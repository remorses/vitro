import React from 'react'
import * as exported from '@/../tailwind/src/example-tailwind.vitro'
import { default as GlobalWrapper } from '@/../@vitro/ui/dist/default_wrapper'
import storiesMap from '@/storiesMap'
import { StoryPage } from '@vitro/ui'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/tailwind/src/example-tailwind.vitro.jsx'

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
