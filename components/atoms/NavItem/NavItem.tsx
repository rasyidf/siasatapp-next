import { Box, HStack , StackProps} from '@chakra-ui/react'
import * as React from 'react'
import Link from 'next/link'
interface NavItemProps extends StackProps {
    href?: string
    active?: boolean
    label?: string
}

interface DesktopNavItemProps extends NavItemProps {
    icon: React.ReactNode
    onClick? : React.ReactEventHandler
}

const DesktopNavItem = (props: DesktopNavItemProps) => {
    const { icon, label, href = '#', active, ...rest } = props
    const Stack = (
        <HStack
                onClick={props.onClick}
                aria-current={active ? 'page' : undefined}
                spacing="2"
                m="1"
                px="3"
                py="3"
                rounded="md"
                transition="all 0.2s"
                color="gray.200"
                _hover={{ bg: 'whiteAlpha.200' }}
                _activeLink={{ bg: 'blackAlpha.300', color: 'white' }}
                {...rest}
            >
                {icon && (
                    <Box aria-hidden fontSize="md">
                        {icon}
                    </Box>
                )}
                {label && (<Box fontWeight="semibold">{label}</Box>)}
            </HStack>
    )
    return (
        href ? 
        (<Link href={href} passHref>
            {Stack}
        </Link> ): Stack
    )
}

const MobileNavItem = (props: NavItemProps) => {
    const { label, href = '#', active } = props
    return (
        <Box
            as="a"
            display="block"
            href={href}
            px="3"
            py="3"
            rounded="md"
            fontWeight="semibold"
            aria-current={active ? 'page' : undefined}
            _hover={{ bg: 'whiteAlpha.200' }}
            _activeLink={{ bg: 'blackAlpha.300', color: 'white' }}
        >
            {label}
        </Box>
    )
}

export const NavItem = {
    Desktop: DesktopNavItem,
    Mobile: MobileNavItem,
}
