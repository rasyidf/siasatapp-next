import { HStack, Icon, Link as ChakraLink, LinkProps, useColorModeValue as mode, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

interface NavLinkProps extends LinkProps {
  isActive?: boolean
  isexpanded: boolean
  label: string
  icon: any
  to: string
}

export const NavLink = (props: NavLinkProps) => {
  const { icon, label, to, isexpanded, ...rest } = props
  const router = useRouter();
  const collapsed = useBreakpointValue({ base: true, md: false });
  const justifyBreak = useBreakpointValue({ base: "center", md: "left" });
  const isActive = router.asPath == to;

  const NavIcon = (
    <Icon as={icon} boxSize="20px" mx={{ base: "auto", md: "0" }} />
  )
  const handleClick = (e:any) => {
    e.preventDefault()
    router.push(to)
  }

  return ( 
      <ChakraLink
        display="flex"
        py="2"
        px="2"
        borderRadius="md"
        transition="all 0.3s"
        fontWeight="medium"
        alignItems="center"
        justifyContent={isexpanded ? justifyBreak : "center"}
        fontSize="sm"
        userSelect="none"
        aria-current={isActive ? 'page' : undefined}
        color={mode('gray.700', 'gray.400')}
        _hover={{
          bg: mode('gray.100', 'gray.700'),
          color: mode('gray.900', 'white'),
        }}
        _activeLink={{
          bg: mode('brand.800', 'brand.700'),
          color: mode('white', 'white'),
        }}
        {...rest}
        href={to} onClick={handleClick}
      >
        {isexpanded ? !collapsed ? (
          <HStack spacing="2" px="3">
            <Icon as={icon} boxSize="20px" />
            <Text as="span" >{label}</Text>
          </HStack>
        ) :
          NavIcon
          : NavIcon
        }
      </ChakraLink> 
  )
}
