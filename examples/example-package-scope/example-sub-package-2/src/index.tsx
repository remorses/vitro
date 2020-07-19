import React from 'react'
import { Box } from '@chakra-ui/core'

export const Component1 = ({ ...rest }) => {
    return (
        <Box
            bg='#e44'
            style={{
                width: 200,
                height: 200,
            }}
            {...rest}
        />
    )
}
