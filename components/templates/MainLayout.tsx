import { Flex, Stack, useColorModeValue as mode, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../organisms/Sidebar";
import { Navbar } from "../organisms/Navbar";

interface Props {
  isOpen:boolean,
  onToggle:React.ReactEventHandler
  children: React.ReactNode
}

const layout = (props: Props) => {
  const Content = (
    <>
    <Navbar />
    <Sidebar isOpen={props.isOpen} onToggle={props.onToggle} />
    <Flex flex="1" direction="column" overflowY="auto" minHeight="100vh" width="100%" borderRightWidth="1px">
      {props.children}
    </Flex>
    </>
  )

  return (
    <Stack spacing="0" direction={{base:"column",md:"row" }}>
      {Content}
    </Stack>
  )
}

export default layout

