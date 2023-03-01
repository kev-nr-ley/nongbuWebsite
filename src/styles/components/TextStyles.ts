import { ComponentStyleConfig } from "@chakra-ui/react";

export const TextStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    bodyText: {
      letterSpacing: "1.25px",
      fontSize: "16px",
      lineHeight: "30px",
      fontWeight: "500",
    },

    menuCaps: {
      letterSpacing: "1.25px",
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: "700",
      textTransform: "uppercase",
    },
    menuBody: {
      letterSpacing: "1.25px",
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: "400",
    },
    bigText: {
      letterSpacing: "2px",
      fontSize: "20px",
      lineHeight: "30px",
      fontWeight: "700",
    },

    menuItalic: {
      letterSpacing: "1.25px",
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: "400",
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
