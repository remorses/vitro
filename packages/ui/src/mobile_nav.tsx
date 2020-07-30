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
import React, { useEffect } from 'react'
import { MdDehaze } from 'react-icons/md'
import { useRouter } from 'next/router'
import { StoriesNav } from './stories_nav'

export const useRouteChanged = (callback) => {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url) => {
            callback()
            console.log('App is changing to: ', url)
        }

        router && router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router &&
                router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router && router.events, callback])
}

export const MobileNav = ({ experimentsMap, ...rest }) => {
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
                        <StoriesNav p='4' experimentsMap={experimentsMap} />
                        <Box h='100px' />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
