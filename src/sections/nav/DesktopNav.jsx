import React from "react";
import { Flex } from "@chakra-ui/react";
import EarLogoLink from "@components/EarLogoLink";
import NongbuLogoLink from "@components/NongbuLogoLink";
import ChakraLink from "@components/ChakraLink";
import SocialLink from "@components/SocialLink";
import BigNavLink from "../../components/BigNavLink";

function NavLinks(props) {
  return props.links.map((link) => (
    <ChakraLink key={link.name} name={link.name} to={link.path} />
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

export default function DesktopNav(props) {
  return (
    <Flex {...props}>
      <NongbuLogoLink />
      <BigNavLink to='/Menu' name='Menu' />
      <BigNavLink to='/Reservations' name='Reservations' />
      <Flex flexDirection='row' gap='8'>
        <NavLinks links={props.navLinks} />
        <SocialLinks links={props.socialLinks} />
        <EarLogoLink />
      </Flex>
    </Flex>
  );
}
