import React from "react";
import { FaBeer, FaFacebook, FaInstagram } from "react-icons/fa";
import { useTheme } from "@chakra-ui/react";
import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Heading, Text, Flex, Button, Image } from "@chakra-ui/react";
function home() {
  const { colors, fonts } = useTheme();
  return (
    <Box // Section container
      bg={colors.brand.backgroundDark}
      // bg={["red.300", "blue.300", "green.300", "yellow.300"]}
      w='100vw'
      h='100vh'
      mt='128px' //for navbar seperationF
      position='relative'>
      <Flex // Hero text container
        flexDirection={"column"}
        justifyContent='space-between'
        px={["5%"]}
        pt={["45%", "30%", "10%", "10%"]}
        // bg={["red.400", "blue.400", "green.400", "yellow.400"]}
        zIndex={99}
        // gap='8'
        position='relative'>
        <Box  //Logo and link container top stay top 
        >
          <Box //NongBu Logo
            zIndex={8}
            w={["300px", "340px", "380px", "420px"]}
            h='fit-content'>
            <Image src='/src/assets/images/nongbu-hero.png'></Image>
          </Box>

          <Box // Link button container
            flexDirection='column'
            gap='4'
            position='relative'
            zIndex={8}
            width='fit-content'
            pl='4'
            letterSpacing={fonts.heading.letterSpacing}
            textAlign={["left", "left", "right"]}
            lineHeight={fonts.heading.lineHeight}
            fontSize={fonts.heading.fontSizeMd}
            fontWeight={fonts.heading.fontWeight}
            color={colors.brand.highlight}>
            <Text my='10%' noOfLines={1}>
              Our menu <ArrowForwardIcon fontSize={fonts.heading.fontSizeXl} />
            </Text>
            <Text my='10%' noOfLines={1}>
              Book a table{" "}
              <ArrowForwardIcon fontSize={fonts.heading.fontSizeXl} />
            </Text>
          </Box>
        </Box>
        <Flex // Social media container
          pl='4'
          gap='4'
          fontSize={fonts.heading.fontSizeXl}>
          <FaInstagram />
          <FaFacebook />
        </Flex>
      </Flex>

      <Box // Image background container
        position='absolute'
        top='0'
        right='0'
        w={["100%", "100%", "78%"]}
        h={["20%", "25%", "80%"]}>
        <Image
          w='100%'
          h='100%'
          objectFit={"cover"}
          src='/src/assets/images/nongbu-1.png'
          fallbackSrc='https://via.placeholder.com/1126x710'></Image>
      </Box>
    </Box>
  );
}

export default home;
