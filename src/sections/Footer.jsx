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

function Footer() {
  const { colors, fonts } = useTheme();

  return (
    <>
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        justifyContent='center'
        alignItems={"center"}
        bg={colors.brand.footer}
        w='100vw'
        gap='10vw'
        p='5vh 5vw'
        color={colors.white}>
        <Grid w='100%' maxW='400px' h='200px' gap='2' mb='2'>
          <Heading variant='footerHeading'>HOURS</Heading>

          <Flex flexDirection='column'>
            <Flex justifyContent={"space-between"} letterSpacing='2px'>
              <span>Tue - Thu</span> <span>4pm - 9pm</span>
            </Flex>
            <Flex justifyContent={"space-between"} letterSpacing='2px'>
              <span>Fri & Sat</span> <span>4pm - 10pm</span>
            </Flex>
            <Flex justifyContent={"space-between"} letterSpacing='2px'>
              <span>Sun & Mon</span> <span>Closed</span>
            </Flex>
          </Flex>
        </Grid>

        <Grid w='100%' maxW='400px' h='200px' gap='2' mb='2'>
          <Heading variant='footerHeading'>CONTACT</Heading>
          <Flex flexDirection='column' letterSpacing='2px'>
            <Text letterSpacing='2px'>(780) 989-0997</Text>
            <Text letterSpacing='2px'>john@nongbu.ca</Text>
            <Flex fontSize='32px' gap='4'mt='2'>
              <FaInstagram />
              <FaFacebook />
            </Flex>
          </Flex>
        </Grid>

        <Grid w='100%' maxW='400px' h='200px' gap='2' mb='2'>
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
    </>
  );
}

export default Footer;
