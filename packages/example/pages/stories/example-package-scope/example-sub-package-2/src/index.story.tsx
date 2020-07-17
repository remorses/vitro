import React from 'react'
import * as exported from '@/../example-package-scope/example-sub-package-2/src/index.story'
import { default as GlobalWrapper } from '@/../example-package/src/Wrapper'
import storiesMap from '@/storiesMap'
import { StoryPage } from '@vitro/ui'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/packages/example-package-scope/example-sub-package-2/src/index.story.tsx'

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
