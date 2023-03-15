import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
import SectionFlexContentContainer from "@components/SectionFlexContentContainer";
import NongbuImageContainer from "@components/NongbuImageContainer";
export default function SectionFlexContainer(props) {
  const { colors } = useTheme();

  return (
    <Flex //section container
      alignItems={["center", "center"]}
      flexDirection={["column", "row", "row", "row"]}
      position='relative'
      justifyContent={"center"}
      h={["100%", "auto", "auto", "auto"]}
      w='100vw'
      maxW='100%'
      gap='8'
      bg={props.bg || colors.backgroundLight}
      color={props.color || colors.dark}
      {...props}></Flex>
  );
}
