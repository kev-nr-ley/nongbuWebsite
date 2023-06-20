import React, { lazy, Suspense } from "react";
import Home from "@pages/Home";
import Menu from "@pages/Menu";
import About from "@pages/About";
import Order from "@pages/Order";
import Contact from "@pages/Contact";
import Reservations from "@pages/Reservations";
import MenuEditor from "@pages/MenuEditor";
import Ear from "@pages/Ear";
import Events from "@pages/Events";

import { Route, Routes, useLocation } from "react-router-dom";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Events' element={<Events />} />
      <Route path='/Order' element={<Order />} />
      <Route path='/Menu' element={<Menu />} />
      <Route path='/Contact' element={<Contact />} />
      {/* <Route path='/MenuEditor' element={<MenuEditor />} /> */}
      {/* <Route path='/Reservations' element={<Reservations />} /> */}
      <Route path='/Ear' element={<Ear />} />
    </Routes>
  );
}
