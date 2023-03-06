import { ComponentStyleConfig } from "@chakra-ui/react";

export const InputStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    menuEdit: {
      border: "1px solid #000",
      borderRadius: "8",
      fontSize: "1rem",

      _hover: {
        bg: "#ddd",
        border: "1px solid #000",
        borderRadius: "0",
      },
      _placeholder: {
        fontWeight: "600",
        opacity: 0.75,
      },
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    // size: '',
    // variant: '',
    // colorScheme: '',
  },
};
