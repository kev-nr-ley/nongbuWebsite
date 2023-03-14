import { ComponentStyleConfig } from "@chakra-ui/react";

export const HeadingStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    // letterSpacing: "20px",
    fontSize: "1.25rem",
    fontWeight: "500",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    smallHeading: {
      fontSize: "1.25rem",
      fontWeight: "700",
    },

    mediumHeading: {
      fontSize: "1.5rem",
      fontWeight: "700",
    },

    largeHeading: {
      fontSize: "2em",
      fontWeight: "700",
      letterSpacing: "0.15rem",
    },

    sectionHeading: {
      fontWeight: "700",
    },

    footerHeading: {},

    menuSection: {
      fontWeight: "700",
    },

    heroHeading: {
      fontSize: "2.25rem",
      fontWeight: "700",
      letterSpacing: "0.225rem",
    },
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
