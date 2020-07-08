// @jsx jsx
import { getStories } from '../../support'
import { useRouter } from 'next/router'
import { FaBug } from 'react-icons/fa'
import { jsx, css } from '@emotion/core'
jsx
import { Stack, Box, SimpleGrid, Select, Button } from '@chakra-ui/core'

import { useMemo, useState } from 'react'
import { debugCSS } from '../../debugCSS'

export default function Page(props) {
    const [cssDebugEnabled, setCssDebug] = useState(false)
    const stories = getStories()
    const { query } = useRouter()
    const { story = '' } = query

    console.log({ story })
    const storyObject = stories
        .map((x) => {
            console.log(x)
            return x
        })
        .filter(Boolean)
        .find((x) => {
            const path = normalizePath(x.filename || '')
            console.log(x.getExports())
            const queryPath = normalizePath(
                Array.isArray(story) ? story.join('/') : story,
            )
            console.log({
                path,
                queryPath,
            })
            return path === queryPath
        })

    const { title } = storyObject || {}
    const exported = useMemo(() => storyObject?.getExports?.() || {}, [storyObject])
    // if (!exported || !story || !storyObject) {
    //     // TODO return 404
    //     return null
    // }
    return (
        <Stack spacing='10'>
            <Stack>
                <Box fontSize='32px' fontWeight='medium'>
                    {title}
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
                <Select defaultValue='3' variant='filled' bg='white' w='auto'>
                    <option value='1'>1 columns</option>
                    <option value='2'>2 columns</option>
                    <option value='3'>3 columns</option>
                </Select>
            </Stack>
            <Stack flexWrap='wrap' spacing='12'>
                {Object.keys(exported).map((k, i) => {
                    const Component = exported[k]
                    const title = k // TODO replace camel case with spaces
                    return (
                        <Stack
                            // my='6'
                            spacing='3'
                            width='100%'
                            minH='400px'
                            key={k + String(i)}
                        >
                            <Stack
                                flex='1'
                                overflow='hidden'
                                borderRadius='10px'
                                bg='white'
                                spacing='0'
                                align='center'
                                justify='center'
                                p='6'
                                css={cssDebugEnabled ? debugCSS : css``}
                            >
                                <Component />
                            </Stack>
                            <Stack opacity={0.8} direction='row' align='center'>
                                <Box fontSize='18px' fontWeight='medium'>
                                    {title}
                                </Box>
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
