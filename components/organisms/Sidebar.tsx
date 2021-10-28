import React, { Suspense, useState } from 'react'
import {
    Box, Button, Divider, Flex, FlexProps, Portal, Skeleton, Spacer, Stack,
    useBreakpointValue,
    useColorModeValue as mode,
} from '@chakra-ui/react'

import { NavLink } from '../atoms'
import { UserProfile } from '../molecules'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
interface Props {
}


export const Sidebar = (props: FlexProps) => {
    const [Expanded, setExpanded] = useState(true);
    const sidebarWidth = useBreakpointValue({ base: '60px', sm: '79px', md: "250px", xl: "286px" }, "250px");
    const sidebarMaxWidth = useBreakpointValue({ base: '60px', sm: '79px', md: "250px", xl: "420px" }, "79px");
    const sidebarMinWidth = useBreakpointValue({ base: '60px', sm: '79px', md: "200px" }, "79px");
    const flexPadding = useBreakpointValue({ base: "2", sm: "3", md: "3", xl: "3" }, "79px");
    const buttonLeft = useBreakpointValue({ base: '96px', sm: '111px', md: "280px", xl: "316px" });

    const handleCollapse = () => {
        setExpanded((prevState: boolean): boolean => !prevState);
    };


    return (
        <Flex
            height="100vh"
            bg={mode('gray.50', 'gray.800')}
            direction="column"
            transition="all 0.2s"
            borderRightWidth="1px"
            width={Expanded ? sidebarWidth : "79px"}
            {...props}
        >
            <Portal>
                <Button variant="solid" aria-label="Expander" display={{ sm: "none", md: "block" }} bg={mode('gray.100', 'gray.800')}
                    rounded="80" pos="absolute" transition="all 0.2s" minH="30px" minW="30px" maxW="32px" maxH="32px" border="1px"
                    borderColor="blackAlpha.200" iconSpacing="0" leftIcon={Expanded ? <FiChevronLeft /> : <FiChevronRight />}
                    left={Expanded ? buttonLeft : "111px"} size="xs" top="64px" onClick={handleCollapse} />
            </Portal>
            <Flex direction="column" flex="1" p={Expanded ? flexPadding : "3"} overflowY="auto">
                <Box mb={8}>
                    <UserProfile isexpanded={Expanded}
                        name="Rasyid"
                        image="https://res.cloudinary.com/hafari-id/image/upload/c_thumb,w_100,g_face/v1635061207/Rasyid.dev/me_ukyrsa.jpg"
                        email="contact@rasyid.dev"
                    />
                </Box>
                {/* <SearchField mb={6} /> */}
                <Stack spacing={3}>
                    {/* {routes.map((entry, i) => (
                        entry.visible == false ? null : <NavLink isexpanded={Expanded} label={entry.name} to={entry.path} icon={entry.icon} key={i} />
                    ))} */}
                </Stack>
            </Flex>
            <Divider />

        </Flex >
    )
}
