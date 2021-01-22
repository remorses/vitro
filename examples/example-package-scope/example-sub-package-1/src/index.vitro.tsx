import React from 'react'
import { Component1 } from './index'
import { Button, Progress, Box, ThemeProvider } from '@chakra-ui/core'



export const Simple = ({}) => {
    return <Component1 />
}

export const DifferentColor = ({}) => {
    return <Component1 bg='red' />
}

export const NotDefinedWidth = ({}) => {
    return (
        <ThemeProvider>
            <Box width='100%'>
                <Button>click me!</Button>
                <Progress borderRadius='4' value={90} />
            </Box>
        </ThemeProvider>
    )
}
