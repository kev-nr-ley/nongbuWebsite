import React from "react";
import { Text, Link as NewLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ChakraLink(props, children) {
  return (
    <NewLink
      as={Link}
      to={props.to || "/"}
      onClick={props.onClick || console.log("no click handler")}
      aria-label={`link to ${props.name} page`}
      {...props}>
      <Text
        as='span'
        fontFamily={props.fontFamily}
        fontWeight={props.fontWeight}>
        {props.name}
      </Text>
    </NewLink>
  );
}

export default ChakraLink;
