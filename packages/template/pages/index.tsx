import { Box, Stack } from '@chakra-ui/core'

export default function Page(props) {
    return (
        <Stack px='10' align='center'>
            <Stack spacing='10' maxW='500px' align='center' justify='center'>
                <Box lineHeight='1.5em' fontSize='2em' fontWeight='medium'>
                    Storyboards helps you build react components in isolation
                </Box>
                <Box
                    lineHeight='1.5em'
                    fontSize='1.4em'
                    opacity={0.6}
                    fontWeight='medium'
                >
                    Navigate to a story page to see the rendered exported
                    components
                </Box>
                {/* <Image w='300px' src={path.join(BASE_PATH, 'share-reuse.png')} /> */}
            </Stack>
        </Stack>
    )
}
