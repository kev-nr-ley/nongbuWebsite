import React from "react";
import {
  Link,
  Flex,
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
        gap='4'>
        <Logo src='nongbu-logo.png' width='52' height='52' />
        <BigMenuItem variant='fancyLink'>Menu</BigMenuItem>
        <BigMenuItem>Reservations</BigMenuItem>
      </Flex>

      <Flex
        display='flex'
        flexDirection='row'
        p='1'
        gap='6'
        justifyContent='space-between'
        alignItems='center'
        lineHeight={fonts.headingLineHeight}>
        <Link>About</Link>
        <Link>Events & Catering</Link>
        <Link>Takeout & Delivery</Link>
        <Link>Contact</Link>
        <Logo src='ear-logo.png' width='64' height='32' />
      </Flex>
    </Flex>
  );
}
