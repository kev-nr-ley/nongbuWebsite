import React from "react";
import { useTheme } from "@chakra-ui/react";
import {
  Flex,
  Image,
  Box,
  Text,
  Heading,
  Stack,
  SimpleGrid,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { FaBeer, FaFacebook, FaInstagram } from "react-icons/fa";
import BigMenuItem from "../components/BigMenuItem";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Logo from "../components/Logo";
import Hours from "../components/Hours";

function Footer() {
  const { colors, fonts } = useTheme();

  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      justifyContent='center'
      alignItems={["center", "center", "flex-start"]}
      h={["auto", "auto"]}
      bg={colors.brand.footer}
      p='5'
      w='100vw'
      gap='8'
      color={colors.white}>
      <Hours gap='8' h='100%' minH='200px' w='100%' maxW='300px' />

      <Grid
        gap='4'
        h='100%'
        minH='200px'
        w='100%'
        maxW='300px'
        flexDirection='column'>
        <Heading variant='footerHeading'>CONTACT</Heading>
        <Flex flexDirection='column' letterSpacing='2px'>
          <Text letterSpacing='2px'>(780) 989-0997</Text>
          <Text letterSpacing='2px'>john@nongbu.ca</Text>
          <Flex fontSize='32px' mt='2' gap='2'>
            <FaInstagram />
            <FaFacebook />
          </Flex>
        </Flex>
      </Grid>

      <Grid gap='4' h='100%' minH='200px' w='100%' maxW='300px'>
        <Heading variant='footerHeading'>LOCATION</Heading>
        <Flex flexDirection='column' letterSpacing='2px'>
          <Text letterSpacing='2px'>8115 104 St NW.</Text>
          <Text letterSpacing='2px'>Edmonton, AB T6E 4E4</Text>
          <Button
            color={colors.dark}
            borderRadius='0'
            w='fit-content'
            bg='backgroundLight'
            fontStyle={"italic"}
            letterSpacing='2px'
            mt='2'
            fontWeight='700'>
            Directions
          </Button>
        </Flex>
      </Grid>
    </Flex>
  );
}

export default Footer;
