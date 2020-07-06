import { Stack } from '@chakra-ui/core'
import { Comics } from '../components/Comics'

export default function Page(props) {
    return (
        <Stack minWidth='100vw' minHeight='100vh' bg='gray.100' p='20'>
            <Comics />
        </Stack>
    )
}
