import React from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import ChakraLink from "./ChakraLink.jsx";
export default function InstagramLink(props) {
  return (
    <ChakraLink to='instagram.com' name='instagram' fontSize='52px' {...props}>
      <FaInstagram />
    </ChakraLink>
  );
}
