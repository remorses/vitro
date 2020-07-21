import React from 'react'
import { Box, Stack, Image } from '@chakra-ui/core'
import { TOP_TITLE_H } from './support'
import { ToggleColorModeButton } from './story'
import { MobileNav } from './mobile_nav'

export function Home({ storiesMap, ...rest }) {
    return (
        <Stack align='stretch' flex='1' width='100%'>
            <Stack w='100%' spacing='10' align='center' justify='center'>
                <Stack
                    height={TOP_TITLE_H}
                    spacing='3'
                    align='center'
                    direction='row'
                    width='100%'
                >
                    <Box flex='1' />
                    <ToggleColorModeButton />
                    <MobileNav
                        display={['flex', null, null, 'none']}
                        storiesMap={storiesMap}
                    />
                </Stack>

                <Box lineHeight='1.5em' fontSize='2em' fontWeight='medium'>
                    Vitro helps you build react components in isolation
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
