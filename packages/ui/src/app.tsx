// @jsx jsx
import {
    Box,
    ColorModeProvider,
    CSSReset,
    Stack,
    ThemeProvider,
    useColorMode,
} from '@chakra-ui/core'
import { Global, jsx } from '@emotion/core'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import React from 'react'
import { globalStyles } from './css'
import { StoriesNav } from './stories_nav'

jsx

Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const PAGE_PADDING = '40px'

export function VitroApp({ storiesMap, ...props }) {
    const { Component, pageProps } = props

    return (
        <ColorModeProvider value='light'>
            {/* TODO make initial color mode configurable via webpack define */}
            <ThemeProvider>
                <CSSReset />
                <Global styles={globalStyles} />
                <Content storiesMap={storiesMap}>
                    <Component {...pageProps} />
                </Content>
            </ThemeProvider>
        </ColorModeProvider>
    )
}

const Content = ({
    storiesMap,
    children,
}: {
    storiesMap: Record<string, string>
    children
}) => {
    const { colorMode } = useColorMode()
    return (
        <Stack
            position='relative'
            overflowX='hidden'
            minWidth='100vw'
            minHeight='100vh'
            bg={{ light: 'gray.100', dark: 'gray.800' }[colorMode]}
        >
            <Box
                // overflowY='auto'
                width={['270px']}
                position='fixed'
                // pr={PAGE_PADDING}
                left={PAGE_PADDING}
                top='0'
                pt={PAGE_PADDING}
                bottom='0'
                // overflowX='hidden'
            >
                <StoriesNav
                    storiesMap={storiesMap}
                    width='100%'
                    fontWeight='500'
                    display={['none', null, null, 'flex']}
                />
                <Box h={PAGE_PADDING} />
            </Box>
            <Stack
                position='absolute'
                height='content'
                right='0'
                top='0'
                bottom='0'
                left={[PAGE_PADDING, null, null, '350px']}
                as='main'
                borderLeftWidth={['0', null, null, '2px']}
                pl={['0', null, null, PAGE_PADDING]}
                pt={PAGE_PADDING}
                pr={PAGE_PADDING}
                pb={PAGE_PADDING}
                // width='100%'
                // overflowX='visible'
                // zIndex={0}
                align='stretch'
                overflowY='scroll'
            >
                {children}
            </Stack>
        </Stack>
    )
}
