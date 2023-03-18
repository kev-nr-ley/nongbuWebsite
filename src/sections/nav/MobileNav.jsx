import React from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CloseIcon } from "@chakra-ui/icons";
import { useTheme } from "@chakra-ui/react";

import {
  InstagramLink,
  FacebookLink,
  NongbuLogoLink,
  EarLogoLink,
} from "@components/LogoLinks";
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
      pt='1rem'
      color={colors.light}
      bg={isMenuOpen ? "gray.700" : colors.backgroundDark50}
      w={isMenuOpen ? "70vw" : "0"}
      h={isMenuOpen ? "100vh" : "80px"}
      {...props}>
      <Box //menu icon container
        position='absolute'
        top='1rem'
        right='1rem'
        // px='2vw'
        // py='2vw'
        zIndex='999999999'>
        <NongbuLogoLink
          position={["fixed"]}
          top='1rem'
          left='1rem'
          zIndex='999999999'
          iconsize={["2.5rem", "2.5rem", "4rem"]}
        />

        <IconButton
          fontSize='2.5rem'
          icon={
            isMenuOpen ? (
              <CloseIcon fontSize={["1.25rem", "1.5rem", "2rem"]} />
            ) : (
              <FaBars fontSize='2.5rem' />
            )
          }
          bg='transparent'
          _hover={{
            bg: "transparent",
            color: "primary",
          }}
          onClick={handleLink}
        />
      </Box>

      <Flex
        display={isMenuOpen ? "flex" : "none"}
        flexDirection='column'
        gap={["2", "4", "6"]}
        // bg='red'
        alignItems='flex-start'
        justifyContent='space-evenly'
        px='5vw'>
        {/* <NongbuLogoLink
          position={["static"]}
          zIndex='999999999'
          onClick={handleLink}
        /> */}

        <Flex flexDirection='column' gap='4'>
          <ChakraLink
            variant='bigNavLink'
            to='/Menu'
            name='Menu'
            fontSize={["1.5rem", "2rem", "3rem"]}
            onClick={handleLink}
          />
          <ChakraLink
            variant='bigNavLink'
            to='/contact'
            name='Reservations'
            fontSize={["1.6rem", "2rem", "3rem"]}
            onClick={handleLink}
          />
          <ChakraLink
            name='Home'
            to='/'
            fontSize={["1.5rem", "1.5rem", "2.5rem"]}
            onClick={handleLink}
          />
          <ChakraLink
            to='/About'
            fontSize={["1.5rem", "1.5rem", "2.5rem"]}
            name='About'
            onClick={handleLink}
          />
          <ChakraLink
            to='/Events'
            fontSize={["1.5rem", "1.5rem", "2.5rem"]}
            name='Events'
            onClick={handleLink}
          />
          <ChakraLink
            to='/Order'
            fontSize={["1.5rem", "1.5rem", "2.5rem"]}
            name='Order'
            onClick={handleLink}
          />
          <ChakraLink
            to='/Contact'
            fontSize={["1.5rem", "1.5rem", "2.5rem"]}
            name='Contact'
            onClick={handleLink}
          />
        </Flex>
        <Flex gap='4' alignItems='center'>
          <FacebookLink fontSize='2.5rem' />
          <InstagramLink fontSize='2.5rem' />
          <EarLogoLink fontSize='3rem' />
        </Flex>
      </Flex>
    </Flex>
  );
}
