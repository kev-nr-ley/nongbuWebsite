import React from "react";
import { useState, useEffect } from "react";
import MobileNav from "@sections/nav/MobileNav";
import DesktopNav from "@sections/nav/DesktopNav";
import { useTheme } from "@chakra-ui/react";
import {NongbuLogoLink} from "@components/LogoLinks";
export default function Navbar(props) {
  const [isMobile, setIsMobile] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1079) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileNav />
      ) : (
        <DesktopNav
          className='desktop-nav'
          as='nav'
          bg={colors.backgroundDarker}
          color={colors.light}
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          px='4'
          w={["100vw"]}
          maxW='100%'
          h='80px'
          position='sticky'
          top='0'
          zIndex='11'
        />
      )}
    </>
  );
}
