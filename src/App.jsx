import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./sections/Navbar";
import Home from "./pages/Home";
import Footer from "./sections/Footer";
function App() {
  return (
    <>
      <Navbar  />
      <Home />
      <Footer  />
    </>
  );
}

export default App;
