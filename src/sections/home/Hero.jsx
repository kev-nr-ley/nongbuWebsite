import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
import NongbuImageContainer from "@components/NongbuImageContainer";
import Hours from "@components/Hours";
import SectionHeroContainer from "@components/SectionHeroContainer";
function Hero(props) {
  const { colors } = useTheme();
  return (
    <SectionHeroContainer h={["100vh", "100vh", "90vh", "90vh"]} {...props}>
      <Flex
        flexDirection='column'
        bg={colors.backgroundDark}
        h='auto'
        zIndex='2'
        px={["1rem", "1rem", "10vw", "20vw"]}
        py='2rem'>
        <Heading variant='heroHeading' color='light'>
          Welcome To NongBu Korean Eatery.
        </Heading>
        <Text mt='2rem' variant='mediumText' color='light'>
          It is our desire to have our guests leaver NongBu experience happy,
          full and a little more knowledgeable about our little country.{" "}
        </Text>
        <Flex
          w='100%'
          flexDirection='column'
          justifyContent='flex-end'
          alignItems={"flex-end"}
          gap='1rem'
          my='1rem'>
          <ChakraLinkArrow to='/menu' name='View Menu' variant='heroLink' />
          <ChakraLinkArrow
            to='/contact'
            name='Book a table'
            variant='heroLink'
          />
        </Flex>
      </Flex>

      <Hours
        position='absolute'
        bottom={["5vw", "5vw"]}
        right={["50%", "5vw"]}
        transform={["translateX(50%)", "translateX(0%)"]}
        bg={colors.backgroundLight}
        color={colors.dark}
        opacity='0.9'
        zIndex='9'
      />

      <NongbuImageContainer
        top='0'
        left='0'
        // w='100vw'
        h='auto'
        zIndex='0'
        filename='nongbu-1'
        name='table with korean dishes'
      />
    </SectionHeroContainer>
  );
}

export default Hero;
