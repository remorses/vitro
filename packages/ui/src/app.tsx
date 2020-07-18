// @jsx jsx
import {
    Box,
    ColorModeProvider,
    CSSReset,
    Stack,
    ThemeProvider,
    useColorMode,
} from '@chakra-ui/core'
import { Global, jsx, css } from '@emotion/core'
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
const SM_PAGE_PADDING = '20px'

export function VitroApp({ storiesMap, ...props }) {
    const { Component, pageProps } = props
    return (
        <ColorModeProvider value='light'>
            {/* TODO make initial color mode configurable via webpack define */}
            <ThemeProvider>
                <CSSReset />
                <Global styles={[globalStyles]} />
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
        <>
            <Global
                styles={css`
                    body {
                        min-height: 100vh !important;
                        min-width: 100vw !important;
                        background-color: ${{
                            light: '#EDF2F7',
                            dark: '#1A202C',
                        }[colorMode]} !important;
                    }
                `}
            />
            <Box
                overflowY='auto'
                // width={['270px']}
                width='350px'
                css={css`
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    ::-webkit-scrollbar {
                        display: none;
                    }
                    /* Hide scrollbar for IE, Edge and Firefox */
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                `}
                position='fixed'
                // pr={PAGE_PADDING}
                px={PAGE_PADDING}
                top='0'
                pt={PAGE_PADDING}
                bottom='0'
                // overflowX='hidden'
            >
                <StoriesNav
                    className='vitro smoothscroll'
                    storiesMap={storiesMap}
                    width='100%'
                    fontWeight='500'
                    display={['none', null, null, 'flex']}
                />
                <Box h={PAGE_PADDING} />
            </Box>
            <Stack
                className='vitro smoothscroll'
                position='absolute'
                height='content'
                right='0'
                top='0'
                bottom='0'
                left={[SM_PAGE_PADDING, null, null, '350px']}
                as='main'
                borderLeftWidth={['0', null, null, '2px']}
                pl={['0', null, null, PAGE_PADDING]}
                pt={[SM_PAGE_PADDING, null, null, PAGE_PADDING]}
                pr={[SM_PAGE_PADDING, null, null, PAGE_PADDING]}
                pb={[SM_PAGE_PADDING, null, null, PAGE_PADDING]}
                align='stretch'
                overflowY='scroll'
                // safari fix
                css={css`
                    & > * {
                        flex-shrink: 0;
                    }
                `}
                // width='100%'
                // overflowX='visible'
                // zIndex={0}
            >
                {children}
            </Stack>
        </>
    )
}
