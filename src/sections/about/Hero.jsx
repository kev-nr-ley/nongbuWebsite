import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Link, Text, Grid, Image } from "@chakra-ui/react";
import ImageContainer from "@components/ImageContainer";
import React from "react";
import Magazine from "@sections/about/Magazine";
import AboutUs from "@sections/about/AboutUs";
import { useTheme } from "@chakra-ui/react";

export default function Hero() {
  const { colors, fonts } = useTheme();
  return (
  
      <Box
        position='relative'
        h='100vh'
        w='100vw'
        maxW='100%'
        bg={colors.backgroundDark}
        overflowX='hidden'>
        <Box
          //Text block
          flexDirection='column'
          position={["absolute", "absolute", "absolute"]}
          w={["100%", "90%", "90%", "70%"]}
          left={["0%", "5%", "5%", "5%"]}
          top={["10%", "10%", "10%", "5%"]}
          //   mx={["0%", "0%", "0%", "0%"]}
          p={["5%", "5%", "5%", "5%"]}
          // transform={["none", "none", "translateY(-50%)"]}
          h={["fit-content", "fit-content", "fit-content"]}
          // bg={colors.backgroundDark}
          // bg='red'
          // border='4px'
          // borderStyle='solid'
          color={colors.light}
          zIndex='8'>
          <Heading
            as='h3'
            variant='sectionHeading'
            fontSize={["24px", "28px", "32px", "36px"]}
            lineHeight={["30px", "36px", "40px", "40px"]}
            letterSpacing='4px'>
            It is our desire to have our guests leave every NongBu experience
            happy, full, and a little more knowledgeable about our little
            country.
          </Heading>
        </Box>

        <Flex
          position='absolute'
          bottom={["10%", "10%", "20%", "20%"]}
          left={["0", "0", "10%", "10%"]}
          h='30vh'
          // bg='red'

          gap={["0", "0", "5vh", "5vh"]}>
          <ImageContainer
            w={["100%", "100%", "30vw", "30vw"]}
            h={["100%", "100%", "25vw", "25vw"]}
            image='nongbu-about-1.webp'
            flexShrink='1'
          />
          <ImageContainer
            position='relative'
            top={["0", "0", "-5vh", "-5vh"]}
            w={["240px", "400px", "30vw", "30vw"]}
            h={["100%", "100%", "25vw", "25vw"]}
            image='nongbu-about-2.webp'
            flexShrink='0'
          />
          <ImageContainer
            w={["100%", "100%", "30vw", "30vw"]}
            h={["100%", "100%", "25vw", "25vw"]}
            image='nongbu-about-3.webp'
            flexShrink='1'
          />
        </Flex>
      </Box>
    
   
  );
}
