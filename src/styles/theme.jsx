import { extendTheme } from "@chakra-ui/react";
// import { ButtonStyles as Button } from "./components/ButtonStyles";
import { LinkStyles as Link } from "./components/LinkStyles";
import { TextStyles as Text } from "./components/TextStyles";
import { HeadingStyles as Heading } from "./components/HeadingStyles";
// import Button from "./Button";
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
        border: "1px solid red"
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
    primary: "#de5b2c",
    secondary: "#051621",
    dark: "#12212b",
    light: "#d9d9d9",
    white: "#f5f5f5",
    black: "#242a29",
    backgroundDark: "#12212b",
    backgroundDark50: "#12212b50",
    backgroundLight: "#d9d9d9",

    brand: {
      header: "#051621",
      footer: "#051621",

      fontHeader: "#f5f5f5",
      fontLight: "#f5f5f5",
      fontDark: "#242a29",
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
    headingSize: "24px",
    headingSizeMd: "32px",
    headingSizeLg: "48px",
    headingSizeXl: "64px",
    headingWeight: "600",
    headingLineHeight: "30px",
    headingLetterSpacing: "2.5px",
    iconSize: "24px",
    iconSizeMd: "32px",
    iconSizeLg: "48px",
    iconSizeXl: "64px",
    iconSize2Xl: "96px",
  },

  components: {
    Link,
    Text,
    Heading,
  },

  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
