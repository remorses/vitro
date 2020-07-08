import { Stack, Box, StackProps } from '@chakra-ui/core'
import { FiChevronRight } from 'react-icons/fi'

import NextLink from 'next/link'
import { getStories } from '../support'
import { useMemo } from 'react'

export const StoriesIndex = (p: StackProps) => {
    const stories = useMemo(() => getStories(), [])
    return (
        <Stack spacing='4' {...p}>
            {stories.map(({ title, filename }) => {
                return (
                    <Box key={filename}>
                        <NextLink passHref href={`/stories/${filename}`}>
                            <Stack
                                cursor='pointer'
                                align='center'
                                direction='row'
                            >
                                <Box as={FiChevronRight} size='1em' />
                                <Box as='a'>{title}</Box>
                            </Stack>
                        </NextLink>
                    </Box>
                )
            })}
        </Stack>
    )
}
