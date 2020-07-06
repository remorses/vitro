import { Stack } from '@chakra-ui/core'
import { Comics } from '../components/Comics'

export default function Page(props) {
    return (
        <Stack p='20'>
            <Comics />
        </Stack>
    )
}
