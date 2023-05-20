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
      h={["100vh", "100vh", "100vh", "100vh"]}
      maxW="100%"
      overflow="hidden"
      {...props}
    >
      <Flex //text on top
        position="absolute"
        flexDirection="column"
        bg="backgroundDark"
        pt={["5rem", "5rem", "5rem", "2rem"]}
        zIndex="1"
        w={["250vw", "150vw", "130vw", "120vw"]}
        left={["-75vw", "-25vw", "-15vw", "-10vw"]}
        alignItems="center"
        overflow="hidden"
        borderRadius="0 0 100% 100%"
      >
        <VStack
          zIndex="2"
          w={["100vw", "100vw", "80vw", "80vw"]}
          px="10vw"
          alignItems="flex-start"
          pb={["4rem", "6rem", "6rem", "6rem"]}
          gap="1rem"
        >
          <Heading variant="heroHeading" color="light">
            Welcome To NongBu Korean Eatery.
          </Heading>

          <Text variant="mediumText" color="light">
            It is our desire to have our guests leave every NongBu experience
            happy, full and a little more knowledgeable about our little
            country.
          </Text>
          <VStack alignSelf="flex-end" alignItems="flex-end">
            <ChakraLinkArrow
              to="/menu"
              name="View Menu"
              variant="heroLink"
              arrowsize={["calc(1.5rem + 0.25vw)"]}
            />

            <ChakraLinkArrow
              to="/contact"
              name="Book a table"
              variant="heroLink"
              arrowsize={["calc(1.5rem + 0.25vw)"]}
            />
          </VStack>
        </VStack>
      </Flex>

      <NongbuImageContainer
        bottom="0"
        left="0"
        position="absolute"
        h="100%"
        maxW="100vw"
        zIndex="0"
        filename="nongbu-2"
        name="table with korean dishes"
        filter="blur(1px)"
      />

      <Hours
        zIndex="9"
        w="fit-content"
        position="absolute"
        bottom="5vh"
        display={["none", "none", "flex"]}
        right={["5vw", "5vw", "5vw", "5vw"]}
        transform={["translateX(0%)"]}
        opacity="0.8"
        bg="backgroundLight"
        py="1rem"
        px="2rem"
        showheading="true"
      />
    </SectionHeroContainer>
  );
}
