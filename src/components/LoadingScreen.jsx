import React from "react";
import {
  motion,
  AnimatePresence,
  isValidMotionProp,
  useReducedMotion,
} from "framer-motion";
import {
  Box,
  Image,
  Container,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function LoadingScreen() {
    const { colors, fonts } = useTheme();
  return (
    <Box
    bg='dark'
      w='100vw'
      h='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'>
      <ChakraBox
  animate={{ y: 100 }}
  transition={{ type: "spring", stiffness: 1000 }}
        
        >
        <Image
          w='20vw'
          h='auto'
          src='/images/nongbu-loading-logo.png'
          alt='loading'
        />
      </ChakraBox>
    </Box>
  );
}
