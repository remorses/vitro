// @jsx jsx
import { getStories, getWrapperComponent } from '../../support'
import { useRouter } from 'next/router'
import { FaBug } from 'react-icons/fa'
import { jsx, css } from '@emotion/core'
jsx
import { Stack, Box, SimpleGrid, Select, Button } from '@chakra-ui/core'
import { useMemo, useState, Fragment } from 'react'
import { DebugCSS } from '../../debugCSS'

export default function Page(props) {
    const [cssDebugEnabled, setCssDebug] = useState(false)
    const [blockWidth, setBlockWidth] = useState('100%')
    const stories = getStories()
    const { query } = useRouter()
    const { story = '' } = query
    const GlobalWrapper = useMemo(() => getWrapperComponent(), [])

    // console.log({ story })
    const storyObject = stories
        .map((x) => {
            // console.log(x)
            return x
        })
        .filter(Boolean)
        .find((x) => {
            const path = normalizePath(x.filename || '')
            // console.log(x.getExports())
            const queryPath = normalizePath(
                Array.isArray(story) ? story.join('/') : story,
            )
            // console.log({
            //     path,
            //     queryPath,
            // })
            return path === queryPath
        })

    const exported = useMemo(() => storyObject?.getExports?.() || {}, [
        storyObject,
    ])
    const StoryWrapper = useMemo(() => exported?.default?.wrapper || Fragment, [
        exported,
    ])
    const storyTitle = exported?.default?.title || storyObject?.title || 'Untitled'
    // if (!exported || !story || !storyObject) {
    //     // TODO return 404
    //     return null
    // }
    return (
        <Stack spacing='10'>
            <Stack>
                <Box fontSize='32px' fontWeight='medium'>
                    {storyTitle}
                </Box>
                <Box fontSize='18px' opacity={0.6}>
                    powered by storyboards
                </Box>
            </Stack>
            <Box h='4' />
            <Stack direction='row'>
                <Button
                    onClick={() => setCssDebug((x) => !x)}
                    opacity={0.8}
                    bg='white'
                    w='auto'
                >
                    <Box mr='2' d='inline-block' as={FaBug} />
                    CSS debug
                </Button>
                <Box flex='1' />
                <Select
                    onChange={(e) => {
                        const columns = String(e.target.value).trim()
                        // console.log({ columns })
                        switch (columns) {
                            case '1':
                                setBlockWidth('100%')
                                break
                            case '2':
                                setBlockWidth('40%')
                                break
                            case '3':
                                setBlockWidth('30%')
                                break
                            default:
                                throw new Error(
                                    `unrecognized columns count ${columns}`,
                                )
                        }
                    }}
                    defaultValue='1'
                    variant='filled'
                    bg='white'
                    w='auto'
                >
                    <option value='1'>1 columns</option>
                    <option value='2'>2 columns</option>
                    <option value='3'>3 columns</option>
                </Select>
            </Stack>
            <Stack
                direction='row'
                flexWrap='wrap'
                justify='space-between'
                spacing='12'
            >
                {Object.keys(exported)
                    .filter((k) => k !== 'default')
                    .map((k, i) => {
                        const Component = exported[k]
                        const title = k // TODO replace camel case with spaces
                        return (
                            <Stack
                                my='10'
                                spacing='3'
                                flexShrink={0}
                                flexGrow={0}
                                // minW='100px'
                                flexBasis={blockWidth}
                                minH='340px'
                                key={k + String(i)}
                                position='relative'
                            >
                                <Stack
                                    position='absolute'
                                    top='10px'
                                    left='20px'
                                    right='20px'
                                    opacity={0.8}
                                    direction='row'
                                    align='center'
                                >
                                    <Box
                                        borderRadius='md'
                                        p='2px'
                                        bg='white'
                                        fontSize='18px'
                                        fontWeight='medium'
                                    >
                                        {title}
                                    </Box>
                                </Stack>
                                <Stack
                                    // shadow='sm'
                                    as={cssDebugEnabled ? DebugCSS : 'div'}
                                    flex='1'
                                    overflow='hidden'
                                    borderRadius='10px'
                                    bg='white'
                                    minH='100%'
                                    spacing='0'
                                    align='center'
                                    justify='center'
                                    // p='6'
                                    // css={cssDebugEnabled ? debugCSS : css``}
                                >
                                    <GlobalWrapper>
                                        <StoryWrapper>
                                            <Component />
                                        </StoryWrapper>
                                    </GlobalWrapper>
                                </Stack>
                            </Stack>
                        )
                    })}
            </Stack>
        </Stack>
    )
}

function normalizePath(path: string): string {
    return path
        .split('/')
        .map((x) => x.trim())
        .filter((x) => x !== '.')
        .filter(Boolean)
        .join('/')
}
