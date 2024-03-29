import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";
import UberEatsLink from "@components/links/UberEatsLink";
import FantuanLink from "@components/links/FantuanLink";
import SkipTheDishesLink from "@components/links/SkipTheDishesLink";

export default function OrdrHero(props) {
  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row"]}
      bg="backgroundLight"
      position="relative"
      justifyContent={"center"}
      alignItems="center"
      p="5vw"
      gap="5vw"
      {...props}
    >
      <NongbuImageContainer
        w="100%"
        maxW={["100%", "20rem", "100%", "40%"]}
        filename="cheese-ramyun-jeon"
        name="plate of ddeokkbokki"
        pt="5vh"
        pb={["0", "0", "0", "5vw"]}
      />

      <SectionFlexContentContainer
        flexDirection={"column"}
        headingtext="Get NongBu to-go or delivered."
        w={["100%", "100%", "100%", "60%"]}
        justifyContent="flex-start"
        gap="1rem"
        alignItems="flex-start"
        maxW="36rem"
        pb="4rem"
      >
        <Text variant="bodyText" maxW="36rem" zIndex="2">
          Look at our menu and give us a call to pick up your order, or get
          NongBu delivered right to your door.
        </Text>

        <Flex
          flexDirection={["row", "row", "row", "row"]}
          flexWrap="wrap"
          gap="2rem"
          mt="1rem"
          pb="5vw"
          alignItems="center"
          justifyContent="center"
          px="1rem"
        >
          <UberEatsLink />
          <SkipTheDishesLink />
          <FantuanLink />
        </Flex>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
