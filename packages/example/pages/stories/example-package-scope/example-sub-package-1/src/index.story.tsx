import * as exported from '@/../example-package-scope/example-sub-package-1/src/index.story'
import { default as GlobalWrapper } from '@/../example-package/src/Wrapper'
import React from 'react'
import { StoryPage } from '@vitro/ui/src/story'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/packages/example-package-scope/example-sub-package-1/src/index.story.tsx'

export default function Page() {
    return (
        <StoryPage
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            storyExports={exported}
        />
    )
}
