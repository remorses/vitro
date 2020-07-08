import { Stack, Box, StackProps } from '@chakra-ui/core'
import { AiFillCaretRight } from 'react-icons/ai'

import NextLink from 'next/link'
import { getStories } from '../support'
import { useMemo } from 'react'

export const StoriesIndex = ({
    filter,
    ...p
}: StackProps & { filter: string }) => {
    filter = filter.toLowerCase()
    const stories = useMemo(() => getStories(), [])
    return (
        <Stack spacing='4' {...p}>
            {stories.map(({ title, filename }) => {
                if (
                    filter &&
                    !title.toLowerCase().includes(filter) &&
                    !filename.toLowerCase().includes(filter)
                ) {
                    return null
                }
                return (
                    <Box key={filename}>
                        <NextLink passHref href={`/stories/${filename}`}>
                            <Stack
                                cursor='pointer'
                                align='center'
                                direction='row'
                            >
                                <Box
                                    as={AiFillCaretRight}
                                    opacity={0.6}
                                    size='0.9em'
                                />
                                <Box as='a'>{title}</Box>
                            </Stack>
                        </NextLink>
                    </Box>
                )
            })}
        </Stack>
    )
}
