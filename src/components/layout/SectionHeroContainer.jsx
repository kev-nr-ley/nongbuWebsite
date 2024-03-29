import React from "react";
import { Flex } from "@chakra-ui/react";

export default function SectionHeroContainer(props) {
  return (
    <Flex
      className="sectionHeroContainer"
      flexDirection="column"
      position="relative"
      h={"100vh"}
      minW="20rem"
      w="100vw"
      maxW="100%"
      alignItems="center"
      justifyContent="flex-start"
      {...props}
    >
      {props.children}
    </Flex>
  );
}
