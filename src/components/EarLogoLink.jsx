import React from "react";
import ChakraLink from "@components/ChakraLink";
import { useTheme } from "@chakra-ui/react";
export default function EarLogoLink(props) {
  const { fonts } = useTheme();
  return (
    <ChakraLink
      to='https://www.instagram.com/ear_yeg'
      name='ear'
      target='_blank'
      fontSize='52px'
      lineHeight='69px'
      fontFamily={fonts.ear}
      h='100%'
      fontWeight='200'
      {...props}></ChakraLink>
  );
}
