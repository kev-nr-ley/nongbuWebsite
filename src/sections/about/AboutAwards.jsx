import React from "react";
import { VStack, Heading, Text, Image } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";

export default function AboutAwards(props) {
  const { colors } = useTheme();
  return (
    <SectionFlexContainer
      flexDirection={[
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "row",
      ]}
      bg={colors.backgroundDark}
      h={["auto", "auto", "auto", "80vh"]}
      w='100vw'
      maxW='100%'
      overflow='hidden'
      justifyContent={["center"]}
      alignItems={["center"]}
      gap='5vw'
      p='5vw'
      {...props}>
      <VStack color={colors.light} my='1rem'>
        <Heading variant='mediumHeading' borderBottom='2px solid white'>
          Awards
        </Heading>

        <VStack pt='1rem' textAlign='center'>
          <Heading variant='smallHeading'>
            Edify Edmonton <br /> (Avenue Magazine)
          </Heading>
          <Text>1st, Best New Restaurant, 2016</Text>
          <Text>1st, Best Korean Restaurant, 2016</Text>
          <Text>1st, Best Korean Restaurant, 2017</Text>
          <Text>Honourable Mention,</Text>
          <Text>Best Overall Restaurant, 2018</Text>
        </VStack>

        <VStack pt='1rem'>
          <Heading variant='smallHeading'>Vue Weekly</Heading>
          <Text> 1st, Best Korean Restaurant, 2016</Text>
          <Text>1st, Best Korean Restaurant, 2017</Text>
          <Text>1st, Best Korean Restaurant, 2018</Text>
        </VStack>

        <VStack pt='1rem'>
          <Heading variant='smallHeading'>Where Magazine</Heading>
          <Text> 2nd, Best New Restaurant, 2016</Text>
        </VStack>
      </VStack>

      <Image
        src='/images/nongbu-magazine.webp'
        w={["100%", "100%", "24rem", "32rem"]}
        h={["auto"]}
      />
    </SectionFlexContainer>
  );
}