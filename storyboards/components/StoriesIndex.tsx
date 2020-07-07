import { Stack, Box } from '@chakra-ui/core'
import flatten from 'lodash/flatten'
import NextLink from 'next/link'

export function getStories(): {
    filename: string
    getExports: () => Record<string, any>
}[] {
    const contexts = [
        // TODO generate require.context calls when cmd start, because require.context can't receive non literal values
        // TODO create some constant webpack defined consts with PACKAGE_1, PACKAGE_1, to PACKAGE_10, then
        // require.context('../../', true, /^((?![\\/]node_modules|vendor[\\/]).)*story\.tsx$/),
        typeof TARGET_PACKAGE_1 === 'string' &&
            require.context(TARGET_PACKAGE_1, true, STORIES_EXTENSION),
        typeof TARGET_PACKAGE_2 === 'string' &&
            require.context(TARGET_PACKAGE_2, true, STORIES_EXTENSION),
    ].filter(Boolean)
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
