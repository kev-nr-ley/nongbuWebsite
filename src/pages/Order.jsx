import React from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Image,
  Link,
  color,
} from "@chakra-ui/react";
import BigMenuItem from "@components/BigMenuItem";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ImageContainer from "@components/ImageContainer";
import Logo from "@components/Logo";
import { useTheme } from "@chakra-ui/react";

export default function Order(props, styleProps) {
  const { colors, fonts } = useTheme();
  return (
    <Flex
      flexDirection={["column", "row", "row", "row"]}
      bg={colors.backgroundDark} //section container,
      color={colors.brand.fontLight}
      position='relative'
      justifyContent={"center"}
      alignItems='flex-start'
      h={["100%", "auto", "auto", "auto"]}
      p={["0", "5vw", "5vw", "5vw"]}
      pb='10vh'
      gap='12'
      {...props}>
      <Box
        mt={["0", "80px"]}
        w={["100vw", "60vw", "50vw", "50vw"]}
        h={["30vh", "auto", "auto", "auto"]}>
        <Image
          zIndex={1}
          src='/src/assets/images/nongbu-4.jpg'
          objectFit='cover'></Image>
      </Box>

      <Flex //section content
        flexDirection={["column", "column", "column", "column"]}
        gap='8'
        mt={["0", "80px"]}
        px={["5vw", "0vw", "0vw", "0vw"]}
        w={["100%", "30%", "30%", "25%"]}>
        <Heading variant='sectionHeading'>Get it to-go or delivered</Heading>

        <Text variant='bodyText' lineHeight='30px' minW='220px'>
          Look at our menu and give us a call to pick up your order, or get
          NongBu delivered right to your door using one of these apps:
        </Text>

        <Flex gap='4' flexDirection='column' alignItems={"center"}>
          <Logo src='skipthedishes.png' width='180' height='60' />
          <Logo src='ubereats.png' width='180' height='60' />
          <Logo src='fantuan.png' width='180' height='60' />
        </Flex>
      </Flex>
    </Flex>
  );
}
