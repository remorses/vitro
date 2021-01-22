import { Stack, CSSReset } from '@chakra-ui/core'
import React from 'react'

export const DefaultWrapper = ({ children }) => {
    return (
        <Stack
            align='center'
            justify='center'
            flex='1'
            width='100%'
            minWidth='100%'
            minHeight='100%'
            spacing='0'
        >
            {/* <CSSReset /> */}
            {children}
        </Stack>
    )
}

export default DefaultWrapper
