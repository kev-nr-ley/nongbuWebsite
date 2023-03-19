import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";

import NongbuImageContainer from "@components/layout/NongbuImageContainer";

import {
  UberEatsLink,
  SkipTheDishesLink,
  FantuanLink,
} from "@components/LogoLinks";

export default function OrdrHero(props) {
  const { colors } = useTheme();
  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row"]}
      bg={colors.backgroundDark}
      color={colors.light}
      position='relative'
      justifyContent={"center"}
      alignItems='center'
      p='5vw'
      gap='5vw'
      {...props}>
      <NongbuImageContainer
        w='100%'
        maxW={["100%", "20rem", "100%", "40%"]}
        filename='nongbu-4'
        name='plate of ddeokkbokki'
        pt='5vh'
        pb={["0", "0", "0", "5vw"]}
      />

      <SectionFlexContentContainer
        flexDirection={"column"}
        headingtext='Get NongBu to-go or delivered.'
        w={["100%", "100%", "100%", "60%"]}
        justifyContent='flex-start'
        gap='1rem'
        alignItems='flex-start'
        maxW='36rem'
        pb='4rem'
        color={colors.light}>
        <Text variant='bodyText' maxW='36rem' zIndex='2'>
          Look at our menu and give us a call to pick up your order, or get
          NongBu delivered right to your door.
        </Text>

        <Flex
          flexDirection={["column", "column", "column", "column"]}
          gap='2rem'
          bg={colors.backgroundDark}
          mt='1rem'
          pb='5vw'
          alignItems='center'
          justifyContent='flex-start'
          px='1rem'>
          <UberEatsLink />
          <SkipTheDishesLink />
          <FantuanLink />
        </Flex>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
