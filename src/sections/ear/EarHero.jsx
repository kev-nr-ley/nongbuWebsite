import React from "react";
import { Flex, Text, Grid, Box, Heading, VStack } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import EarImageContainer from "@components/layout/EarImageContainer";
import ChakraLink from "@components/ChakraLink";
import EarLogoLink from "@components/links/EarLogoLink";

export default function EarHero(props) {
  return (
    <Flex
      gap="1rem"
      bg="backgroundDark"
      position="relative"
      w="100vw"
      maxW="100%"
      minH="80vh"
      px="5vw"
      alignItems="center"
      justifyContent="center"
      flexDirection={["column", "column", "column", "row"]}
      {...props}
    >
      {/* Text */}
      <VStack
        p="1rem"
        w="100%"
        h="100%"
        alignItems="center"
        justifyContent="center"
      >
        <EarLogoLink color="light" fontSize="48px" mt="2rem" />
        <Text
          color="light"
          my="2rem"
          w={["100%", "100%", "400px", "350px"]}
          textAlign="center"
          ineHeight="30px"
        >
          Ear YEG is Joy Park’s small batch bakery with a home at Nongbu Korean
          Eatery. Check out the Instagram page and DM Joy for inquiries.
        </Text>

        <ChakraLink
          to="https://www.instagram.com/ear_yeg/"
          target="_blank"
          rel="noopener noreferrer"
          fontSize="1.5rem"
          lineHeight="30px"
          color="primary"
        >
          @ear_yeg
        </ChakraLink>
      </VStack>
      {/* Image gallery */}
      <Grid
        w="auto"
        h="auto"
        bg="light"
        alignItems="center"
        justifyItems="center"
        gridTemplateColumns={[
          "repeat(1,  90vw)",
          "repeat(1,  90vw)",
          "repeat(2,  30vw)",
          "repeat(2,  20vw)",
        ]}
        gridTemplateRows={[
          "repeat(4,  20vw)",
          "repeat(4,  20vw)",
          "repeat(2,  30vw)",
          "repeat(2,  20vw)",
        ]}
        gap="2vw"
        p="2vw"
      >
        <EarImageContainer filename="ear-1" />
        <EarImageContainer filename="ear-2" />
        <EarImageContainer filename="ear-3" />
        <EarImageContainer filename="ear-4" />
      </Grid>
    </Flex>
  );
}
