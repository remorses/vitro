import { Stack, Box } from '@chakra-ui/core'
import flatten from 'lodash/flatten'
import NextLink from 'next/link'

export function getStories(): {
    filename: string
    getExports: () => Record<string, any>
}[] {
    const contexts = [
        require.context('example-package', true, /story\.tsx$/),
        require.context('@example-package-scope', true, /story\.tsx$/),
    ]
    const exports = flatten(
        contexts.map((c, i) =>
            c.keys().map((filename) => ({ filename, context: contexts[i] })),
        ),
    )
    return exports.map(({ context, filename }) => {
        return {
            filename,
            getExports: () => {
                return context(filename)
            },
        }
    })
}

export const StoriesIndex = ({}) => {
    const stories = getStories()
    return (
        <Stack spacing='10'>
            {stories.map((story) => {
                return (
                    <Box>
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
                    </Box>
                )
            })}
        </Stack>
    )
}
