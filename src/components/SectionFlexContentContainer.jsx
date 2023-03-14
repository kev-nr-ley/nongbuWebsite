import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
import NongbuImageContainer from "@components/NongbuImageContainer";
export default function SectionFlexContentContainer(props) {
  const { colors } = useTheme();

  return (
    <Flex //section content
      flexDirection={"column"}
      h='fit-content'
      minW='300px'
      // alignItems={"center"}
      // justifyContent={"center"}
      w={["100%", "50vw", "50vw", "50vw"]}
      maxW={["auto", "300px", "300px"]}
      pb={["10vw", "0"]}
      {...props}>
      <Flex flexDirection='column' h='100%' justifyContent={"center"} gap='8'>
        {props.headingtext ? (
          <Heading variant='mediumHeading'>{props.headingtext}</Heading>
        ) : null}

        {props.headingsubtext ? (
          <Heading variant='smallHeading'>{props.headingsubtext}</Heading>
        ) : null}

        {props.children}

        {props.linktext ? (
          <ChakraLinkArrow to={props.linkto || "/"} name={props.linktext} />
        ) : null}
      </Flex>
    </Flex>
  );
}
