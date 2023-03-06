import React from "react";
import { Flex } from "@chakra-ui/react";
import NavButton from "@sections/nav/NavButton";
import BigNavLink from "../../components/BigNavLink";
import EarLogoLink from "@components/EarLogoLink";
import ChakraLink from "@components/ChakraLink";
import SocialLink from "@components/SocialLink";
import NongbuLogoLink from "@components/NongbuLogoLink";
import { useState } from "react";

export default function MobileNav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLink = () => {
    setIsMenuOpen(false);
  };

  const handleNavButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
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

  function NavLinks(props) {
    return props.links.map((link) => (
      <ChakraLink
        key={link.name}
        name={link.name}
        to={link.path}
        onClick={handleLink}
      />
    ));
  }

  function SocialLinks(props) {
    return props.links.map((link) => (
      <SocialLink
        key={link.name}
        name={link.name}
        path={link.path}
        icon={link.icon}
        size='32px'
      />
    ));
  }

  return (
    <Flex {...props}>
      {isMenuOpen ? (
        <Flex
          flexDirection='column'
          className='mobile-nav'
          position='fixed'
          top='0'
          right='0'
          minW='200px'
          w='70vw'
          h='100vh'
          gap='8'
          bg='gray.700'
          alignItems='left'
          justifyContent={"center"}
          px='5vw'
          py='2vw'>
          <NavButton
            bg='transparent'
            cursor='pointer'
            position='fixed'
            top='0'
            right='0'
            p='2vw'
            onClick={handleNavButtonClick}
            isMenuOpen={isMenuOpen}
          />

          <BigNavLink to='/Menu' name='Menu' onClick={handleLink} />
          <BigNavLink
            to='/Reservations'
            name='Reservations'
            onClick={handleLink}
          />
          {/* <NongbuLogoLink />
          <EarLogoLink /> */}
          <NavLinks links={props.navLinks} />
          <SocialLinks links={props.socialLinks} />
        </Flex>
      ) : (
        <NavButton
          position='fixed'
          top='0'
          right='0'
          p='1vw'
          onClick={handleNavButtonClick}
          isMenuOpen={isMenuOpen}
        />
      )}

      <NongbuLogoLink />
    </Flex>
  );
}
