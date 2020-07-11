
import * as exported from '@/../example-package/src/stillAnotherStory.story'
import { default as GlobalWrapper } from '@/../storyboards/src/default_wrapper'
import React from 'react'
import { StoryPage } from 'storyboards/src/story'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/example-package/src/stillAnotherStory.story.tsx'

export default function Page() {
    return (
        <StoryPage
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            storyExports={exported}
        />
    )
}
