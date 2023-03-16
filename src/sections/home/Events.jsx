import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/SectionFlexContentContainer";
import SectionFlexContainer from "@components/SectionFlexContainer";
import NongbuImageContainer from "@components/NongbuImageContainer";

function Events(props) {
  const { colors } = useTheme();

  return (
    <SectionFlexContainer
      flexDirection={["column", "row-reverse", "row-reverse", "row-reverse"]}
      bg={colors.backgroundDark}
      color={colors.light}
      h={["auto", "80vh", "80vh", "80vh"]}
      justifyContent='center'
      alignItems='center'
      
      {...props}>
      <NongbuImageContainer
        overflow='hidden'
      p={['0', '0', '5vw']}
          filename='nongbu-3'
        w={["100%", "auto", "auto", "65vw"]}
        h={["30vh", "100%", "100%", "100%"]}
        objectPosition={["0% 50%", "20% 50%", "0% 0%", "50% 100%"]}
        objectFit='cover'
      />

      <SectionFlexContentContainer
        flexDirection={"column"}
        headingtext='Use our space and services.'
        linktext='Get in touch'
        linkto='/events'
        w={["100%", "60%", "30%"]}
        alignItems='flex-start'
        color={colors.light}>
        <Text variant='bodyText'>
          Are you looking for a private and modern space for your event? Do you
          have guests to feed? We might be able to help with your venue and
          catering needs.
        </Text>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}

export default Events;
