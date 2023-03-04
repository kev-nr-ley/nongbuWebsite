import React from "react";
import { Flex } from "@chakra-ui/react";
import NavButton from "@sections/nav/NavButton";
import BigNavLink from "../../components/BigNavLink";
import EarLogoLink from "@components/EarLogoLink";
import NongbuLogoLink from "@components/NongbuLogoLink";

export default function MobileNav(props) {
  const isMenuOpen = props.isMenuOpen;
  const setIsMenuOpen = props.setIsMenuOpen;
  const handleLink = props.handleLink;

  const handleNavButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <NongbuLogoLink />
          <EarLogoLink />
          {props.renderNavLinks(props.navLinks)}
          {props.renderSocialLinks(props.socialLinks)}
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
