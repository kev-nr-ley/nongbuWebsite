import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";

import NongbuImageContainer from "@components/layout/NongbuImageContainer";

export default function HomeEvents(props) {
  const { colors } = useTheme();

  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row-reverse"]}
      bg={colors.backgroundDark}
      color={colors.light}
      justifyContent='center'
      alignItems='center'
      px='5vw'
      gap={["0", "0", "0", "5vw"]}
      {...props}>
      <NongbuImageContainer
        overflow='hidden'
        pt='5vw'
        pb={["0", "0", "0", "5vw"]}
        filename='nongbu-3'
        filter='brightness(0.85)'
        minW='20rem'
        objectPosition={["100%, 100%", "50%, 100%"]}
        objectFit='cover'
      />

      {/* Move this more to the center, try to overlap iamge on desktop */}
      <SectionFlexContentContainer
        flexDirection={"column"}
        headingtext='Use our space and services.'
        linktext='Get in touch'
        linkto='/events'
        w={["100%", "100%", "100%", "60%"]}
        justifyContent='flex-start'
        alignItems='flex-start'
        pb='4rem'
        px='0'
        color={colors.light}>
        <Text variant='bodyText' maxW='36rem' zIndex='2'>
          Are you looking for a private and modern space for your event? Do you
          have guests to feed? We might be able to help with your venue and
          catering needs.
        </Text>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
