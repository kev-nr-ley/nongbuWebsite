import React from "react";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";
import ChakraLink from "@components/ChakraLink";
import { Tooltip } from "@chakra-ui/react";
export default function UberEatsLink(...props) {
  return (
    <ChakraLink
      to="https://www.ubereats.com/ca/store/nongbu-korean-eatery-104-st/1Y-WFnTDTZ2yh5xB01bLaw"
      name="Uber Eats"
      bg="backgroundLight"
      target="_blank"
      {...props}
    >
      <NongbuImageContainer
        filename="ubereats-logo"
        name="Uber Eats Logo"
        w={["8rem", "12rem", "12rem", "12rem"]}
        transition="all 0.2s ease-in-out"
        _hover={{ transform: "scale(1.1)" }}
      />
    </ChakraLink>
  );
}
