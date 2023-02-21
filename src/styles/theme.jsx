import { extendTheme } from "@chakra-ui/react";
import { HeaderStyles as Header } from "./components/HeaderStyles";
import "@fontsource/mulish";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";
import "@fontsource/mulish/800.css";

export const theme = extendTheme({
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        color: "inherit",
        fontFamily: "Mulish, sans-serif",
        boxSizing: "border-box",
        // border: "1px solid red"
      },


      body: {
        bg: "brand.backgroundLight",
        color: "brand.fontLight",
      },

      'h1, h2, h3, h4, h5, h6': {
            letterSpacing: '3px',
            fontWeight: '600',
            lineHeight: '1.2',

        
      },
      a: {
        color: "brand.highlight",
        border: "4px solid orange",
        _hover: {
          textDecoration: "none",
          color: "inherit",
        },
      },

      Text: {
        color: "black",
        bg: "red",
        backgroundColor: "red",
        fontSize: "16px",
      },

      img: {
        h: "100%",
        w: "100%",
        objectFit: "cover",
        objectPosition: "center",
      },
    },
  },

  colors: {
    brand: {
      header: "#051621",
      footer: "#051621",
      backgroundDark: "#12212b",
      backgroundDark50: "#12212b50",
      backgroundLight: "#d9d9d9",
      fontHeader: "#f5f5f5",
      fontLight: "#f5f5f5",
      fontDark: "#242a29",
      highlight: "#de5b2c",
    },

    light: {
      background: "#d9d9d9",
      fontColor: "#242a29",
      highlight: "#de5b2c",
    },

    dark: {
      background: "#12212b",
      fontColor: "#f5f5f5",
      highlight: "#de5b2c",
    },
  },

  fonts: {
    body: "Mulish, sans-serif",
    bodySize: "16px",
    bodySizeMd: "18px",
    bodySizeLg: "20px",
    bodySizeXl: "22px",
    bodySize2Xl: "24px",
    bodyWeight: "500",
    bodyLineHeight: "30px",
    bodyLetterSpacing: "1.25px",

    heading: "Mulish, sans-serif",
    headingSize: "20px",
    headingWeight: "600",
    headingLineHeight: "30px",
    headingLetterSpacing: "30px",
    headingSizeMd: "24px",
    headingSizeLg: "28px",
    headingSizeXl: "32px",
    headingSize2Xl: "48px",

    iconSize: "24px",
    iconSizeMd: "32px",
    iconSizeLg: "48px",
    iconSizeXl: "64px",
    iconSize2Xl: "96px",
    
  },

  components: {
    Header,
  },

  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
