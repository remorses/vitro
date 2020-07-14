import { Stack } from '@chakra-ui/core'
import React from 'react'

export const DefaultWrapper = ({ children }) => {
    return (
        <Stack
            align='center'
            justify='center'
            flex='1'
            width='100%'
            height='100%'
            spacing='0'
        >
            {children}
        </Stack>
    )
}

export default DefaultWrapper
