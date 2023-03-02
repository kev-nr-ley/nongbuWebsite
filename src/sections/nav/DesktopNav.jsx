import React from "react";
import { Flex, Menu, Box, Link as ChakraLink } from "@chakra-ui/react";
import BigMenuItem from "@components/BigMenuItem";
import { useTheme } from "@chakra-ui/react";
import Logo from "@components/Logo";
import { Route, Routes, Link } from "react-router-dom";
export default function DesktopNav() {
  const { colors, fonts } = useTheme();

  return (
    <Flex
      className='desktop-nav'
      as='nav'
      bg={colors.backgroundDarker}
      color={colors.light}
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      px='4'
      w={["100vw"]}
      h='80px'
      position='fixed'
      top='0'
      left='0'
      zIndex='999'>
      <Flex
        display='flex'
        flexDirection='row'
        p='1'
        gap='4vw'
        justifyContent='space-between'
        alignItems='center'
        lineHeight={fonts.headingLineHeight}>
        <Link to='/'>
          <Logo
            src='nongbu-logo.webp'
            width='52'
            height='52'
            position='fixed'
          />
        </Link>
        <Menu>
          <ChakraLink as={Link} to='/About'>About</ChakraLink>
          <ChakraLink as={Link} to='/Contact'>Contact</ChakraLink>
          <ChakraLink as={Link} to='/Events'>Events</ChakraLink>
          <ChakraLink as={Link} to='/Order'>Order</ChakraLink>
        </Menu>
      </Flex>

      <Flex flexDirection={"row"} h='100%'>
        <Flex
          flexDirection='row'
          gap='5vw'
          mt='1'
          alignItems='center'
          justifyContent='center'>
          <Link to='/Menu'>
            <BigMenuItem>Menu</BigMenuItem>
          </Link>
          <Link to='/Reservations'>
            <BigMenuItem>Reservations</BigMenuItem>
          </Link>
          <Link to='/ears'>
            <Logo src='ear-logo.webp' width='52' height='26' />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
