import React from "react";
import { useTheme } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink.jsx";

export default function EarLogoLink(props) {
  const { colors, fonts } = useTheme();
  return (
    <ChakraLink
      to='/ear'
      name='ear'
      variant='fancyLink'
      h='fit-content'
      fontFamily={fonts.ear}
      fontWeight='200'
      fontSize='2.5rem'
      {...props}>
      ear
    </ChakraLink>
  );
}
