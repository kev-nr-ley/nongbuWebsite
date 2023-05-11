import { ComponentStyleConfig } from "@chakra-ui/react";

import { theme } from "../theme";

export const LinkStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    letterSpacing: "1.25px",
    w: "fit-content",
    fontSize: [
      "calc(1rem + 0.25vw)",
      "calc(1rem + 0.25vw)",
      "calc(1rem + 0.25vw)",
      "calc(1rem + 0.25vw)",
    ],
    // fontWeight: "500",
    // border: "1px solid primary",
    _hover: {},
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    // fancy link does the underline effect and changes color to primary
    fancyLink: {
      fontSize: [
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
      ],
      fontWeight: "500",
      position: "relative",
      transition: "all 0.2s ease-in-out",
      _hover: {
        textDecoration: "none",
        color: "primary",
        // letterSpacing: "0.2rem",
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

    smallText: {
      fontSize: [
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
      ],
      fontWeight: "500",
    },

    mediumText: {
      fontSize: [
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
      ],
      fontWeight: "500",
    },

    bigText: {
      fontSize: [
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
      ],
      fontWeight: "700",
    },

    largeText: {
      fontSize: [
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
        "calc(1rem + 0.25vw)",
      ],
      fontWeight: "700",
    },

    heroLink: {
      fontSize: [
        "calc(1.25rem + 0.25vw)",
        "calc(1.25rem + 0.25vw)",
        "calc(1.25rem + 0.25vw)",
        "calc(1.25rem + 0.25vw)",
      ],
      color: "primary",
      fontWeight: "700",
      _after: {
        content: '" "',
        display: "block",
        width: "0%",
        mt: "2px",
        height: "2px",
        backgroundColor: "primary",
        transition: "width 0.3s",
      },

      _hover: {
        textDecoration: "none",
        // color: "primary",
        _after: {
          width: "100%",
        },
      },
    },

    bigNavLink: {
      fontSize: [
        "calc(1.25rem + 0.25vw)",
        "calc(1.25rem + 0.25vw)",
        "calc(1.25rem + 0.25vw)",
        "calc(1.25rem + 0.25vw)",
      ],
      color: "white",
      fontWeight: "700",
      _after: {
        content: '" "',
        display: "block",
        width: "0%",
        mt: "2px",
        height: "2px",
        backgroundColor: "primary",
        transition: "width 0.3s",
      },

      _hover: {
        textDecoration: "none",
        // color: "primary",
        _after: {
          width: "100%",
        },
      },
    },

    sectionLink: {
      fontSize: [
        "calc(1.25rem + 0.25vw)",
        "calc(1.25rem + 0.25vw)",
        "calc(1.25rem + 0.25vw)",
        "calc(1.25rem + 0.25vw)",
      ],
      color: "primary",
      fontWeight: "500",
      ml: "1rem",

      _after: {
        content: '" "',
        display: "block",
        width: "0%",
        mt: "1px",
        height: "2px",
        backgroundColor: "primary",
        transition: "width 0.3s",
      },

      _hover: {
        textDecoration: "none",
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
