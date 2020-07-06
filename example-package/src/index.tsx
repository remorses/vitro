import React from 'react'
import { Box } from '@chakra-ui/core'

export const Component = ({ ...rest }) => {
    return (
        <Box
            bg='lightblue'
            style={{
                width: 200,
                height: 200,
            }}
            {...rest}
        />
    )
}
