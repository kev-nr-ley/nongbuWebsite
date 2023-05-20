import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";
import UberEatsLink from "@components/links/UberEatsLink";
import FantuanLink from "@components/links/FantuanLink";
import SkipTheDishesLink from "@components/links/SkipTheDishesLink";

export default function HomeTakeout(props) {
  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row"]}
      bg="backgroundLight"
      color="dark"
      px="5vw"
      py="5vw"
      position="relative"
      {...props}
    >
      <NongbuImageContainer
        filename="newfood-11"
        name="plate of ddeokbbokki"
        p={["0", "0", "0", "2.5vw"]}
        maxW="60rem"
      />
      <SectionFlexContentContainer alignItems="center">
        <Heading variant="mediumHeading" w="fit-content">
          Get NongBu to-go or delivered right to your door.
        </Heading>
        <Flex
          flexDirection="row"
          mt="2rem"
          gap="5vw"
          alignItems="center"
          flexWrap="wrap"
        >
          <UberEatsLink />
          <SkipTheDishesLink />
          <FantuanLink />
        </Flex>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
