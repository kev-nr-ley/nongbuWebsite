import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Heading } from "@chakra-ui/react";
import LogoLink from "@components/LogoLink";
function Takeout(props) {
  const { colors } = useTheme();

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
      w={["100%"]}
      maxW='100%'
      gap='12'
      {...props}>
      <Box
        w={["100vw", "60vw", "50vw", "50vw"]}
        h={["30vh", "auto", "auto", "auto"]}>
        <Image zIndex={1} src='/images/nongbu-4.webp' objectFit='cover'></Image>
      </Box>

      <Flex //section content
        flexDirection={["column", "column", "column", "column"]}
        gap='8'
        mt={["0", "80px"]}
        px={["5vw", "0vw", "0vw", "0vw"]}
        w={["100%", "30%", "30%", "25%"]}
        justifyContent='flex-start'
        alignItems={"flex-start"}
        h='100%'>
        <Heading variant='sectionHeading'>
          Get NongBu to-go or delivered right to your door.
        </Heading>

        <Flex gap='4' flexDirection='column' alignItems={"center"}>
          <LogoLink
            to='/contact'
            name='Skip The Dishes'
            src='skipthedishes.png'
            width='180px'
            height='60px'
          />
          <LogoLink
            to='/contact'
            name='Uber Eats'
            src='ubereats.png'
            width='180px'
            height='60px'
          />
          <LogoLink
            to='/contact'
            name='Fantuan'
            src='fantuan.png'
            width='180px'
            height='60px'
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Takeout;
