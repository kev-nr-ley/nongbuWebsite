import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";

import UberEatsLink from "@components/links/UberEatsLink";
import FantuanLink from "@components/links/FantuanLink";
import SkipTheDishesLink from "@components/links/SkipTheDishesLink";
// import {
//   UberEatsLink,
// SkipTheDishesLink,
//   FantuanLink,
// } from "@components/LogoLinks";

export default function HomeTakeout(props) {

  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row"]}
      bg='backgroundLight'
      color='dark'
      px='5vw'
      py='5vw'
      position='relative'
      {...props}>
      <NongbuImageContainer
        filename='nongbu-4'
        name='plate of ddeokbbokki'
        p={["0", "0", "0", "2.5vw"]}
        maxW='44rem'
      />
      <SectionFlexContentContainer headingtext='Get NongBu to-go or delivered right to your door.'>
        <Flex flexDirection='row' gap='2rem' mt='2rem' alignItems={"center"} justifyContent='center'>
          <UberEatsLink />
          <SkipTheDishesLink />
          <FantuanLink />
        </Flex>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
