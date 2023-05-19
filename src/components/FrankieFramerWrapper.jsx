import React from "react";
import { useRef, useState, useEffect } from "react";
import { motion, isValidMotionProp } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

import { useInView } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function FrankieFramerWrapper(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0 });

  return (
    <ChakraBox
      ref={ref}
      className="frankie-framer-wrapper"
      position="relative"
      display="flex"
      w="100%"
      h="100%"
      // border='2px solid limegreen'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      {...props}
    >
      {props.children}
    </ChakraBox>
  );
}
