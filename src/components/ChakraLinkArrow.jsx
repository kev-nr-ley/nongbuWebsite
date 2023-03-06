import React from "react";
import { Text, Link as NewLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useTheme } from "@chakra-ui/react";

function ChakraLinkArrow(props, children) {
  return (
    <NewLink
      as={Link}
      variant='heroLink'
      to={props.to || "/"}
      name={props.name}
      onClick={props.onClick || null}
      aria-label={`link to ${children} page`}>
      <Text as='span' {...props}>
        {props.name}
        <ArrowForwardIcon />
      </Text>
    </NewLink>
  );
}

export default ChakraLinkArrow;
