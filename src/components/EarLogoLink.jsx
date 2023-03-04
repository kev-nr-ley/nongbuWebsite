import React from "react";
import ChakraLink from "@components/ChakraLink";
import { useTheme } from "@chakra-ui/react";
export default function EarLogoLink() {
  const { fonts } = useTheme();
  return (
    <ChakraLink
      to='https://www.instagram.com/ear_yeg'
      name='ear'
      target='_blank'
      fontSize='52px'
      fontFamily={fonts.ear}
      fontWeight='200'></ChakraLink>
  );
}
