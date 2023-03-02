import React from "react";
import { Flex, Box, Text, Image, Link as ChakraLink } from "@chakra-ui/react";
import BigMenuItem from "@components/BigMenuItem";
import { useTheme } from "@chakra-ui/react";
import Logo from "@components/Logo";
import NavButton from "@sections/nav/NavButton";
import { useState, useEffect, useRef } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
export default function MobileNav(props) {
  const { colors, fonts } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLink = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box
      w='100vw'
      maxW='100%'
      position='fixed'
      top='0'
      left='0'
      h='80px'
      zIndex='999'
      bg={colors.backgroundDark50}
      color={colors.light}
      p='2vw'
      {...props}>
      {isMenuOpen ? (
        <Flex
          as='nav'
          className='mobile-nav'
          color={colors.light}
          flexDirection='column'
          w='70vw'
          minW='200px'
          h='100vh'
          position='fixed'
          top='0'
          right='0'
          zIndex='10'
          bg='gray.700'
          alignItems='left'
          justifyContent={"center"}
          px='5vw'
          py='2vw'
          gap='12'>
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

          <Flex flexDirection='column' gap='12'>
            <Link to='/Menu' onClick={handleLink}>
              <BigMenuItem>Menu</BigMenuItem>
            </Link>
            <Link onClick={handleLink} to='/Reservations'>
              <BigMenuItem>Reservations</BigMenuItem>
            </Link>
            <ChakraLink
              as={Link}
              onClick={handleLink}
              to='https://www.instagram.com/ear_yeg'
              target='_blank'>
              <Text
                fontFamily={fonts.ear}
                fontSize='52px'
                fontWeight={"200"}
                >
                ear
              </Text>
            </ChakraLink>
          </Flex>
          <Flex flexDirection='column' gap='8'>
            <ChakraLink as={Link} onClick={handleLink} to='/'>
              Home
            </ChakraLink>
            <ChakraLink as={Link} onClick={handleLink} to='/About'>
              About
            </ChakraLink>
            <ChakraLink as={Link} onClick={handleLink} to='/Contact'>
              Contact
            </ChakraLink>
            <ChakraLink as={Link} onClick={handleLink} to='/Events'>
              Events
            </ChakraLink>
            <ChakraLink as={Link} onClick={handleLink} to='/Order'>
              Order
            </ChakraLink>
          </Flex>
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

      <Link to='/'>
        <Logo src='nongbu-logo.png' width='52' height='52' />
      </Link>
    </Box>
  );
}
