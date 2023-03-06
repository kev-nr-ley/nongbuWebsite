import React from "react";
import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import LogoLink from "@components/LogoLink";
import { useTheme } from "@chakra-ui/react";
import ImageContainer from "@components/ImageContainer";

export default function Order(props) {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      bg={colors.backgroundDark} //section container,
      color={colors.brand.fontLight}
      position='relative'
      justifyContent={"center"}
      alignItems='center'
      p={["0", "0", "5vw", "5vw"]}
      pb='10vh'
      gap='12'
      {...props}>
      <ImageContainer
        zIndex={1}
        w={["100vw", "100vw", "60vw", "50vw"]}
        h={["30vh", "40vh", "auto", "auto"]}
        image='nongbu-4.webp'
        objectFit='cover'
      />

      <Flex //section content
        flexDirection={["column", "row", "column", "column"]}
        gap='8'
        px={["5vw", "5vw", "0vw", "0vw"]}
        py='5vw'
        w={["100%", "100%", "30%", "25%"]}>
        <Box>
          <Heading variant='mediumHeading'>Get it to-go or delivered</Heading>

          <Text minW='200px' mt='8'>
            Look at our menu and give us a call to pick up your order, or get
            NongBu delivered right to your door using one of these apps:
          </Text>
        </Box>

        <Flex gap='8' flexDirection='column' alignItems={"center"}>
          <LogoLink
            to='/contact'
            name='Skip The Dishes'
            src='skipthedishes.png'
            width={["200px", "220px", "240px", "260px"]}
          />
          <LogoLink
            to='/contact'
            name='Uber Eats'
            src='ubereats.png'
            width={["200px", "220px", "240px", "260px"]}
          />
          <LogoLink
            to='/contact'
            name='Fantuan'
            src='fantuan.png'
            width={["200px", "220px", "240px", "260px"]}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
