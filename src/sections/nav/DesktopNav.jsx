import React from "react";
import { Link, Flex, Menu } from "@chakra-ui/react";
import BigMenuItem from "@components/BigMenuItem";
import { useTheme } from "@chakra-ui/react";
import Logo from "@components/Logo";

export default function DesktopNav() {
  const { colors, fonts } = useTheme();

  return (
    <Flex
      className='desktop-nav'
      as='nav'
      bg={colors.backgroundDarker}
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
        gap='6'
        justifyContent='space-between'
        alignItems='center'
        lineHeight={fonts.headingLineHeight}>
        <Logo src='nongbu-logo.png' width='52' height='52' />
        <Menu>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Events</Link>
          <Link>Order</Link>
        </Menu>
      </Flex>

      <Flex
        p='1'
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap='4'>
        <BigMenuItem variant='fancyLink'>Menu</BigMenuItem>
        <BigMenuItem>Reservations</BigMenuItem>
        <Logo src='ear-logo.png' width='64' height='32' />
      </Flex>
    </Flex>
  );
}
