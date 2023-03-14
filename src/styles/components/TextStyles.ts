import { ComponentStyleConfig } from "@chakra-ui/react";

export const TextStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    mt: "1rem",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5rem",
    letterSpacing: "0.1rem",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},

  // styles for different visual variants ("outline", "solid")
  variants: {
    bodyText: {
      lineHeight: "2rem",
      fontWeight: "500",
    },

    menuCaps: {
      fontWeight: "700",
      textTransform: "uppercase",
    },
    
    menuBody: {
    },

    mediumText: {
      fontSize: "1.25rem",
      fontWeight: "500",
    },

    bigText: {
      fontSize: "1.5rem",
      fontWeight: "700",
    },

    largeText: {
      fontSize: "2rem",
      fontWeight: "700",
    },


    menuItalic: {
      fontStyle: "italic",
    },
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "100px",
    variant: "",
    colorScheme: "",
  },
};
