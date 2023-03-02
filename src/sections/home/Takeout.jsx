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
      flexDirection={["column", "row", "row", "row"]}
      bg={colors.backgroundLight} //section container,
      color={colors.brand.fontDark}
      position='relative'
      justifyContent={"center"}
      alignItems='center'
      h={["100%", "auto", "auto", "auto"]}
      p={["0", "5vw", "5vw", "5vw"]}
      pb='10vh'
      gap='12'>

      <Box
        w={["100vw", "60vw", "50vw", "50vw"]}
        h={["30vh", "auto", "auto", "auto"]}>
        <Image
          zIndex={1}
          src='/images/nongbu-4.webp'
          objectFit='cover'></Image>
      </Box>

  
      <Flex //section content
        flexDirection={["column", "column", "column", "column"]}
        gap='8'
        px={["5vw", "0vw", "0vw", "0vw"]}
        w={["100%", "30%", "30%", "25%"]}>
        <Heading variant='sectionHeading'>Get NongBu to-go or delivered right to your door.</Heading>

        <Flex gap='4' flexDirection='column' alignItems={'center'}>
          <Logo src='skipthedishes.webp' width='180' height='60' />
          <Logo src='ubereats.webp' width='180' height='60' />
          <Logo src='fantuan.webp' width='180' height='60' />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Takeout;
