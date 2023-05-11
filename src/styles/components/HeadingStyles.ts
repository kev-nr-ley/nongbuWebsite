import { ComponentStyleConfig } from "@chakra-ui/react";

export const HeadingStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    // letterSpacing: "20px",
    fontSize: [
      "calc(1.25rem + 0.5vw)",
      "calc(1.25rem + 0.5vw)",
      "calc(1.25rem + 0.5vw)",
      "calc(1.25rem + 0.5vw)",
    ],
    fontWeight: "500",

    // border:'1px solid yellow',
    // px:'1rem',
    // bg:'#ffff0030'
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    smallHeading: {
      fontWeight: "700",
    },

    mediumHeading: {
      fontSize: [
        "calc(1.5rem + 0.5vw)",
        "calc(1.5rem + 0.5vw)",
        "calc(1.5rem + 0.5vw)",
        "calc(1.5rem + 0.5vw)",
      ],
      fontWeight: "700",
    },


    medLargeHeading: {
      fontSize: [
        "calc(1.75rem + 0.5vw)",
        "calc(1.75rem + 0.5vw)",
        "calc(1.75rem + 0.5vw)",
        "calc(1.75rem + 0.5vw)",
      ],
      fontWeight: "700",
    },


    // make heading size smaller on mobile
    largeHeading: {
      fontSize: [
        "calc(2rem + 0.5vw)",
        "calc(2rem + 0.5vw)",
        "calc(2rem + 0.5vw)",
        "calc(2rem + 0.5vw)",
      ],
      fontWeight: "700",
    },

    heroHeading: {
      fontSize: [
        "calc(2.25rem + 0.5vw)",
        "calc(2.25rem + 0.5vw)",
        "calc(2.25rem + 0.5vw)",
        "calc(2.25rem + 0.5vw)",
      ],
      fontWeight: "700",
      letterSpacing: "0.225rem",
    },
    
    sectionHeading: {
      fontWeight: "700",
    },

    footerHeading: {},

    menuSection: {
      fontWeight: "700",
      px:'0px',
    },

    menuHeading: {
      fontWeight: "500",
      px:'0px',
    },

  
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
