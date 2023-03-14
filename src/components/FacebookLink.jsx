import React from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import ChakraLink from "./ChakraLink.jsx";
export default function FacebookLink(props) {
  return (
    <ChakraLink to='facebook.com' name='facebook' fontSize='52px' {...props}>
      <FaFacebook />
    </ChakraLink>
  );
}
