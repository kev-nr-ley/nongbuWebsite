import { ComponentStyleConfig } from "@chakra-ui/react";

export const TextStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
letterSpacing: "0.1em",

  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    bodyText: {
      fontSize: "1em",
      lineHeight: "30px",
      fontWeight: "500",
    },

    menuCaps: {
      fontSize: "1em",
      fontWeight: "700",
      textTransform: "uppercase",
    },
    menuBody: {
      letterSpacing: "1.25px",
      fontSize: "1em",
    },

    mediumText:{
      fontSize: "1.25em",
      fontWeight: "500",
    },
    bigText: {
      fontSize: "1.5em",
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
