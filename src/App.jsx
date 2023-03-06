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
import { Route, Routes, Link } from "react-router-dom";

function App() {
  function objectToArray(object) {
    return Object.keys(object).map((key) => {
      return object[key];
    });
  }

  const { colors, fonts } = useTheme();

  return (
    <Box bg={colors.backgroundDark}>
      <Navbar w="100vw" maxW='100%' mb='300px' />

      <Routes>
        <Route path='/' element={<Home />} w='100vw' maxW='100%' />
        <Route path='/About' element={<About />} w='100vw' maxW='100%' />
        <Route path='/Contact' element={<Contact />} w='100vw' maxW='100%' />
        <Route path='/Events' element={<Events />} w='100vw' maxW='100%' />
        <Route path='/Order' element={<Order />} w='100vw' maxW='100%' />
        <Route path='/Menu' element={<Menu />} w='100vw' maxW='100%' />
        <Route path='/Contact' element={<Contact />} w='100vw' maxW='100%' />
      </Routes>

      <Footer w='100vw' maxW='100%' />
    </Box>
  );
}

export default App;
