import React from "react";
import { useTheme } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink.jsx";

export default function EarLogoLink(props) {
  const { colors, fonts } = useTheme();
  return (
    <ChakraLink
      to='https://www.instagram.com/ear_yeg'
      name='ear'
      variant='fancyLink'
      target='_blank'
      h='fit-content'
      fontFamily={fonts.ear}
      fontWeight='200'
      fontSize='2.5rem'
      {...props}>
      ear
    </ChakraLink>
  );
}
