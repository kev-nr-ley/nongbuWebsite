import { ComponentStyleConfig } from "@chakra-ui/react";

import { theme } from "../theme";

export const LinkStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    color: "white",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "1.25px",

    _hover: {
      textDecoration: "none",
      color: "primary",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    fancyLink: {
      bg: "blue",
      color: "white",
      letterSpacing: "0.2em",
      fontSize: "1.2rem",
      w: "auto",

      _hover: {
        color: "primary",
        _after: {
          width: "100%",
        },
      },
      _active: {
        color: "primary",
      },
      _after: {
        content: '" "',
        display: "block",
        width: "0%",
        mt: "2px",
        height: "2px",
        backgroundColor: "brand.highlight",
        transition: "width 0.3s",
      },
    },

    heroLink: {
      bg: "transparent",
      color: "primary",
      fontSize: "20px",
      fontWeight: "700",
      _hover: {
        color: "white",
        _after: {
          width: "100%",
        },
      },
    },

    sectionLink: {
      bg: "transparent",
      color: "primary",
      fontSize: "20px",
      fontWeight: "700",
      pr:'2',

      _hover: {
        color: "white",
        _after: {
          width: "100%",
        },
      },
    },
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "100px",
    variant: "",
    colorScheme: "",
  },
};
