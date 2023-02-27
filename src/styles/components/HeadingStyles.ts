import { ComponentStyleConfig } from "@chakra-ui/react";

export const HeadingStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    sectionHeading: {
        letterSpacing: '3px',
        fontSize:'20px',
        lineHeight:'30px',
        fontWeight:'700',
    },

    footerHeading:{
        letterSpacing: '2px',
        fontSize:'20px',
        lineHeight: '30px',
        fontWeight: '500',
        mb: '8'
        
    }
   
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: '100px',
    variant: '',
    colorScheme: '',
  },
};
