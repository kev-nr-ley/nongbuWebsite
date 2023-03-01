import React from "react";
import { Link, Flex, Box, Image } from "@chakra-ui/react";
import BigMenuItem from "@components/BigMenuItem";
import { useTheme } from "@chakra-ui/react";
import Logo from "@components/Logo";
import { FaBars, FaWindowClose } from "react-icons/fa";
import NavButton from "@sections/nav/NavButton";
import { CloseIcon } from "@chakra-ui/icons";

export default function MobileNav(props) {
  const { colors } = useTheme();
  const isMenuOpen = props.isMenuOpen;
  const setIsMenuOpen = props.setIsMenuOpen;

  const handleNavButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box
      w='100%'
      position='fixed'
      top='0'
      left='0'
      h='80px'
      zIndex='999999999999'
      bg={colors.backgroundDark50}
      p='2vw'>
      <Logo src='nongbu-logo.png' width='52' height='52' position='fixed' />

      {isMenuOpen ? (
        <Flex
          as='nav'
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
          gap='12'
          color='black'>
          <Box
            bg='transparent'
            onClick={handleNavButton}
            cursor='pointer'
            position='fixed'
            top='0'
            right='0'
            p='2vw'>
            <CloseIcon fontSize='32px' color={colors.light} />
          </Box>

          <Flex flexDirection='column' gap='12'>
            <BigMenuItem>Menu</BigMenuItem>
            <BigMenuItem>Reservations</BigMenuItem>
            <Logo src='ear-logo.png' width='52' height='26' />
          </Flex>

          <Flex flexDirection='column' gap='8'>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link>Events</Link>
            <Link>Order</Link>
          </Flex>
        </Flex>
      ) : (
        <NavButton handleNavButton={handleNavButton} />
      )}
    </Box>
  );
}
