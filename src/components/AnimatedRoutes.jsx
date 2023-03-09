import React, {lazy, Suspense} from "react";
import Home from "@pages/Home";
import Menu from "@pages/Menu";
import About from "@pages/About";
import Order from "@pages/Order";
import Contact from "@pages/Contact";
import Reservations from "@pages/Reservations";
import Events from "@pages/Events";

import { Route, Routes, useLocation } from "react-router-dom";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} w='100vw' maxW='100%' />
      <Route path='/About' element={<About />} w='100vw' maxW='100%' />
      <Route path='/Contact' element={<Contact />} w='100vw' maxW='100%' />
      <Route path='/Events' element={<Events />} w='100vw' maxW='100%' />
      <Route path='/Order' element={<Order />} w='100vw' maxW='100%' />
      <Route path='/Menu' element={<Menu />} w='100vw' maxW='100%' />
      <Route path='/Contact' element={<Contact />} w='100vw' maxW='100%' />
    </Routes>
  );
}
