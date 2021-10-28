import { Box, Flex, Spacer } from '@chakra-ui/layout';
import {
    useColorMode,
    useColorModeValue as mode, Button
} from '@chakra-ui/react';
import React from 'react'
import { FiServer, FiLogOut, FiSun, FiMoon } from 'react-icons/fi';
import { NavItem } from '../atoms/NavItem';

interface Props {

}

export const Navbar: React.FC<{}> = ({ children }): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex 
            height={{base: "3em", md:"100vh"}} 
            direction={{base:"row", md:"column"}} 
            width={{base: "100%", md: "3em"}}
            minW="3em" bgColor="brand.800" overflowY="auto">

            <NavItem.Desktop ml={{base:"20px", md:'4px'}} icon={<FiServer />} href="/" />
            <Spacer />
            {children}
            <Spacer />
            <NavItem.Desktop aria-label="change theme" onClick={toggleColorMode}    icon={colorMode == "dark" ? <FiSun color="white" /> : <FiMoon color="white" />} />
            <NavItem.Desktop icon={<FiLogOut />} href="/logout" />
        </Flex>
    )
};
