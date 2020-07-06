import { getComics } from '../../components/Comics'
import { useRouter } from 'next/router'
import { Stack } from '@chakra-ui/core'

export default function Page(props) {
    const comics = getComics()
    const { query } = useRouter()
    const { comic } = query
    if (!comic) {
        return null
    }
    console.log({ comic })
    const components = comics.exports
        .map((x) => {
            console.log(x)
            return x
        })
        .find((x) => {
            const path = normalizePath(x.filename)
            console.log(x.getExports())
            const queryPath = normalizePath(
                Array.isArray(comic) ? comic.join('/') : comic,
            )
            console.log({
                path,
                queryPath,
            })
            return path === queryPath
        })
        .getExports()
    console.log(components)
    return (
        <Stack>
            {Object.keys(components).map((k, i) => {
                const Component = components[k]
                return <Component key={k + String(i)} />
            })}
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
