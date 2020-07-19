import React from 'react'
import * as exported from '@/../example-package/src/story1.vitro'
import { default as GlobalWrapper } from '@/../@vitro/ui/src/default_wrapper'
import storiesMap from '@/storiesMap'
import { StoryPage } from '@vitro/ui/src'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/story1.vitro.tsx'

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
