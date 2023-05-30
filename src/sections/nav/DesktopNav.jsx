import React from "react";
import { Flex } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import EarLogoLink from "@components/links/EarLogoLink.jsx";
import NongbuLogoLink from "@components/links/NongbuLogoLink.jsx";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon, PhoneIcon } from "@chakra-ui/icons";
export default function DesktopNav(props) {
  return (
    <Flex alignItems='center' {...props}>
      <NongbuLogoLink iconsize="3rem" />
      <Flex   alignItems="flex-start" justifyContent="space-evenly" w='100%'>
        <ChakraLink name="Home" to="/" />
        <ChakraLink name="About" to="/About" />
        <ChakraLink name="Events" to="/Events" />
        <ChakraLink name="Contact" to="/Contact" />
      </Flex>
      <Flex
        // gap="12"
        // w="100%"
        // mx="4"
        // alignItems={"center"}
        // justifyContent={"right"}

        alignItems="flex-start" justifyContent="space-evenly" w='100%'
      >
        <ChakraLink variant="bigNavLink" to="/Menu" name="Menu" />
        <ChakraLink variant="bigNavLink" to="/contact" name="Reservations" />
        <Menu>
          <MenuButton
            as={Button}
            color="primary"
            bg="backgroundDarker"
            rightIcon={<ChevronDownIcon fontSize="2rem" />}
            _hover={{ bg: "light" }}
            _active={{ bg: "light" }}
          >
            <ChakraLink
              name="Order"
              to="/Order"
              fontWeight="700"
              variant="bigNavLink"
              color="primary"
            />
          </MenuButton>
          <MenuList bg="backgroundDark">
            <MenuItem bg="transparent">
              <ChakraLink
                name="Pickup"
                to="/contact"
                iconleft={<PhoneIcon />}
                display="flex"
                alignItems="center"
                gap="1rem"
              />
            </MenuItem>

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
          </MenuList>
        </Menu>
      </Flex>
      <EarLogoLink px="1rem" pb="0.25rem" />
    </Flex>
  );
}
