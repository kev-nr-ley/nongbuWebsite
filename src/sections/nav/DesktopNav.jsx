import React from "react";
import { Flex } from "@chakra-ui/react";
import EarLogoLink from "@components/EarLogoLink";
import NongbuLogoLink from "@components/NongbuLogoLink";
import ChakraLink from "@components/ChakraLink";

export default function DesktopNav(props) {
  return (
    <Flex {...props}>
      <NongbuLogoLink w='14' />
      <Flex gap='12' px='8'>
        <ChakraLink name='About' to='/About' />
        <ChakraLink name='Contact' to='/Contact' />
        <ChakraLink name='Events' to='/Events' />
        <ChakraLink name='Order' to='/Order' />
      </Flex>
      <Flex
        gap='12'
        w='100%'
        m='4'
        alignItems={"center"}
        justifyContent={"right"}>
        <ChakraLink variant='bigNavLink' to='/Menu' name='Menu' />
        <ChakraLink variant='bigNavLink' to='/contact' name='Reservations' />
      </Flex>
      <EarLogoLink />
    </Flex>
  );
}
