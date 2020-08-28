import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core'

export default function Wrapper({ children, dark }) {
    return (
        <ColorModeProvider value={dark ? 'dark' : 'light'}>
            <ThemeProvider>{children}</ThemeProvider>
        </ColorModeProvider>
    )
}
