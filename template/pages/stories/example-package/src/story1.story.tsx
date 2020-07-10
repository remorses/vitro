
import * as exported from '@/../example-package/src/story1.story'
const absolutePath = '/Users/morse/Documents/GitHub/react-comics/example-package/src/story1.story.tsx'
import React, { Fragment } from 'react'
import { StoryPage } from 'storyboards/dist/story'

const GlobalWrapper = getWrapperComponent()

export default function Page() {
    return (
        <StoryPage
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            storyExports={exported}
        />
    )
}

function getWrapperComponent() {
    try {
        return require(WRAPPER_COMPONENT_PATH).default
    } catch (e) {
        return Fragment
    }
}
