import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    Link,
    Skeleton,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'

import React from 'react'
import { HiChartBar, HiDownload, HiPlus } from 'react-icons/hi'
import { Header, HeaderProps } from '../molecules/Header'

interface Props {
    HeaderText?: string
    SubHeader?: string
    isLoading?: boolean
    Tools?: JSX.Element
    TabHeader?: JSX.Element
    children?: JSX.Element
}

export const TabbedHeader = (props: Props) => {
    return (
        <Tabs isFitted colorScheme="green">
            <Flex direction="column" align="stretch" minH="100vh">
                <Box bg={mode('gray.50', 'gray.800')} px="2" pt="6">
                    <Box mx="6">
                     
                        <Skeleton isLoaded={props.isLoading != true} >
                        {Header({ Header: props.HeaderText ?? "", SubHeader: props.SubHeader, Tools: props.Tools })}
                        </Skeleton>
                        <Flex justify="space-between" align="center">
                            {props.TabHeader}
                            <Link
                                href="#"
                                fontWeight="semibold"
                                color={mode('green.600', 'green.300')}
                                fontSize="sm"
                                display={{ base: 'none', md: 'block' }}
                            >
                                <Box as={HiChartBar} fontSize="sm" display="inline-block" marginEnd="2" />
                                View form analytics
                            </Link>
                        </Flex>
                    </Box>
                </Box>
                <Box pos="relative" zIndex={0}>
                    <Divider borderBottomWidth="2px" opacity={1} borderColor={mode('gray.100', 'gray.700')} />
                </Box>
                <Box px="8" flex="1">
                    <Box maxW="7xl" mx="auto">
                        {props.children}
                    </Box>
                </Box>
            </Flex>
        </Tabs>

    )
}

export const NormalHeader = (props: Props) => {
    return (
        <Flex direction="column" align="stretch" >
            <Box bg={mode('gray.50', 'gray.800')}  pt={{ base: "2", md: "6" }}>
                <Box mx={{ base: "2", md: "6" }}>
                    <Skeleton isLoaded={props.isLoading != true} w="20px" >
                    {Header({ Header: props.HeaderText ?? "", SubHeader: props.SubHeader, Tools: props.Tools })}
                    </Skeleton>
                </Box>
            </Box>  
            <Box pos="relative" zIndex={0}>
                <Divider borderBottomWidth="2px" opacity={1} borderColor={mode('gray.100', 'gray.700')} />
            </Box>
        </Flex>
    )
}



