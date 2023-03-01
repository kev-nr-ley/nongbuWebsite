import React from "react";
import { useState, useEffect } from "react";
import MobileNav from "@sections/nav/MobileNav";
import DesktopNav from "@sections/nav/DesktopNav";

export default function Navbar(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [windowResize, setWindowResize] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowResize]);
  




  return isMobile ? <MobileNav /> : <DesktopNav />;
}
