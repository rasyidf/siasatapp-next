import {
    Flex, HStack, Heading, Text, 
    useColorModeValue as mode,
} from "@chakra-ui/react" 

export type HeaderProps = {
    Header: string
    SubHeader?: string
    Tools?: JSX.Element
}

export const Header = (props: HeaderProps) => {
    return <Flex bg={mode('gray.50', 'gray.800')}
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="flex-start" mb={{ base: '0', md: '2' }}
    >
        <HStack mb={{ base: '2', md: '4' }}>
            <Heading size="28">{props.Header}</Heading>
            <Text color={mode('gray.500', 'gray.300')} fontSize="sm">
                {props.SubHeader}
            </Text>
        </HStack>

        {props.Tools}

    </Flex>
}