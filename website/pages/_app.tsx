import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz/dist'
import React, { Fragment } from 'react'
import Head from 'next/head'
import Logo from '../public/vitro_text_and_beaker.svg'
import { Box } from '@chakra-ui/core'

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <Fragment>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css?family=Fira+Code'
                    rel='stylesheet'
                    key='google-font-Fira'
                />
            </Head>
            <DokzProvider
                docsRootPath='pages/docs'
                headerLogo={
                    <a href='/'>
                        <Box as={Logo} width='120px' opacity={0.8} />
                        {/* <Box fontSize='1.4em' fontWeight='600'>
                            Vitro
                        </Box> */}
                    </a>
                }
                headerItems={[
                    <GithubLink
                        key='0'
                        url='https://github.com/remorses/dokz'
                    />,
                    <ColorModeSwitch key='1' />,
                ]}
                sidebarOrdering={{
                    docs: {
                        'index.mdx': true,
                        'config.mdx': true,
                        'writing-experiments': true,
                        'dark-mode': true,
                        deploy: true,
                    },
                }}
            >
                <Component {...pageProps} />
            </DokzProvider>
        </Fragment>
    )
}
