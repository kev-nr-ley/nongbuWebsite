import React from "react";
import { FaInstagram } from "react-icons/fa";
import ChakraLink from "@components/ChakraLink.jsx";
export default function InstagramLink(props) {
  return (
    <ChakraLink
      to='https://www.instagram.com/nongbu_korean/'
      name='instagram'
      fontSize='3rem'
      target='_blank'
      {...props}>
      <FaInstagram />
    </ChakraLink>
  );
}
