import React from 'react'
import * as exported from '@/../example-package/src/anotherStory copy copy copy.vitro'
import { default as GlobalWrapper } from '@/../@vitro/ui/src/default_wrapper'
import storiesMap from '@/storiesMap'
import { StoryPage } from '@vitro/ui/src'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anotherStory copy copy copy.vitro.tsx'

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
