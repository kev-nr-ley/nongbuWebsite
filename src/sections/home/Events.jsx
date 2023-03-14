import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
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
      gap={["0", "12", "12", "12"]}
      h={["auto", "80vh", "80vh", "80vh"]}
      w='100vw'
      maxW='100%'
      overflow='hidden'
      alignItems='center'
      {...props}>
      <NongbuImageContainer
        overflow='hidden'
        filename='nongbu-3'
        alignSelf='flex-end'
        justifySelf='flex-end'
        w={["100vw", "auto", "70vw", "70vw"]}
        h={["30vh", "80vh", "80vh", "80vh"]}
        objectPosition={["0% 50%", "20% 50%", "0% 0%", "0% 0%"]}
        objectFit='cover'
      />

  

      <SectionFlexContentContainer
        flexDirection={"column"}
        headingtext='Use our space and services.'
        linktext='Get in touch'
        linkto='/events'
        color={colors.light}>
        <Text>
          Are you looking for a private and modern space for your event? Do you
          have guests to feed? We might be able to help with your venue and
          catering needs.
        </Text>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}

export default Events;
