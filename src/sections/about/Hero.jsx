import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import ImageContainer from "@components/ImageContainer";
import SectionFlexContentContainer from "@components/SectionFlexContentContainer";
import SectionFlexContainer from "@components/SectionFlexContainer";
import NongbuImageContainer from "@components/NongbuImageContainer";
export default function Hero(props) {
  const { colors } = useTheme();
  return (
    <SectionFlexContainer
      flexDirection='column'
      position='relative'
      h='100vh'
      w='100vw'
      maxW='100%'
      bg={colors.backgroundDark}
      color={colors.light}
      overflow='hidden'
      alignItems='center'
      justifyContent='center'
      gap='20vh'
      {...props}>
      <Box
        flexDirection='column'
        position='relative'
        w={["100%", "90%", "90%", "70%"]}
        left={["0%", "-5%", "-5%", "-10%"]}
        px='5vw'
        h='fit-content'
        zIndex='8'>
        <Heading variant='largeHeading' >
          It is our desire to have our guests leave every NongBu experience
          happy, full, and a little more knowledgeable about our little country.
        </Heading>
      </Box>

      <Flex
        position='relative'
        left={["0", "0", "10%", "10%"]}
        gap={["0", "0", "4", "4"]}>
        <NongbuImageContainer
          w={["100%", "100%", "30vw", "30vw"]}
          h={["100%", "100%", "30vw", "30vw"]}
          filename='nongbu-about-1'
          name='nongbu entrance'
          flexShrink='1'
        />

        <NongbuImageContainer
          w={["100%", "100%", "30vw", "30vw"]}
          h={["100%", "100%", "30vw", "30vw"]}
          filename='nongbu-about-2'
          name='Owner John Ahn'
          flexShrink='0'
          top='-6vh'
        />

        <NongbuImageContainer
          w={["100%", "100%", "30vw", "30vw"]}
          h={["100%", "100%", "30vw", "30vw"]}
          filename='nongbu-about-3'
          name='John Ahn with facial hair'
          flexShrink='1'
        />
      </Flex>
    </SectionFlexContainer>
  );
}
