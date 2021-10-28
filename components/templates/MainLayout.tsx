import { Flex, HStack, useColorModeValue as mode } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../organisms/Sidebar";
import { Navbar } from "../organisms/Navbar";

interface Props {
  children: React.ReactNode
}

const layout = (props: Props) => {
  return (
    <HStack spacing="0">
      <Navbar />
      <Sidebar />
      <Flex flex="1" direction="column" overflowY="auto" minHeight="100vh" width="100%" borderRightWidth="1px">
        {props.children}
      </Flex>
    </HStack>
  )
}

export default layout

