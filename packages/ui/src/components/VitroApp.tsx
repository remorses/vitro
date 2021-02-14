// @jsx jsx
import {
    Box,
    ChakraProvider,
    ColorModeProvider,
    CSSReset,
    Stack,
    ThemeProvider,
    useColorMode,
} from '@chakra-ui/react'
import { Global, jsx, css, CacheProvider } from '@emotion/react'
import NProgress from 'nprogress'
import React, { useState, useEffect, useMemo } from 'react'
import { globalStyles } from '../css'
import { ExperimentsNav } from './ExperimentsNav'
import stylisPluginExtraScope from 'stylis-plugin-extra-scope'
import weakMemoize from '@emotion/weak-memoize'
import createCache from '@emotion/cache'
import { SplashScreen } from './SplashScreen'
import { ExperimentsTree } from '../support'
import { Provider as JotaiProvider } from 'jotai'
import { history } from '../history'

jsx

// TODO nprogress stuff
// Router.events.on('routeChangeStart', (url) => {
//     // console.log(`Loading: ${url}`)
//     NProgress.start()
// })
// Router.events.on('routeChangeComplete', () => NProgress.done())
// Router.events.on('routeChangeError', () => NProgress.done())

const PAGE_PADDING = '40px'
const SM_PAGE_PADDING = '20px'

const emotionCache = createCache({
    key: 'vitro',
    stylisPlugins: [stylisPluginExtraScope('body')],
})

export function VitroApp({ experimentsTree, children, ...props }) {
    return (
        <CacheProvider value={emotionCache}>
            <ChakraProvider>
                {/* TODO make initial color mode configurable via webpack define */}
                <JotaiProvider>
                    <CSSReset />
                    <Global styles={[globalStyles]} />
                    <Content experimentsTree={experimentsTree}>
                        {children}
                    </Content>
                </JotaiProvider>
            </ChakraProvider>
        </CacheProvider>
    )
}

function useSSRSkip({} = {}) {
    const [r, set] = useState(false)
    useEffect(() => {
        set(true)
    }, [])
    if (!r) {
        return false
    }
    return r
}

const Content = ({
    experimentsTree,
    children,
}: {
    experimentsTree: ExperimentsTree
    children
}) => {
    const loaded = useSSRSkip()
    const { colorMode } = useColorMode()

    if (!loaded) {
        return (
            <>
                <BgStyles />
                <SplashScreen />
            </>
        )
    }

    return (
        <>
            <BgStyles />

            <Box
                className='vitro'
                overflowY='auto'
                overflowX='hidden'
                // width={['270px']}
                width='350px'
                position='fixed'
                // pr={PAGE_PADDING}
                px={PAGE_PADDING}
                top='0'
                pt={PAGE_PADDING}
                bottom='0'
                // overflowX='hidden'
            >
                <ExperimentsNav
                    className='vitro smoothscroll'
                    experimentsTree={experimentsTree}
                    width='100%'
                    fontWeight='500'
                    display={['none', null, null, 'flex']}
                />
                <Box h={PAGE_PADDING} />
            </Box>
            <Box
                className='vitro smoothscroll'
                position='absolute'
                height='content'
                right='0'
                top='0'
                bottom='0'
                left={[SM_PAGE_PADDING, null, null, '350px']}
                as='main'
                borderLeftWidth={['0', null, null, '2px']}
                borderColor={{ light: 'gray.200', dark: 'gray.700' }[colorMode]}
                pl={['0', null, null, PAGE_PADDING]}
                pt={[SM_PAGE_PADDING, null, null, PAGE_PADDING]}
                pr={[SM_PAGE_PADDING, null, null, PAGE_PADDING]}
                pb={[SM_PAGE_PADDING, null, null, PAGE_PADDING]}
                // align='stretch'
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
            </Box>
        </>
    )
}

const BgStyles = () => {
    const { colorMode } = useColorMode()
    return (
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
    )
}
