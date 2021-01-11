import { Box, PseudoBox, useColorMode } from '@chakra-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import React, { cloneElement, forwardRef } from 'react'

export const ComponentLink = React.memo(
    forwardRef(({ href, ...props }: any, ref) => {
        const { colorMode } = useColorMode()
        const hoverColor = { light: 'gray.900', dark: 'whiteAlpha.900' }
        const activeColor = { light: 'gray.800', dark: 'gray.200' }
        // const activeBg = { light: 'yellow.100', dark: 'gray.700' }

        return (
            <NavLink href={href}>
                {(isActive) => (
                    <SideNavLink
                        ref={ref}
                        href={href}
                        aria-current={isActive ? 'page' : undefined}
                        _hover={{
                            color: hoverColor[colorMode],
                            transform: 'translateX(4px)',
                        }}
                        {...(isActive && {
                            textDecoration: 'underline',
                            // bg: activeBg[colorMode],
                            rounded: 'sm',
                            fontWeight: 600,
                            color: activeColor[colorMode],
                            // _hover: {},
                        })}
                        {...props}
                    />
                )}
            </NavLink>
        )
    }),
)

export const SideNavLink = forwardRef(
    ({ children, icon, bg, ...props }: any, ref) => {
        const { colorMode } = useColorMode()
        const color = { light: 'gray.700', dark: 'whiteAlpha.700' }
        return (
            <PseudoBox
                ref={ref}
                display='flex'
                cursor='pointer'
                alignItems='center'
                transition='all 0.2s'
                outline='none'
                _focus={{ shadow: 'outline' }}
                _notFirst={{ mt: 1 }}
                py='1'
                {...props}
            >
                {icon && cloneElement(icon, { mr: 3 })}
                <Box bg={bg}>{children}</Box>
            </PseudoBox>
        )
    },
)

const NavLink = ({ children, href, ...props }: any) => {
    // const router = useRouter()
    const { pathname = '' } = useLocation()
    let isActive =
        pathname?.replace(/\/$/, '').replace(/\bindex$/, '') ===
        href.replace(/\/$/, '')
    if (process.env.USE_HREF) {
        return typeof children === 'function' ? children(isActive) : children
    }

    return (
        <RouterLink to={href} {...props}>
            {typeof children === 'function' ? children(isActive) : children}
        </RouterLink>
    )
}

export const stringToUrl = (str, path = '/') => {
    return `${path}${str
        .toLowerCase()
        .split(' ')
        .join('-')}`
}
