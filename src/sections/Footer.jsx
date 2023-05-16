import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

import Hours from "@components/smallblocks/Hours";
import ContactInfo from "@components/smallblocks/ContactInfo";
import LocationInfo from "@components/smallblocks/LocationInfo";
export default function Footer(props) {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection={["column", "column", "row"]}
      justifyContent="space-evenly"
      alignItems={["center", "center", "flex-start"]}
      bg="backgroundDarker"
      color="light"
      w="100%"
      px="5vw"
      py="5vh"
      gap="2rem"
      {...props}
    >
      <Hours showheading="true" w="30%" alignItems='center' />
      <ContactInfo showheading="true" w="30%" alignItems='center' />
      <LocationInfo
        showheading="true"
        w="30%"
        alignItems=" center"
      />
    </Flex>
  );
}
