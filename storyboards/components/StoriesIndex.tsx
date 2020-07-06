import { Stack, Box } from '@chakra-ui/core'
import NextLink from 'next/link'

export function getStories() {
    const context = require.context('example-package', true, /story\.tsx$/)
    const exports = context.keys()
    return {
        exports: exports.map((filename) => {
            return {
                filename,
                getExports: () => {
                    return context(filename)
                },
            }
        }),
    }
}

export const StoriesIndex = ({}) => {
    const stories = getStories()
    return (
        <Stack spacing='10'>
            {stories.exports.map((story) => {
                return (
                    <NextLink
                        key={story.filename}
                        passHref
                        href={`/stories/${story.filename}`}
                    >
                        <Stack
                            as='a'
                            borderRadius='md'
                            bg='white'
                            shadow='lg'
                            p='6'
                        >
                            {<Box>{story.filename}</Box>}
                        </Stack>
                    </NextLink>
                )
            })}
        </Stack>
    )
}
