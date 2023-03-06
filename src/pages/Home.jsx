import React from "react";
import Hero from "@sections/home/Hero";
import About from "@sections/home/About";
import Events from "@sections/home/Events";
import Takeout from "@sections/home/Takeout";
import { Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
function Home(props) {
  const { colors } = useTheme();
  return (
    <Box bg={colors.backgroundDark} {...props}>
      <Hero />
      <About />
      <Events />
      <Takeout />
    </Box>
  );
}

export default Home;
