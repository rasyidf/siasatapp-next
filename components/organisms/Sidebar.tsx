import React, { Suspense, useState } from 'react'
import {
    Box, Button, Divider, Flex, FlexProps, Portal, Skeleton, Spacer, Stack,
    useBreakpointValue,
    useColorModeValue as mode,
    useDisclosure,
} from '@chakra-ui/react'

import { NavLink } from '../atoms'
import { UserProfile } from '../molecules'
import { FiChevronLeft, FiChevronRight, FiHelpCircle, FiHome, FiUsers } from 'react-icons/fi'

export const routes = [
    {
      name: "Home",
      path: "/",
      icon: FiHome,
      exact: true, 
    },
    {
      name: "Students",
      path: "/students",
      icon: FiUsers,
      exact: true, 
    },
    {
      name: "About",
      path: "/about",
      icon: FiHelpCircle,
      exact: true, 
    },
    {
      visible: false,
      name: "Logout",
      path: "/logout",
      exact: true, 
    },
    {
      visible: false,
      name: "Login",
      path: "/login",
      exact: true, 
    }
  ];


interface Props extends FlexProps {
    isOpen:boolean
    onToggle:React.ReactEventHandler
}


export const Sidebar = (props: Props) => {
    const {isOpen, onToggle, ...rest} = props
    const sidebarWidth = useBreakpointValue({ base: '79px', sm: '79px', md: "250px", xl: "286px" }, "250px");
    const sidebarMaxWidth = useBreakpointValue({ base: '60px', sm: '79px', md: "250px", xl: "420px" }, "79px");
    const sidebarMinWidth = useBreakpointValue({ base: '60px', sm: '79px', md: "200px" }, "79px");
    const flexPadding = useBreakpointValue({ base: "2", sm: "3", md: "3", xl: "3" }, "79px");
    const buttonLeft = useBreakpointValue({ base: '96px', sm: '111px', md: "280px", xl: "316px" });
 

    return (
        <Flex
            height="100vh"
            bg={mode('gray.50', 'gray.800')}
            direction="column"
            transition="all 0.2s"
            borderRightWidth="1px"
            width={isOpen ? sidebarWidth : "79px"}
            {...rest}
        >
            <Portal>
                <Button variant="solid" aria-label="Expander" display={{ base: "none", sm: "none", md: "block" }} bg={mode('gray.100', 'gray.800')}
                    rounded="80" pos="absolute" transition="all 0.2s" minH="30px" minW="30px" maxW="32px" maxH="32px" border="1px"
                    borderColor={mode('blackAlpha.200', 'whiteAlpha.200')} iconSpacing="0" leftIcon={isOpen ? <FiChevronLeft /> : <FiChevronRight />}
                    left={isOpen ? buttonLeft : "111px"} size="xs" top="64px" onClick={onToggle}/>
            </Portal>
            <Flex direction="column" flex="1" p={isOpen ? flexPadding : "3"} overflowY="auto">
                <Box mb={8}>
                    <UserProfile isexpanded={isOpen}
                        name="Rasyid"
                        image="https://res.cloudinary.com/hafari-id/image/upload/c_thumb,w_100,g_face/v1635061207/Rasyid.dev/me_ukyrsa.jpg"
                        email="contact@rasyid.dev"
                    />
                </Box>
                {/* <SearchField mb={6} /> */}
                <Stack spacing={3}>
                    {routes.map((entry, i) => (
                        entry.visible == false ? null : <NavLink isexpanded={isOpen} label={entry.name} to={entry.path} icon={entry.icon} key={i} />
                    ))} 
                </Stack>
            </Flex>
            <Divider />

        </Flex >
    )
}
