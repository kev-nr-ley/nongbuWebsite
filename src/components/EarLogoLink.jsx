import React from "react";
import { Text, Link as NewLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useTheme } from "@chakra-ui/react";

export default function EarLogoLink(props) {
  const { colors, fonts } = useTheme();
  return (
    <NewLink
      href='https://www.instagram.com/ear_yeg'
      name='ear'
      variant='fancyLink'
      target='_blank'
      h='fit-content'
      fontFamily={fonts.ear}
      fontWeight='200'
      fontSize='2.5rem'
      {...props}>
      ear
    </NewLink>
  );
}
