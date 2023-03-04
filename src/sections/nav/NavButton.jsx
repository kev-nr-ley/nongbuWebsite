import React from "react";
import { Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { CloseIcon } from "@chakra-ui/icons";

export default function NavButton(props) {
  const { colors } = useTheme();

  return (
    <Box cursor='pointer' zIndex={10} {...props}>
      {props.isMenuOpen ? (
        <CloseIcon fontSize='40px' color={colors.primary} />
      ) : (
        <FaBars fontSize='52px' color={colors.primary} />
      )}
    </Box>
  );
}
