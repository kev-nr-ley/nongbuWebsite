import { ComponentStyleConfig } from "@chakra-ui/react";

import { theme } from "../theme";

export const LinkStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontWeight: "500",
    letterSpacing: "1.25px",
    fontSize: "1em",
    h: "100%",
    _hover: {
      textDecoration: "none",
      color: "primary",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    // fancy link does the underline effect and changes color to primary
    fancyLink: {
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
      color: "primary",
      width: "fit-content",
      fontSize: '1.25em',
      _after: {
        content: '" "',
        display: "block",
        width: "0%",
        mt: "2px",
        height: "2px",
        backgroundColor: "brand.highlight",
        transition: "width 0.3s",
      },
      _hover: {
        _after: {
          width: "100%",
        },
      },
    },

    bigNavLink: {
      fontSize: "1.25em",
      fontWeight: "700",

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
    sectionLink: {
      bg: "transparent",
      color: "primary",
      fontSize: "20px",
      fontWeight: "700",
      pr: "2",
      w: "fit-content",

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
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "100px",
    variant: "",
    colorScheme: "",
  },
};
