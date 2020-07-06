import { Stack, Box } from '@chakra-ui/core'
import { DEFAULT_COMIC_EXTENSION } from '../constants'

export function getComics({ basePath, extension = DEFAULT_COMIC_EXTENSION }) {
    const context = require.context('example-package', true, )
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
    const comics = getComics({
        basePath: 'example-package',
    })
    return (
        <Stack spacing='10'>
            {comics.exports.map((comic) => {
                return (
                    <Stack
                        shadow='lg'
                        borderRadius='md'
                        p='6'
                        key={comic.filename}
                    >
                        {<Box>{comic.filename}</Box>}
                    </Stack>
                )
            })}
        </Stack>
    )
}
