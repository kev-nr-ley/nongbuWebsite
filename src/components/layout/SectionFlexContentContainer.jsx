import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";

export default function SectionFlexContentContainer(props) {
  return (
    <Flex
      className="section-flex-content-container"
      flexDirection="column"
      minW="18rem"
      w="clamp(18rem, 100%, 100%)"
      // border="1px solid purple"
      // bg="#ff00ff30"
      px="1rem"
      py="2rem"
      {...props}
    >
      {props.headingtext && (
        <Heading variant={props.headingvariant || "mediumHeading"}>
          {props.headingtext}
        </Heading>
      )}

      {props.headingsubtext && (
        <Heading variant="smallHeading">{props.headingsubtext}</Heading>
      )}

      {props.children}

      {props.linktext && (
        <ChakraLinkArrow
          ml="0"
          color="primary"
          to={props.linkto || "/"}
          name={props.linktext}
          alignSelf={props.linkalign || "flex-start"}
        />
      )}
    </Flex>
  );
}
