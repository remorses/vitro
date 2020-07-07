import { Stack, Box } from '@chakra-ui/core'
import flatten from 'lodash/flatten'
import NextLink from 'next/link'

const contexts = [
    // because require.context can't receive non literal values
    // TODO remove the node_modules packages
    require.context(STORIES_PATH, STORIES_RECURSIVE, STORIES_EXTENSION),
   
].filter(Boolean)

export function getStories(): {
    filename: string
    getExports: () => Record<string, any>
}[] {
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
                    <Box key={story.filename}>
                        <NextLink passHref href={`/stories/${story.filename}`}>
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
