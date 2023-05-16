import { ComponentStyleConfig } from "@chakra-ui/react";

export const TextStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontSize: [
      "calc(1rem + 0.25vw)",
      "calc(1rem + 0.25vw)",
      "calc(1rem + 0.25vw)",
      "calc(1rem + 0.25vw)",
    ],
    fontWeight: "400",
    lineHeight: "150%",
    letterSpacing: "0.1rem",
    // border:'1px solid limegreen',
    // bg:'#00ff0030'
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},

  // styles for different visual variants ("outline", "solid")
  variants: {
    bodyText: {
      lineHeight: "1.5rem",
      fontWeight: "400",
      px: "1rem",
      my: "1rem",
    },

    menuFood: {
      className: "menu-food",
      fontWeight: "700",
      textTransform: "uppercase",
    },

    menuBody: {
      className: "menu-body",
    },

    menuDrink: {
      fontSize: "calc(1rem + 0.5vw)",
      fontWeight: "700",
      letterSpacing: "0.125rem",
    },

    smallText: {
      fontSize: "calc(1rem + 0.5vw)",
      fontWeight: "500",
      letterSpacing: "0.125rem",
    },

    mediumText: {
      fontSize: [
        "calc(1.25rem + 0.25vw)",
        "calc(1.25rem + 0.25vw)",
        "calc(1.25rem + 0.25vw)",
        "calc(1.25rem + 0.25vw)",
      ],

      fontWeight: "500",
      // px: "1rem",
      letterSpacing: "0.15rem",
    },

    bigText: {
      fontSize: [
        "calc(1.25rem + 0.5vw)",
        "calc(1.25rem + 0.5vw)",
        "calc(1.25rem + 0.5vw)",
        "calc(1.25rem + 0.5vw)",
      ],
      fontWeight: "700",
      px: "1rem",
    },

    largeText: {
      fontSize: [
        "calc(1.5rem + 0.5vw)",
        "calc(1.5rem + 0.5vw)",
        "calc(1.5rem + 0.5vw)",
        "calc(1.5rem + 0.5vw)",
      ],
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
