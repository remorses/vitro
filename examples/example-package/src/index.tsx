import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/core'

export const Component = ({ ...rest }) => {
    const [state, setState] = useState('')
    useEffect(() => {
        setState('ciao')
    }, [])
    return (
        <Box
            bg='lightblue'
            width='200px'
            h='200px'
            children={state}
            {...rest}
        />
    )
}
