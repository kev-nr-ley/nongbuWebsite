import React from "react";
import { Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

export default function NavButton(props) {
  const { colors } = useTheme();



  return (
    <Box
      position='fixed'
      top='0'
      right='0'
      p='1vw'
      zIndex={9999999}
      //   bg={colors.dark}
      cursor='pointer'
      onClick={props.setIsMenuOpen(!props.isMenuOpen)}
      {...props}>
      <FaBars
        fontSize='52px'
        color={colors.primary}
       
      />
    </Box>
  );
}
