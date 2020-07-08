import { getStories } from '../../support'
import { useRouter } from 'next/router'
import { Stack, Box, SimpleGrid } from '@chakra-ui/core'
import { useMemo } from 'react'

export default function Page(props) {
    const stories = getStories()
    const { query } = useRouter()
    const { story } = query
    if (!story) {
        return null
    }
    console.log({ story })
    const storyObject = stories
        .map((x) => {
            console.log(x)
            return x
        })
        .find((x) => {
            const path = normalizePath(x.filename)
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
    const { title } = storyObject
    const exported = useMemo(() => storyObject.getExports(), [])
    return (
        <Stack spacing='20'>
            <Stack>
                <Box fontSize='32px' fontWeight='medium'>
                    {title}
                </Box>
                <Box fontSize='18px' opacity={0.6}>
                    powered by storyboards
                </Box>
            </Stack>
            <SimpleGrid columns={[1, 1, 1, 2,  3]} flexWrap='wrap' spacing='20'>
                {Object.keys(exported).map((k, i) => {
                    const Component = exported[k]
                    const title = k // TODO replace camel case with spaces
                    return (
                        <Stack
                            my='10'
                            spacing='4'
                            width='400px'
                            height='400px'
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
                            >
                                <Component />
                            </Stack>
                            <Stack opacity={0.8} direction='row' align='center'>
                                <Box fontSize='18px' fontWeight='medium'>{title}</Box>
                            </Stack>
                        </Stack>
                    )
                })}
            </SimpleGrid>
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
