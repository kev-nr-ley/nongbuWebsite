import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Heading, Text, Grid, VStack } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
import Hours from "@components/Hours";
import NongbuImageContainer from "@components/NongbuImageContainer";
import SectionHeroContainer from "@components/SectionHeroContainer";
export default function Hero(props) {
  const { colors } = useTheme();
  return (
    <SectionHeroContainer h={["100vh", "100vh", "80vh", "80vh"]} {...props}>
      <Flex
        flexDirection='column'
        bg={colors.backgroundDark}
        // bg='red.700'
        pt={["5rem", "5rem"]}
        zIndex='2'
        w={["100%"]}
        alignItems='center'
        justifyContent={"center"}>
        <VStack
          zIndex='2'
          w={["100%", "100%", "30rem", "48rem"]}
          px='5vw'
          pb='5vw'
          // bg={colors.backgroundDark}

          // bg='red.300'
        >
          <Heading variant='heroHeading' color='light'>
            Welcome To NongBu Korean Eatery.
          </Heading>
          <Text variant='mediumText' color='light'>
            It is our desire to have our guests leaver NongBu experience happy,
            full and a little more knowledgeable about our little country.{" "}
          </Text>
          <VStack
            pt='2rem'
            gap='1rem'
            alignSelf='flex-end'
            w='fit-content'
            alignItems='flex-end'>
            <ChakraLinkArrow
              to='/menu'
              name='View Menu'
              variant='heroLink'
              arrowSize='1.75rem'
            />
            <ChakraLinkArrow
              to='/contact'
              b
              name='Book a table'
              variant='heroLink'
              arrowSize='1.75rem'
            />
          </VStack>
        </VStack>
      </Flex>
      <NongbuImageContainer
        bottom='0'
        left='0'
        position='absolute'
        h='100%'
        zIndex='0'
        filename='nongbu-1'
        name='table with korean dishes'
        // p='5vw'
      />
      {/* <Hours
        zIndex='9'
        w='18rem'
        position='absolute'
        bottom={["5vh"]}
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
      /> */}
    </SectionHeroContainer>
  );
}
