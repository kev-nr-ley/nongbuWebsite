import Navbar from "@sections/Navbar";
import Home from "@pages/Home";
import Menu from "@pages/Menu";
import About from "@pages/About";
import Order from "@pages/Order";
import Contact from "@pages/Contact";
import Reservations from "@pages/Reservations";
import Footer from "@sections/Footer";
import Events from "@pages/Events";
import { Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function App() {
  function objectToArray(object) {
    return Object.keys(object).map((key) => {
      return object[key];
    });
  }

  const { colors, fonts } = useTheme();

  return (
    <Box bg={colors.backgroundDark}>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Events />
      <Order />
      <Menu objectToArray={objectToArray} />
      <Reservations />
      <Footer />
    </Box>
  );
}

export default App;
