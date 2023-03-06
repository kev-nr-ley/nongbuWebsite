import React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

export default function BigNavLink(props) {
  const { colors, fonts } = useTheme();

  return (
    <ChakraLink
      as={Link}
      to={props.to}
      onClick={props.onClick}
      variant='fancyNav'
      w='fit-content'
      fontSize={fonts.headingSize}
      letterSpacing={fonts.headingLetterSpacing}
      lineHeight={fonts.headingLineHeight}
      fontWeight='bold'
      aria-label={`${props.name} link `}
      _after={{
        content: '" "',
        display: "block",
        width: "0%",
        mt: "2px",
        height: "2px",
        backgroundColor: "brand.highlight",
        transition: "width 0.3s",
      }}
      _hover={{
        _after: {
          width: "100%",
        },
      }}>
      <Text>{props.name}</Text>
    </ChakraLink>
  );
}
