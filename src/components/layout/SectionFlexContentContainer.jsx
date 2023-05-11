import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";

export default function SectionFlexContentContainer(props) {
  const { colors } = useTheme();

  return (
    <Flex
      className='SectionFlexContentContainer'
      flexDirection='column'
      minW='18rem'
      maxW='100%'
      // border='1px solid purple'
      // bg='#ff00ff30'
      px='1rem'
      py='2rem'
      {...props}>
      {props.headingtext && (
        <Heading variant={props.headingvariant || "mediumHeading"}>
          {props.headingtext}
        </Heading>
      )}

      {props.headingsubtext && (
        <Heading variant='smallHeading'>{props.headingsubtext}</Heading>
      )}

      {props.children}

      {props.linktext && (
        <ChakraLinkArrow
          ml='0'
          color='primary'
          to={props.linkto || "/"}
          name={props.linktext}
          alignSelf={props.linkalign || "flex-start"}
        />
      )}
    </Flex>
  );
}
