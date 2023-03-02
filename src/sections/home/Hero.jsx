import React from "react";
import { useTheme } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import Hours from "@components/Hours";
function Hero() {
  const { colors, fonts } = useTheme();
  return (
    <Box // Section container
      bg={colors.backgroundDark}
      w='100vw'
      h={["100vh", "100vh", "100vh", "100vh"]}
      position='relative'>
      <Flex // Hero text container
        flexDirection='column'
        justifyContent='center'
        px='5vw'
        h='100%'
        w={["100%"]}
        zIndex={9}>
        <Box //NongBu Logo
          zIndex={9}
          w={["300px", "340px", "380px", "420px"]}>
          <Image src='/images/nongbu-banner.webp'></Image>
        </Box>

        <Box // Link button container
          width='fit-content'
          flexDirection='column'
          position='relative'
          zIndex={9}
          gap='8'
          mt='8'
          textAlign={["left", "right", "right"]}>
          <Link variant='heroLink' my='10%' noOfLines={1}>
            Our menu
            <ArrowForwardIcon fontSize='32px' />
          </Link>

          <Link variant='heroLink' my='10%' noOfLines={1}>
            Book a table
            <ArrowForwardIcon fontSize='32px' />
          </Link>
        </Box>
      </Flex>

      <Hours
        position='absolute'
        bottom={["5vw", "5vw"]}
        right={["50%", "5vw"]}
        transform={["translateX(50%)", "translateX(0%)"]}
        gap='4'
        p='4'
        w={["90%", "fit-content"]}
        minW='280px'
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
