import React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

export default function BigNavLink(props) {
  const { colors, fonts } = useTheme();

  return (
    <ChakraLink
      to={props.to}
      onClick={props.onClick}
      name={props.name}
      variant='fancyNav'
      fontSize={fonts.headingSize}
      letterSpacing={fonts.headingLetterSpacing}
      lineHeight={fonts.headingLineHeight}
      fontWeight={fonts.headingFontWeight}
   />
  );
}
