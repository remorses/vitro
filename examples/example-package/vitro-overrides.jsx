import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core'
import React from 'react'

export function Wrapper({ children, dark = false, ...rest }) {
    return (
        <ColorModeProvider value={dark ? 'dark' : 'light'}>
            <ThemeProvider {...rest}>
                <CSSReset />I am a wrapper
                {children}
            </ThemeProvider>
        </ColorModeProvider>
    )
}
