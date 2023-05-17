import React from "react";
import { Flex } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import EarLogoLink from "@components/links/EarLogoLink.jsx";
import NongbuLogoLink from "@components/links/NongbuLogoLink.jsx";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon, AddIcon } from "@chakra-ui/icons";
export default function DesktopNav(props) {
  return (
    <Flex {...props}>
      <NongbuLogoLink iconsize="3rem" />
      <Flex gap="8" px="8" alignItems="flex-start" justifyContent="">
        <ChakraLink name="Home" to="/" />
        <ChakraLink name="About" to="/About" />
        <ChakraLink name="Events" to="/Events" />
        <ChakraLink name="Contact" to="/Contact" />
        <Menu>
          <MenuButton
            as={Button}
            color="primary"
            bg="backgroundDarker"
            rightIcon={<ChevronDownIcon fontSize="2rem" />}
            _hover={{ bg: "backgroundDark" }}
            _active={{ bg: "backgroundDark" }}
          >
            <ChakraLink name="Order Now" to="/Order" fontWeight="800" />
          </MenuButton>
          <MenuList bg="backgroundDark">
            {/* <MenuGroup
              title="Pickup"
              fontSize="1.5rem"
              fontWeight="400"
              bg="backgroundDarker"
              w="100%"
              px="0"
              mx="0"
            > */}

            <MenuItem bg="transparent">
              <ChakraLink name="Pickup" to="/contact" />
            </MenuItem>
            {/* </MenuGroup> */}
            {/* <MenuGroup
              title="Delivery"
              fontSize="1.5rem"
              fontWeight="400"
              bg="backgroundDarker"
              w="100%"
              px="0"
              mx="0"
            > */}
            <MenuItem bg="transparent">
              <ChakraLink
                name="SkipTheDishes"
                to="https://www.skipthedishes.com/nongbu-korean-eatery"
              />
            </MenuItem>
            <MenuItem bg="transparent">
              <ChakraLink
                name="UberEats"
                to="https://www.ubereats.com/ca/store/nongbu-korean-eatery-104-st/1Y-WFnTDTZ2yh5xB01bLaw"
              />
            </MenuItem>
            <MenuItem bg="transparent">
              <ChakraLink
                name="Fantuan"
                to="https://www.fantuanorder.com/store/nongbu-korean-eatery/ca-9090"
              />
            </MenuItem>
            {/* </MenuGroup> */}
          </MenuList>
        </Menu>
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
