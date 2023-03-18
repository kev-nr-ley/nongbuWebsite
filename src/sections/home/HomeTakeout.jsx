import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";

import {
  UberEatsLink,
  SkipTheDishesLink,
  FantuanLink,
} from "@components/LogoLinks";

export default function HomeTakeout(props) {
  const { colors } = useTheme();

  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row"]}
      bg={colors.backgroundLight} //section container,
      color={colors.dark}
      px='5vw'
      py='5vw'
      {...props}>
      <NongbuImageContainer
        filename='nongbu-4'
        name='plate of ddeokbbokki'
        p={["0", "0", '0', "2.5vw"]}
        maxW='44rem'
      />
      <SectionFlexContentContainer headingtext='Get NongBu to-go or delivered right to your door.'>
        <Flex
          flexDirection='column'
          gap='2rem'
          mt='2rem'
          alignItems={"center"}>

            {/* These links are causing an error */}
          <UberEatsLink />
          <SkipTheDishesLink />
          <FantuanLink />
        </Flex>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
