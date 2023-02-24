import { ComponentStyleConfig } from "@chakra-ui/react";

export const TextStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
  
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    bodyText: {
        letterSpacing: '1.25px',
        fontSize:'16px',
        lineHeight:'30px',
        fontWeight:'500',
    },
   
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: '100px',
    variant: '',
    colorScheme: '',
  },
};
