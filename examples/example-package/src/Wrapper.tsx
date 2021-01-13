import React, { useState, useEffect } from 'react'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

export default function Wrapper({ children, isDark=false, ...rest }) {
    return (
        <ColorModeProvider value={isDark ? 'dark' : 'light'}>
            <ThemeProvider {...rest}>
                <CSSReset />
                {/* <Box>fuck</Box> */}
                {children}
            </ThemeProvider>
        </ColorModeProvider>
    )
}
