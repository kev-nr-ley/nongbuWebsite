import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import ImageContainer from "@components/ImageContainer";

export default function Hero(props) {
  const { colors } = useTheme();
  return (
    <Flex
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
        h={["fit-content", "fit-content", "fit-content"]}
        zIndex='8'>
        <Heading
          as='h3'
          fontWeight='700'
          fontSize={["24px", "28px", "32px", "36px"]}
          lineHeight={["30px", "36px", "40px", "40px"]}
          letterSpacing='4px'>
          It is our desire to have our guests leave every NongBu experience
          happy, full, and a little more knowledgeable about our little country.
        </Heading>
      </Box>

      <Flex
        position='relative'
        // bottom={["10%", "10%", "10%", "10%"]}
        left={["0", "0", "10%", "10%"]}
        h='30vh'
        // bg='red'

        gap={["0", "0", "4", "4"]}>
        <ImageContainer
          w={["100%", "100%", "30vw", "30vw"]}
          h={["100%", "100%", "30vw", "30vw"]}
          image='nongbu-about-1.webp'
          flexShrink='1'
        />
        <ImageContainer
          position='relative'
          top={["0", "-2vh", "-5vh", "-5vh"]}
          w={["240px", "400px", "35vw", "35vw"]}
          h={["100%", "100%", "30vw", "30vw"]}
          image='nongbu-about-2.webp'
          flexShrink='0'
        />
        <ImageContainer
          w={["100%", "100%", "30vw", "30vw"]}
          h={["100%", "100%", "30vw", "30vw"]}
          image='nongbu-about-3.webp'
          flexShrink='1'
        />
      </Flex>
    </Flex>
  );
}
