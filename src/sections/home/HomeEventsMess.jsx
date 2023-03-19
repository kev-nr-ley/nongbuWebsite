import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";

import NongbuImageContainer from "@components/layout/NongbuImageContainer";

export default function HomeEventsMess(props) {
  const { colors } = useTheme();

  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row-reverse"]}
      bg={colors.backgroundDark}
      color={colors.light}
      justifyContent='sapce-between'
      alignItems='center'
      gap={["0", "0", "0", "5vw"]}
      position='relative'
      {...props}>
      <NongbuImageContainer
        overflow='hidden'
        // pt='5vw'
        // pb={["0", "0", "0", "5vw"]}
        position='relative'
        top='0'
        right='0'
        filename='nongbu-3'
        minW='20rem'
        h='80vh'
        maxW={["100%", "100%", "100%", "100%"]}
        objectPosition={["100%, 100%", "50%, 100%"]}
        objectFit='cover'
        zIndex='9'
      />

      {/* Move this more to the center, try to overlap iamge on desktop */}
      <SectionFlexContentContainer
        flexDirection={"column"}

        headingtext='Use our space and services.'
        linktext='Get in touch'
        linkto='/events'
        w={["100%", "100%", "100%", "40%"]}
        bg='linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 80%, rgba(0,0,0, 0) 100%)'
        // bg='#00000090'
        h='80vh'
        justifyContent='center'
        alignItems='flex-start'
        pl={["5vw", "5vw", "5vw", "5vw"]}

        position='absolute'
        top='0'
        left='0'
        zIndex='9'

        color={colors.light}>
        <Text
          variant='bodyText'
          maxW='34rem'
          textShadow='2px 2px 2px rgba(0,0,0,0.5)'
          zIndex='2'>
          Are you looking for a private and modern space for your event? Do you
          have guests to feed? We might be able to help with your venue and
          catering needs.
        </Text>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
