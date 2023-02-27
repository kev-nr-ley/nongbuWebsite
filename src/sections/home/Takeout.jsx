import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import BigMenuItem from "@components/BigMenuItem";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Logo from "@components/Logo";
function Takeout(props) {
  const { colors, fonts } = useTheme();

  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      bg={colors.backgroundLight} //section container,
      color={colors.brand.fontDark}
      position='relative'
      minH='60vh'
      gap='5vw'
      p={["0", "0", "2.5vw 5vw", "2.5vw 5vw"]}>
      <Box
        w={["100vw", "100vw", "70vw", "70vw"]}
        h={["30vh", "30vh", "100%", "100%"]}
        p='2vw'>
        <Image
          objectFit='cover'
          w='100%'
          h='100%'
          zIndex={1}
          src='/src/assets/images/nongbu-4.jpg'></Image>
      </Box>
      <Flex //section content
        flexDirection={"column"}
        gap='2vh'
        w={["100%", "100%", "30%", "25%"]}
        p={["5vh", "5vh", "5vh 1vw", "10vh 1vw"]}
        fontSize={fonts.body.fontSizeLg}
        letterSpacing={fonts.body.letterSpacing}
        fontWeight={fonts.body.fontWeight}>
        <Heading variant='sectionHeading'>
          Get NongBu to-go or delivered right to your door.
        </Heading>

        <Flex flexDirection={["row", "row", "column", "column"]}
            justifyContent='space-between'
            alignItems='center'
        >
          <Logo src='skipthedishes.png' width='200' height='80' />
          <Logo src='ubereats.png' width='200' height='80' />
          <Logo src='fantuan.png' width='200' height='80' />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Takeout;
