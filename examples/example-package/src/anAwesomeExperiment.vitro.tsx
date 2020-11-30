import React from 'react'
import {
    Button,
    Alert,
    AlertIcon,
    AlertDescription,
    Box,
    Stack,
} from '@chakra-ui/core'
import Wrapper from './Wrapper'

export default {
    title: 'My Awesome Component!',
    wrapper: Wrapper,
}

export const SimpleButton = ({}) => {
    return <Button>Click me</Button>
}

export const AlertStory = ({}) => {
    return (
        <Box p='2'>
            <Alert variant='left-accent' status='info'>
                <AlertIcon />
                Chakra is awesome
            </Alert>
        </Box>
    )
}
