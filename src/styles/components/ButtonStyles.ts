import { ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {

    fancyLink:{
      bg: "blue",
      color: "white",
      letterSpacing: "0.2em",
      fontSize: "1.2rem",
      w:'auto',
      
      _hover: {
        color: "primary",
        _after:{
          width:'100%',
        }
      },
      _active: {
        color: "primary",
      },
      _after:{
        content:'""',
        display:'block',
        width:'0',
        position:'absolute',
        bottom:'-10px',
        height:'2px',
        background:'primary',
        transition:'width 0.3s',
      },
    },
    
      fancyNav:{
 
    
      },

    heroLink: {
      bg: "transparent",
      color: "primary",
      letterSpacing: "0.2em",
      fontSize: "1.2rem",
      w:'100%',
      
      _hover: {
        color: "white",
      },
      _active: {
        color: "white",
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
