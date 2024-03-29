import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, VStack } from "@chakra-ui/react";

import Hours from "@components/smallblocks/Hours";
import ContactInfo from "@components/smallblocks/ContactInfo";
import LocationInfo from "@components/smallblocks/LocationInfo";
import FooterCopyright from "@components/smallblocks/FooterCopyright";
export default function Footer(props) {
  return (
    <VStack>
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent="space-evenly"
        alignItems={["center", "center", "flex-start"]}
        bg="backgroundDarker"
        color="light"
        w="100%"
        px="5vw"
        pt="5vh"
        pb="0"
        mb='-0.5rem'
        gap="2rem"
        {...props}
      >
        <Hours showheading="true" w="30%" alignItems="center" />
        <ContactInfo showheading="true" w="30%" alignItems="center" />
        <LocationInfo showheading="true" w="30%" alignItems=" center" />
      </Flex>
      <FooterCopyright pt='1rem' color="light" variant="tinyText" bg="backgroundDarker" />
    </VStack>
  );
}
