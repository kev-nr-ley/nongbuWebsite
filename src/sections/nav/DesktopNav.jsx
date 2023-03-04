import React from "react";
import { Flex } from "@chakra-ui/react";
import EarLogoLink from "@components/EarLogoLink";
import NongbuLogoLink from "@components/NongbuLogoLink";
import BigNavLink from "../../components/BigNavLink";

export default function DesktopNav(props) {
  return (
    <Flex {...props}>
      <NongbuLogoLink />
      <BigNavLink to='/Menu' name='Menu' />
      <BigNavLink to='/Reservations' name='Reservations' />
      <Flex flexDirection='row' gap='8'>
        {props.renderNavLinks(props.navLinks)}
        {props.renderSocialLinks(props.socialLinks)}
        <EarLogoLink />
      </Flex>
    </Flex>
  );
}
