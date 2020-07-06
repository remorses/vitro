import { Stack, Box } from '@chakra-ui/core'
import NextLink from 'next/link'
import { DEFAULT_COMIC_EXTENSION } from '../constants'

export function getComics() {
    const context = require.context('example-package', true, /comic\.tsx$/)
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

export const Comics = ({}) => {
    const comics = getComics()
    return (
        <Stack spacing='10'>
            {comics.exports.map((comic) => {
                return (
                    <NextLink
                        key={comic.filename}
                        passHref
                        href={`/comics/${comic.filename}`}
                    >
                        <Stack as='a' shadow='lg' borderRadius='md' p='6'>
                            {<Box>{comic.filename}</Box>}
                        </Stack>
                    </NextLink>
                )
            })}
        </Stack>
    )
}
