import { Stack, Box } from '@chakra-ui/core'
import flatten from 'lodash/flatten'
import NextLink from 'next/link'

const contexts = [
    // because require.context can't receive non literal values
    // require.context('../../', true, /^((?![\\/]node_modules|vendor[\\/]).)*story\.tsx$/),
    TARGET_PACKAGE_1 &&
        require.context(TARGET_PACKAGE_1, true, STORIES_EXTENSION),
    TARGET_PACKAGE_2 &&
        require.context(TARGET_PACKAGE_2, true, STORIES_EXTENSION),
    TARGET_PACKAGE_3 &&
        require.context(TARGET_PACKAGE_3, true, STORIES_EXTENSION),
    TARGET_PACKAGE_4 &&
        require.context(TARGET_PACKAGE_4, true, STORIES_EXTENSION),
    TARGET_PACKAGE_5 &&
        require.context(TARGET_PACKAGE_5, true, STORIES_EXTENSION),
    TARGET_PACKAGE_6 &&
        require.context(TARGET_PACKAGE_6, true, STORIES_EXTENSION),
    TARGET_PACKAGE_7 &&
        require.context(TARGET_PACKAGE_7, true, STORIES_EXTENSION),
    TARGET_PACKAGE_8 &&
        require.context(TARGET_PACKAGE_8, true, STORIES_EXTENSION),
    TARGET_PACKAGE_9 &&
        require.context(TARGET_PACKAGE_9, true, STORIES_EXTENSION),
    TARGET_PACKAGE_10 &&
        require.context(TARGET_PACKAGE_10, true, STORIES_EXTENSION),
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
