import {
    Drawer,
    DrawerBody,
    IconButton,
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    Stack,
    useColorMode,
    Box,
} from '@chakra-ui/core'
import {useHistory} from 'react-router-dom'
import React, { useEffect } from 'react'
import { MdDehaze } from 'react-icons/md'
import { ExperimentsNav } from './ExperimentsNav'

export const useRouteChanged = (callback) => {
    const history = useHistory()
    
    useEffect(() => {
        const handleRouteChange = (url) => {
            callback()
            console.log('App is changing to: ', url)
        }
        const unlisten = history.listen(handleRouteChange)
        return () => {
            unlisten()
        }
    }, [history, callback])
}

export const MobileNav = ({ experimentsTree, ...rest }) => {
    const { isOpen, onToggle, onClose } = useDisclosure()
    useRouteChanged(onClose)
    const { colorMode } = useColorMode()
    return (
        <>
            <IconButton
                // display={{ sm: 'inline-flex', md: 'none' }}
                aria-label='Navigation Menu'
                fontSize='30px'
                variant='ghost'
                icon={MdDehaze}
                onClick={onToggle}
                {...rest}
            />
            <Drawer
                initialFocusRef={null}
                size='xs'
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent
                    bg={
                        {
                            light: '#EDF2F7',
                            dark: '#1A202C',
                        }[colorMode]
                    }
                    height='100vh'
                    overflowY='auto'
                >
                    <DrawerBody p={0}>
                        <ExperimentsNav
                            p='4'
                            experimentsTree={experimentsTree}
                        />
                        <Box h='100px' />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
