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
    <Box p='0.01px' bg={colors.backgroundDark}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/Menu' element={<Menu objectToArray={objectToArray} />} />
        <Route path='/Reservations' element={<Reservations />} />
      </Routes>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Events /> */}
      {/* <Order /> */}
      {/* <Menu objectToArray={objectToArray} /> */}
      {/* <Reservations /> */}
      <Footer />
    </Box>
  );
}

export default App;
