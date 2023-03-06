import { ComponentStyleConfig } from "@chakra-ui/react";

export const HeadingStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    // letterSpacing: "20px",
    fontSize: "1.25em",
    fontWeight: "500",

  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    sectionHeading: {
      fontSize: "1.25em",
      fontWeight: "700",
    },

    footerHeading: {
      fontSize: "1.25em",
      fontWeight: "500",
    },

    menuSection:{
      fontSize: "1.5em",
      fontWeight: "700",
    },

    
    
    smallHeading:{
      fontSize: "1.25em",
      fontWeight: "700",
    },


    mediumHeading:{
      fontSize: "1.5em",
      fontWeight: "700",
    },

    largeHeading:{
      fontSize: "2em",
      fontWeight: "700",
    },


  },


  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
