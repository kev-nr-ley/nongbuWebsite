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
      justifyContent='space-between'
      alignItems={["center", "center", "flex-start"]}
      bg={colors.backgroundDarker}
      color={colors.light}
      w='100%'
      px='5vw'
      py='5vh'
      gap='2rem'
      h='fit-content'
      {...props}>
      <Hours maxW='16rem' showheading='true' />
      <ContactInfo maxW='16rem' showheading='true' />
      <LocationInfo maxW='16rem' showheading='true' />
    </Flex>
  );
}
