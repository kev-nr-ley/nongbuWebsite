import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
import Hours from "@components/smallblocks/Hours";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";
import SectionHeroContainer from "@components/layout/SectionHeroContainer";

export default function HomeHero(props) {
  const { colors } = useTheme();
  return (
    <SectionHeroContainer h={["100vh", "100vh", "100vh", "90vh"]} {...props}>

      <Flex  //text on top
        flexDirection='column'
        bg={'transparent'}
        pt={["5rem", "5rem", "5rem", "2rem"]}
        zIndex='2'
        w={["100%"]}
        bg='purple.600'
        alignItems='center'
        justifyContent={"center"}>
        <VStack
          zIndex='2'
          w={["100%", "100%", "80%", "80%"]}
          px='5vw'
          bg='transparent'
          alignItems='flex-start'
          pb='1rem'
          // bg='blue.600'
        >
          <Heading
            variant={["mediumHeading", "mediumHeading", "heroHeading"]}
            // bg='red.600'
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
              arrowsize='1.75rem'
            />
            <ChakraLinkArrow
              to='/contact'
              name='Book a table'
              variant='heroLink'
              arrowsize='1.75rem'
            />
          </VStack>
        </VStack>
      </Flex>




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
