import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Box, Flex, Image, Heading, Text, Grid } from "@chakra-ui/react";
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
        py='2rem'
        >
        <Heading
          variant='heroHeading'
          mt={["4rem", "4rem", "2rem", "0rem"]}
          color='light'>
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

      <Grid
        position='absolute'
        bottom={["5vw", "5vw"]}
        right={["50%", "5vw"]}
        transform={["translateX(50%)", "translateX(0%)"]}
        gap='4'
        p='1rem'
        w='100%'
        maxW='300px'
        bg={colors.backgroundLight}
        color={colors.dark}
        opacity='0.9'
        zIndex='9'
        {...props}>
        <Heading variant='footerHeading'>HOURS</Heading>
        <Flex flexDirection='column' gap='1'>
          <Flex justifyContent={"space-between"} letterSpacing='2px'>
            <Text as='span'>Tue - Thu</Text> <Text as='span'>4pm - 9pm</Text>
          </Flex>
          <Flex justifyContent={"space-between"} letterSpacing='2px'>
            <Text as='span'>Fri & Sat</Text> <Text as='span'>4pm - 10pm</Text>
          </Flex>
          <Flex justifyContent={"space-between"} letterSpacing='2px'>
            <Text as='span'>Sun & Mon</Text> <Text as='span'>Closed</Text>
          </Flex>
        </Flex>
      </Grid>

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
