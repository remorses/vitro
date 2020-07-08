import React from 'react'
import { Button, Alert, AlertIcon, AlertDescription } from '@chakra-ui/core'
import { Component } from './index'

export const SimpleButton = ({}) => {
    return <Button>Click me</Button>
}

export const AlertStory = ({}) => {
    return (
        <Alert variant='left-accent' status='info'>
            <AlertIcon />
            Chakra is awesome
        </Alert>
    )
}
