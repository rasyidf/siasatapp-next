import { Box, Flex, FlexProps, HStack, Img, useBreakpointValue, useColorModeValue, useMenuButton } from '@chakra-ui/react'
import * as React from 'react'
import { HiSelector } from 'react-icons/hi'

interface AccountSwitcherButtonProps extends FlexProps {
    selected?: string | string[]
    name?: string
    email?: string
    image: string
    isexpanded: boolean
}

export const AccountSwitcherButton = (props: AccountSwitcherButtonProps) => {
    const {isexpanded, ...flexProps} = props;
    const buttonProps = useMenuButton(flexProps as FlexProps);
    const widthBreak = useBreakpointValue({ base: "100%", sm: "56px", md: "100%" }, "100%");
    const paddingBreak = useBreakpointValue({ base: "2", md: "4" }, "4");
    const marginBreak = useBreakpointValue({ base: "auto", sm: "auto", md: "0" }, "0");
    const displayBreak = useBreakpointValue({ base: "none", md: "block" }, "block");
    const headColor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
    const subColor = useColorModeValue("blackAlpha.600", "whiteAlpha.600");
    return (
        <Flex
            as="button"
            {...buttonProps}
            w={props.isexpanded ? widthBreak : "100%"}
            maxW={props.isexpanded ? widthBreak : "100%"}
            display="flex"
            alignItems="center"
            rounded="lg"
            bg='blackAlpha.200'
            px={props.isexpanded ? paddingBreak : "2"}
            py="2"
            fontSize="sm"
            userSelect="none"
            cursor="pointer"
            outline="0"
            _active={{ bg: 'blackAlpha.200' }}
            _focus={{ shadow: 'outline' }}
        >
            <HStack flex="1" spacing="3">
                <Img

                    mx={props.isexpanded ? marginBreak : "auto"}
                    width="32px"
                    height="32px"
                    rounded="md"
                    objectFit="cover"
                    src={props.image}
                    alt="Chakra UI"
                />
                <Box textAlign="start" display={props.isexpanded ? displayBreak : "none"}>
                    <Box isTruncated fontWeight="semibold" color={headColor}>
                        {props.name}
                    </Box>
                    <Box fontSize="xs" color={subColor}>
                        {props.email}
                    </Box>
                </Box>
            </HStack>
            <Box fontSize="lg" pl={2} color="gray.400" display={props.isexpanded ? displayBreak : "none"}>
                <HiSelector />
            </Box>
        </Flex>
    )
}
