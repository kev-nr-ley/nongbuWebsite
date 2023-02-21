import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Link,
  Flex,
  Button,
  Menu,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import BigMenuItem from "../components/BigMenuItem";
import { useTheme } from "@chakra-ui/react";
import Logo from "../components/Logo";

export default function Navbar() {
  const { colors, fonts } = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();


  const MenuItem = ({ props, children }) => (
    <Link
      mx='2'
      letterSpacing={fonts.heading.letterSpacing}
      fontWeight={fonts.heading.fontWeight}>
      {children}
    </Link>
  );

  return (
    <Flex
      as='nav'
      bg='brand.header'
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"1rem"}
      w='100vw'
      h='80px'
      position='fixed'
      top='0'
      zIndex='999'>
      <Flex //logo and major links
        // colorScheme='brand'
        p='1'
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap='4'
        lineHeight={fonts.heading.lineHeight}
        fontWeight={fonts.heading.fontWeight}
        fontSize={fonts.heading.fontSizeMd}
        color={colors.brand.fontHeader}>
        <Logo src='nongbu-logo.png' width='52' height='52' />
        <BigMenuItem>Menu</BigMenuItem>
        <BigMenuItem>Reservations</BigMenuItem>
      </Flex>

      <Flex p='1' gap='4'>
        <Menu
          // colorScheme='brand'
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          lineHeight={fonts.heading.lineHeight}
          color={colors.brand.fontHeader}
          fontSize={fonts.heading.fontSize}
          gap='4'>
          <MenuItem>About</MenuItem>
          <MenuItem>Events & Catering</MenuItem>
          <MenuItem>Takeout & Delivery</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
        <Logo src='ear-logo.png' width='64' height='32' />
      </Flex>
    </Flex>
  );
}
