import React from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import EarLogoLink from "@components/EarLogoLink";
import ChakraLink from "@components/ChakraLink";
import NongbuLogoLink from "@components/NongbuLogoLink";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CloseIcon } from "@chakra-ui/icons";
import { useTheme } from "@chakra-ui/react";
export default function MobileNav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { colors } = useTheme();
  const handleLink = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      className='mobile-nav'
      position='fixed'
      top='0'
      right='0'
      zIndex='99999999999'
      alignItems='center'
      color={colors.light}
      bg={isMenuOpen ? "gray.700" : colors.backgroundDark50}
      w={isMenuOpen ? "70vw" : "100vw"}
      h={isMenuOpen ? "100vh" : "80px"}
      {...props}>
      <Box //menu icon container
        position='absolute'
        top='0'
        right='0'
        px='2vw'
        py='2vw'
        zIndex='999999999'>
        <IconButton
          icon={isMenuOpen ? <CloseIcon /> : <FaBars />}
          bg='transparent'
          _hover={{
            bg: "transparent",
            color: "primary",
          }}
          onClick={handleLink}
          fontSize='48px'
        />
      </Box>

      <Flex
        display={isMenuOpen ? "flex" : "none"}
        flexDirection='column'
        justifyContent='center'
        gap='8'
        px='5vw'>
        <NongbuLogoLink position={["static"]} zIndex='999999999' />

        <ChakraLink
          variant='heroLink'
          to='/Menu'
          name='Menu'
          onClick={handleLink}
        />
        <ChakraLink
          variant='heroLink'
          to='/Reservations'
          name='Reservations'
          onClick={handleLink}
        />

        <EarLogoLink />
        <Flex flexDirection='column' gap='4'>
          <ChakraLink name='Home' to='/' />

          <ChakraLink to='/About' name='About' onClick={handleLink} />
          <ChakraLink to='/Contact' name='Contact' onClick={handleLink} />
          <ChakraLink to='/Events' name='Events' onClick={handleLink} />
          <ChakraLink to='/Order' name='Order' onClick={handleLink} />
        </Flex>

        <Flex gap='4'>
          <Link>
            <FaFacebook />
          </Link>

          <Link to=''>
            <FaInstagram />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
