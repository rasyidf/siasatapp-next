import { Flex, Spacer } from '@chakra-ui/layout';
import { useColorMode, Button } from '@chakra-ui/react';
import React from 'react'
import { FiServer, FiLogOut, FiSun, FiMoon } from 'react-icons/fi';
import { NavItem } from '../atoms/NavItem';

interface Props {

}

export const Navbar: React.FC<{}> = ({ children }): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex 
            height="100vh" direction="column" 
            minW="3em" bgColor="brand.800" overflowY="auto">
                
            <NavItem.Desktop icon={<FiServer />} href="/" />
            <Spacer />
            {children}
            <Spacer />
            <Button aria-label="change theme" variant="ghost" onClick={toggleColorMode} iconSpacing='0' _hover={{ bg: 'green' }} _focus={{ ring:"none" }} leftIcon={colorMode == "dark" ? <FiSun color="white" /> : <FiMoon color="white" />} />
            <NavItem.Desktop icon={<FiLogOut />} href="/logout" />
        </Flex>
    )
};
