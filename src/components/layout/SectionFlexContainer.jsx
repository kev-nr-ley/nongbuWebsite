import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";


export default function SectionFlexContainer(props) {
  const { colors } = useTheme();

  return (
    <Flex //section container
      className='SectionFlexContainer '
      alignItems={["center", "center"]}
      flexDirection={["column", "row", "row", "row"]}
      position='relative'
      justifyContent={"center"}
      h={["100%", "auto", "auto", "auto"]}
      minW='20rem'
      w='100vw'
      maxW='100%'
      // border='1px solid red'
      // bg={props.bg || colors.backgroundLight}
      color={props.color || colors.dark}
      {...props}></Flex>
  );
}
