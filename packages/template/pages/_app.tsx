import {
    CSSReset,
    Stack,
    ThemeProvider,
    Box,
    useColorMode,
    ColorModeProvider,
} from '@chakra-ui/core'
import { css, Global } from '@emotion/core'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import React from 'react'
import { StoriesIndex } from '../components/StoriesIndex'

Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const PAGE_PADDING = '40px'

export default function App(props) {
    const { Component, pageProps } = props

    return (
        <ColorModeProvider value='light'>
            {/* TODO make initial color mode configurable via webpack define */}
            <ThemeProvider>
                <CSSReset />
                <Global styles={globalStyles} />
                <Content>
                    <Component {...pageProps} />
                </Content>
            </ThemeProvider>
        </ColorModeProvider>
    )
}

export const Content = ({ children }) => {
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
                <StoriesIndex
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

const nprogressStyles = css`
    /* Make clicks pass-through */
    #nprogress {
        pointer-events: none;
    }

    #nprogress .bar {
        background: #29d;

        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;

        width: 100%;
        height: 5px;
    }

    /* Fancy blur effect */
    #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 5px #29d, 0 0 3px #29d;
        opacity: 1;

        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
    }

    /* Remove these to get rid of the spinner */
    #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 25px;
    }

    #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;

        border: solid 3px transparent;
        border-top-color: #29d;
        border-left-color: #29d;
        border-radius: 50%;

        -webkit-animation: nprogress-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
        position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes nprogress-spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

const globalStyles = css`
    * {
        box-sizing: border-box;
        flex-shrink: 0;
        flex-grow: 0;
    }
    html {
        overflow: hidden;
        height: 100%;
    }
    #__next {
        min-height: 100%;
    }
    body {
        height: 100%;
        overflow: auto;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
    main {
        -webkit-overflow-scrolling: touch;
    }
    ${nprogressStyles}
`
