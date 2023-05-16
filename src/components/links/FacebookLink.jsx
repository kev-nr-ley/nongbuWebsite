import React from "react";
import { FaFacebook } from "react-icons/fa";
import ChakraLink from "@components/ChakraLink.jsx";
export default function FacebookLink(props) {
  return (
    <ChakraLink
      to="https://www.facebook.com/NongBuKorean/"
      name="facebook"
      fontSize="3rem"
      target="_blank"
      {...props}
    >
      <FaFacebook />
    </ChakraLink>
  );
}
