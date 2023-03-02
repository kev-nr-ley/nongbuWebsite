import React from "react";
import { useTheme } from "@chakra-ui/react";
import {
  Flex,
  Text,
  Heading,
  Grid,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaBeer, FaFacebook, FaInstagram } from "react-icons/fa";
import Hours from "../components/Hours";
import { Link } from "react-router-dom";

function Footer(props) {
  const { colors, fonts } = useTheme();

  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      justifyContent='center'
      alignItems={["center", "center"]}
      bg={colors.brand.footer}
      px='8vw'
      py='2vw'
      w='100vw'
      gap='8vw'
      minH='360px'
      color={colors.white}
        {...props}
      >
      <Hours
        // border='2px'
        gap='4'
        p='4'
      minW='300px'
        h='240px'
      />

      <Grid
        // border='2px'
        gap='4'
        minW='300px'
        p='4'
        h='240px'>
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

      <Grid
        // border='2px'
        gap='4'
        p='4'
        minW='300px'
        h='240px'>
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
            <Link to='https://goo.gl/maps/YtM2K31WNjdT84tU9' target='_blank'>
              Directions!!
            </Link>
          </Button>
        </Flex>
      </Grid>
    </Flex>
  );
}

export default Footer;
