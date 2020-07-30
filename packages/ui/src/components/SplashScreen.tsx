import { Stack, Box, Spinner } from '@chakra-ui/core'
import React from 'react'
import { Faded } from 'baby-i-am-faded'
import { Logo } from './ExperimentsNav'

export const SplashScreen = ({}) => {
    return (
        <Faded delay={10} cascade duration={600}>
            <Stack
                spacing='40px'
                minW='100vw'
                minH='100vh'
                align='center'
                justify='center'
            >
                <Logo fontSize='60px' />
                <Spinner size={'60px' as any} borderWidth='10px' />
            </Stack>
        </Faded>
    )
}
