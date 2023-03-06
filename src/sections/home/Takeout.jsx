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
      color={colors.dark}

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
        px={["5vw", "0vw", "0vw", "0vw"]}
        w={["100%", "30%", "30%", "25%"]}
        justifyContent='flex-start'
        alignItems={"flex-start"}
        h='100%'>

        <Flex flexDirection='column'  h='100%' justifyContent={'center'} gap='8'>
          <Heading variant='smallHeading'>
            Get NongBu to-go or delivered right to your door.
          </Heading>

          <Flex gap='4' flexDirection='column' alignItems={"center"}>
            <LogoLink
              to='/contact'
              name='Skip The Dishes'
              src='skipthedishes.png'
              width={["200px", "200px", "240px", "260px"]}
            />
            <LogoLink
              to='/contact'
              name='Uber Eats'
              src='ubereats.png'
              width={["200px", "200px", "240px", "260px"]}
            />
            <LogoLink
              to='/contact'
              name='Fantuan'
              src='fantuan.png'
              width={["200px", "200px", "240px", "260px"]}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Takeout;
