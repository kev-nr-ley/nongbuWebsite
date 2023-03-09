import React from "react";
import Magazine from "@sections/about/Magazine";
import AboutUs from "@sections/about/AboutUs";
import Hero from "@sections/about/Hero";
import { Box } from "@chakra-ui/react";
import ScrollToTop from "@components/ScrollToTop";

export default function About(props) {
  return (
    <Box {...props}>
      <Hero />
      <AboutUs />
      <Magazine />  
      <ScrollToTop />  
    </Box>
  );
}
