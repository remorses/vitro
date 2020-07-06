import React, { Fragment } from 'react'
import Head from 'next/head'

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <Fragment>
            <Component {...pageProps} />
        </Fragment>
    )
}
