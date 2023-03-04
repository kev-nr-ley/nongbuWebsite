import React from "react";
import { Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SocialLink(props) {
  return (
    <Box w='fit-content' h='fit-content'>
      <ChakraLink
        fontSize={props.size}
        as={Link}
        to={props.path || "/"}
        onClick={props.onClick || null}
        aria-label={`link to ${props.name}`}
        target='_blank'
        {...props}>
        {props.icon}
      </ChakraLink>
    </Box>
  );
}

export default SocialLink;
