import React from "react";
import { Text, Link as NewLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ChakraLink(props, children) {
  return (
    <NewLink
      as={Link}
      variant={props.variant || "fancyLink"}
      to={props.to || "/"}
      name={props.name}
      onClick={props.onClick || null}
      aria-label={`link to ${props.name} page`}
      {...props}>
      {props.children ? props.children : props.name}
    </NewLink>
  );
}

export default ChakraLink;
