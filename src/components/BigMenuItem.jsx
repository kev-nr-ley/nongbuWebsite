import React from "react";
import { Link } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

function BigMenuItem({ props, children }) {
  const { colors, fonts } = useTheme();
  return (
    <Link
      {...props}
      colorScheme='brand'
      mx='2'
      w='fit-content'
      letterSpacing={fonts.heading.letterSpacing}
      fontWeight={fonts.heading.fontWeight}
      _after={{
        content: '" "',
        display: "block",
        width: "0%",
        height: "3px",
        backgroundColor: "brand.highlight",
        transition: "width 0.3s",
      }}
      _hover={{
        _after: {
          width: "100%",
        },
      }}>
      {children}
    </Link>
  );
}

export default BigMenuItem;
