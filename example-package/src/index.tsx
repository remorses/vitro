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
            style={{
                width: 200,
                height: 200,
            }}
            children={state}
            {...rest}
        />
    )
}
