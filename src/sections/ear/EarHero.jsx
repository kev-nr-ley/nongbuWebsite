import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";

export default function EarHero(props) {
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
      <Grid
        gap='2rem'
        border='4px solid red'
        gridTemplateColumns='repeat(auto-fit, minmax(20rem, 1fr))'
        >
        <NongbuImageContainer w='100%' filename='ear-1' border='4px solid red' />
        <NongbuImageContainer w='100%' filename='ear-2' />
        <NongbuImageContainer w='100%' filename='ear-3' />
        <NongbuImageContainer w='100%' filename='ear-4' />
      </Grid>

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
        <Text variant='bodyText' maxW='36rem' zIndex='2'></Text>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
