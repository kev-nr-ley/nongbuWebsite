import React from "react";
import { useState, useEffect } from "react";
import MobileNav from "@sections/nav/MobileNav";
import DesktopNav from "@sections/nav/DesktopNav";
import { Route, Routes, Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTheme } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import SocialLink from "@components/SocialLink";
import EarLogoLink from "@components/EarLogoLink";
import NongbuLogoLink from "@components/NongbuLogoLink";

export default function Navbar(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { colors } = useTheme();

  const navLinks = [
    {
      name: "About",
      path: "/About",
    },
    {
      name: "Contact",
      path: "/Contact",
    },
    {
      name: "Events",
      path: "/Events",
    },
    {
      name: "Order",
      path: "/Order",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      path: "https://www.facebook.com/NongBuKorean",
      icon: <FaFacebook />,
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com/nongbukorean/",
      icon: <FaInstagram />,
    },
  ];

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
  }, []);

  const handleLink = () => {
    setIsMenuOpen(false);
  };

  const renderNavLinks = (links) => {
    return links.map((link) => (
      <ChakraLink
        key={link.name}
        name={link.name}
        to={link.path}
        onClick={handleLink}
      />
    ));
  };

  const renderSocialLinks = (links) => {
    return links.map((link) => (
      <SocialLink
        key={link.name}
        name={link.name}
        path={link.path}
        icon={link.icon}
        size='32px'
      />
    ));
  };

  return (
    <>
      {isMobile ? (
        <MobileNav
          className='desktop-nav'
          as='nav'
          w='100vw'
          maxW='100%'
          position='fixed'
          top='0'
          left='0'
          h='80px'
          zIndex='999'
          bg={colors.backgroundDark50}
          color={colors.light}
          px='5vw'
          py='2vw'
          EarLogoLink={<EarLogoLink />}
          NongbuLogoLink={<NongbuLogoLink />}
          handleLink={handleLink}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          navLinks={navLinks}
          socialLinks={socialLinks}
          renderNavLinks={renderNavLinks}
          renderSocialLinks={renderSocialLinks}
        />
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
          position='fixed'
          top='0'
          zIndex='11'
          EarLogoLink={<EarLogoLink />}
          navLinks={navLinks}
          socialLinks={socialLinks}
          renderNavLinks={renderNavLinks}
          renderSocialLinks={renderSocialLinks}
        />
      )}
    </>
  );
}
