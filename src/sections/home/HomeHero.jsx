import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Heading, Text, VStack, Box } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
import Hours from "@components/smallblocks/Hours";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";

import SectionHeroContainer from "@components/layout/SectionHeroContainer";

export default function HomeHero(props) {
  const { colors } = useTheme();
  return (
    <SectionHeroContainer
      h={["100vh", "100vh", "100vh", "90vh"]}
      maxW='100vw'
      overflow='hidden'
      {...props}>
      <Flex //text on top
        position='absolute'
        flexDirection='column'
        bg={colors.backgroundDark}
        pt={["5rem", "5rem", "5rem", "2rem"]}
        zIndex='1'
        w={["250vw", "150vw", "130vw", "120vw"]}
        left={["-75vw", "-25vw", "-15vw", "-10vw"]}
        h={["auto", "auto", "auto", "auto"]}
        alignItems='center'
        justifyContent='flex-start'
        overflow='hidden'
        borderRadius='0 0 100% 100%'>
        {/* BACKGROUND CIRCLE */}

        {/* ------------------------------- */}

        <VStack
          zIndex='2'
          w={["100vw", "100vw", "80vw", "80vw"]}
          px='10vw'
          alignItems='flex-start'
          pb='5rem'
        >
          <Heading
            variant={["mediumHeading", "mediumHeading", "heroHeading"]}
            px='0'
            // whiteSpace='nowrap' //uncentered
            color='light'>
            Welcome To NongBu Korean Eatery.
          </Heading>

          <Text
            variant={["smallText", "smallText", "mediumText"]}
            w={["100%", "100%", "100%", "100%"]}
            // bg='green.600'
            px='0'
            color='light'>
            It is our desire to have our guests leaver NongBu experience happy,
            full and a little more knowledgeable about our little country.{" "}
          </Text>
          <VStack
            pt='1rem'
            gap='0rem'
            alignSelf='flex-end'
            alignItems='flex-end'>
            <ChakraLinkArrow
              to='/menu'
              name='View Menu'
              variant='heroLink'
              pr='1rem'
              arrowsize={["1.25rem", "1.25rem", "1.5rem", "1.5rem"]}
              fontSize={["1rem", "1rem", "1.25rem", "1.25rem"]}
            />
            <ChakraLinkArrow
              to='/contact'
              name='Book a table'
              variant='heroLink'
              pr='1rem'
              arrowsize={["1.25rem", "1.25rem", "1.5rem", "1.5rem"]}
              fontSize={["1rem", "1rem", "1.25rem", "1.25rem"]}
            />
          </VStack>
        </VStack>
      </Flex>

      {/* parallax background */}

      <NongbuImageContainer
        bottom='0'
        left='0'
        position='absolute'
        h='100%'
        maxW='100vw'
        zIndex='0'
        filename='nongbu-2'
        name='table with korean dishes'
      />

      <Hours
        zIndex='9'
        w='18rem'
        position='absolute'
        bottom={["5vh"]}
        display={["none", "none", "flex"]}
        right={["5vw", "5vw", "5vw", "5vw"]}
        transform={[
          "translateX(0%)",
          "translateX(0%)",
          "translateX(0)",
          "translateX(0)",
        ]}
        opacity='0.95'
        bg='backgroundLight'
        p='1rem'
        showheading='true'
      />
    </SectionHeroContainer>
  );
}
