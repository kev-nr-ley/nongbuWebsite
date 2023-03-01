import React from "react";
import { useState, useEffect } from "react";

import { useTheme } from "@chakra-ui/react";
import MobileNav from "@sections/nav/MobileNav";
import DesktopNav from "@sections/nav/DesktopNav";

export default function Navbar(props) {
  const isMobile = props.isMobile;

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <>
      {isMobile ? (
        <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      ) : (
        <DesktopNav />
      )}
    </>
  );
}
