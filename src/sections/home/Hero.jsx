import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Box, Flex, Image } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";

import Hours from "@components/Hours";
function Hero(props) {
  const { colors } = useTheme();
  return (
    <Box // Section container
      bg={colors.backgroundDark}
      w='100vw'
      maxW='100%'
      h={["100vh", "100vh", "100vh", "100vh"]}
      position='relative'
      {...props}>
      <Flex // Hero text container
        flexDirection='column'
        justifyContent='center'
        px='5vw'
        h='100%'
        w='100vw'
        maxW='100%'
        zIndex={9}>
        <Box //NongBu Logo
          zIndex={9}
          w={["300px", "340px", "380px", "420px"]}>
          <Image src='/images/nongbu-banner.webp'></Image>
        </Box>

        <Flex // Link button container
          width='fit-content'
          flexDirection='column'
          position='relative'
          zIndex={9}
          gap='4'
          mt='8'
          textAlign={["left", "right", "right"]}>
          <ChakraLinkArrow to='/menu' name='View Menu' />
          <ChakraLinkArrow to='/contact' name='Book a table' />
        </Flex>
      </Flex>

      <Hours
        position='absolute'
        bottom={["5vw", "5vw"]}
        right={["50%", "5vw"]}
        transform={["translateX(50%)", "translateX(0%)"]}
        gap='4'
        p='4'
        w={["90%", "fit-content"]}
        minW='300px'
        maxW='380px'
        bg={colors.backgroundLight}
        color={colors.dark}
        zIndex='9'
      />

      <Box // Image background container
        position='absolute'
        top='0'
        right='0'
        w={["100%", "70vw"]}
        h={["30vh", "100%", "100%"]}>
        <Image
          src='./images/nongbu-1.png'
          fallbackSrc='https://via.placeholder.com/1120x710'></Image>
      </Box>
    </Box>
  );
}

export default Hero;
