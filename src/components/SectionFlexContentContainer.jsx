import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
import NongbuImageContainer from "@components/NongbuImageContainer";
export default function SectionFlexContentContainer(props) {
  const { colors } = useTheme();

  return (
    <Flex
      flexDirection='column'
      h='fit-content'
      minW='300px'
      justifyContent={"center"}
      gap='8'
      px='1rem'
      w='100%'
      {...props}>
      {props.headingtext ? (
        <Heading variant='mediumHeading'>{props.headingtext}</Heading>
      ) : null}

      {props.headingsubtext ? (
        <Heading variant='smallHeading'>{props.headingsubtext}</Heading>
      ) : null}

      {props.children}

      {props.linktext ? (
        <ChakraLinkArrow
          variant='sectionLink'
          to={props.linkto || "/"}
          name={props.linktext}
        />
      ) : null}
    </Flex>
  );
}
