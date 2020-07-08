import React, { useState, useEffect } from 'react'
import { ThemeProvider, Box } from '@chakra-ui/core'

export default function Wrapper({ children, ...rest }) {
    return (
        <ThemeProvider {...rest}>
            {/* <Box>fuck</Box> */}
            {children}
        </ThemeProvider>
    )
}
