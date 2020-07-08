import { getStories } from '../../support'
import { useRouter } from 'next/router'
import { Stack, Box } from '@chakra-ui/core'

export default function Page(props) {
    const stories = getStories()
    const { query } = useRouter()
    const { story } = query
    if (!story) {
        return null
    }
    console.log({ story })
    const exported = stories
        .map((x) => {
            console.log(x)
            return x
        })
        .find((x) => {
            const path = normalizePath(x.filename)
            console.log(x.getExports())
            const queryPath = normalizePath(
                Array.isArray(story) ? story.join('/') : story,
            )
            console.log({
                path,
                queryPath,
            })
            return path === queryPath
        })
        .getExports()
    console.log(exported)
    return (
        <Stack spacing='10' >
            {Object.keys(exported).map((k, i) => {
                const Component = exported[k]
                const title = k // TODO replace camel case with spaces
                return (
                    <Stack key={k + String(i)} p='20' borderWidth='1px'>
                        <Box>{title}</Box>
                        <Component />
                    </Stack>
                )
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
