import React from "react";
import { Link } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

function BigMenuItem({ props, children }) {
  const { colors, fonts } = useTheme();
  return (
    <Link
      variant='fancyNav'
      w='fit-content'
      fontSize={fonts.headingSize}
      letterSpacing={fonts.headingLetterSpacing}
      lineHeight={fonts.headingLineHeight}
      fontWeight='bold'
      {...props}
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
      {children}
    </Link>
  );
}

export default BigMenuItem;
