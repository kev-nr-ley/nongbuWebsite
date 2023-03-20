import React from "react";
import { Flex } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import EarLogoLink from "@components/links/EarLogoLink.jsx";
import NongbuLogoLink from "@components/links/NongbuLogoLink.jsx";
// import {
//   InstagramLink,
//   FacebookLink,
//   NongbuLogoLink,
//   EarLogoLink,
// } from "@components/LogoLinks";
export default function DesktopNav(props) {
  return (
    <Flex {...props}>
      <NongbuLogoLink iconsize='3rem' />
      <Flex gap='8' px='8'>
        <ChakraLink name='Home' to='/' />
        <ChakraLink name='About' to='/About' />
        <ChakraLink name='Events' to='/Events' />
        <ChakraLink name='Order' to='/Order' />
        <ChakraLink name='Contact' to='/Contact' />
        
      </Flex>
      <Flex
        gap='12'
        w='100%'
        mx='4'
        alignItems={"center"}
        justifyContent={"right"}>
        <ChakraLink variant='bigNavLink' to='/Menu' name='Menu' />
        <ChakraLink variant='bigNavLink' to='/contact' name='Reservations' />
      </Flex>
      <EarLogoLink px='8' />
      <ChakraLink variant='bigNavLink' to='/ear' name='Ear' />
    </Flex>
  );
}
