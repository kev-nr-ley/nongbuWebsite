import React from "react";
import { useState, useEffect } from "react";
import MobileNav from "@sections/nav/MobileNav";
import DesktopNav from "@sections/nav/DesktopNav";
import { Route, Routes, Link } from "react-router-dom";
export default function Navbar(props) {
  const [isMobile, setIsMobile] = useState(false);
  // const [windowResize, setWindowResize] = useState(false);


  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 960) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  } , []);

  return (
    <>
    
      {isMobile ? (
        <MobileNav {...props} />
      ) : (
        <DesktopNav {...props} />
      )}
    </>
  );
}
