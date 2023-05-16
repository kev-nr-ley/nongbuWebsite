import React from "react";
import { Flex } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import EarLogoLink from "@components/links/EarLogoLink.jsx";
import NongbuLogoLink from "@components/links/NongbuLogoLink.jsx";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export default function DesktopNav(props) {
  return (
    <Flex {...props}>
      <NongbuLogoLink iconsize="3rem" />
      <Flex gap="8" px="8">
        <ChakraLink name="Home" to="/" />
        <ChakraLink name="About" to="/About" />
        <ChakraLink name="Events" to="/Events" />

        <Menu>
          <MenuButton
            as={Button}
            variant="navLink"
            fontWeight="600"
            borderRadius="0"
            px="0"
            rightIcon={<ChevronDownIcon fontSize="2rem" />}
          >
            <ChakraLink name="Order" to="/Order" />
          </MenuButton>
          <MenuList bg="backgroundDark">
            <MenuItem bg="transparent" >
              <ChakraLink  name="Pickup" to="/order" />
            </MenuItem>
            <MenuItem bg="transparent" >
              <ChakraLink name="SkipTheDishes" to="https://www.skipthedishes.com/nongbu-korean-eatery" />
            </MenuItem>
            <MenuItem bg="transparent" >
              <ChakraLink name="UberEats" to="https://www.ubereats.com/ca/store/nongbu-korean-eatery-104-st/1Y-WFnTDTZ2yh5xB01bLaw" />
            </MenuItem>
            <MenuItem bg="transparent" >
              <ChakraLink name="Fantuan" to="https://www.fantuanorder.com/store/nongbu-korean-eatery/ca-9090" />
            </MenuItem>
          </MenuList>
        </Menu>

        <ChakraLink name="Contact" to="/Contact" />
      </Flex>
      <Flex
        gap="12"
        w="100%"
        mx="4"
        alignItems={"center"}
        justifyContent={"right"}
      >
        <ChakraLink variant="bigNavLink" to="/Menu" name="Menu" />
        <ChakraLink variant="bigNavLink" to="/contact" name="Reservations" />
      </Flex>
      <EarLogoLink px="8" />
      {/* <ChakraLink variant='bigNavLink' to='/ear' name='Ear' /> */}
    </Flex>
  );
}
