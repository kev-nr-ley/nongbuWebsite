import { extendTheme } from "@chakra-ui/react";

import "@fontsource/mulish";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";
import "@fontsource/mulish/800.css";
export const theme = extendTheme({
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
        fontFamily: "Mulish, sans-serif",
        // border: "1px solid red"
      },

      body: {
        bg: "brand.backgroundLight",
        color: "brand.fontLight",
      },

      a: {
        color: "brand.highlight",
        _hover: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
  },

  colors: {
    brand: {
      header: "#051621",
      footer: "#051621",
      backgroundDark: "#12212b",
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
    /* Font: Mulish
      import "fontsource/mulish";
      fontWeights: [200,300,400,500,600,700,800,900]
      Styles: [italic,normal]
     */

    heading: {
      font: "Mulish, sans-serif",
      fontSize: "20px",
      fontSizeMd: "24px",
      fontSizeLg: "28px",
      fontSizeXl: "32px",
      fontSize2Xl: "48px",
      fontWeight: "600",
      letterSpacing: "3px",
      lineHeight: "30px",
    },

    body: {
      font: "Mulish, sans-serif",
      fontSize: "16px",
      fontSizeMd: "18px",
      fontSizeLg: "20px",
      fontSizeXl: "22px",
      fontWeight: "400",
      letterSpacing: "10%",
      lineHeight: "30px",
    },
  },
});
