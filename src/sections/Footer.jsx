import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Text, Heading, Grid, Button, Box } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Hours from "@components/Hours";
import InstagramLink from "@components/InstagramLink";
import FacebookLink from "@components/FacebookLink";
import { Link } from "react-router-dom";

function Footer(props) {
  const { colors } = useTheme();

  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      justifyContent='center'
      alignItems={["center", "center"]}
      bg={colors.backgroundDarker}
      px='8vw'
      py='2vw'
      w='100vw'
      gap='8vw'
      minH='360px'
      color={colors.white}
      {...props}>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(3, 1fr)",
        ]}>
        <Box
          gap='4'
          p='1rem'
          w='100%'
          maxW='300px'
          opacity='0.9'
          zIndex='9'
          {...props}>
          <Heading variant='footerHeading'>HOURS</Heading>
          <Flex flexDirection='column' gap='1'>
            <Flex justifyContent={"space-between"} letterSpacing='2px'>
              <Text as='span'>Tue - Thu</Text> <Text as='span'>4pm - 9pm</Text>
            </Flex>
            <Flex justifyContent={"space-between"} letterSpacing='2px'>
              <Text as='span'>Fri & Sat</Text> <Text as='span'>4pm - 10pm</Text>
            </Flex>
            <Flex justifyContent={"space-between"} letterSpacing='2px'>
              <Text as='span'>Sun & Mon</Text> <Text as='span'>Closed</Text>
            </Flex>
          </Flex>
        </Box>

        <Box
          gap='4'
          p='1rem'
          w='100%'
          maxW='300px'
          opacity='0.9'
          zIndex='9'
          {...props}>
          <Heading variant='footerHeading'>CONTACT</Heading>
          <Text>
            <ChakraLink to='tel:7809890997' name='(780) 989 0997' />
            <ChakraLink to='mailto:jahn@nongbu.ca' name='jahn@nongbu.ca' />
          </Text>
          <Flex mt='1rem' gap='2rem'>
            <FacebookLink fontSize='2rem' />
            <InstagramLink fontSize='2rem' />
          </Flex>
        </Box>

        <Box
          gap='4'
          p='1rem'
          w='100%'
          maxW='300px'
          opacity='0.9'
          zIndex='9'
          {...props}>
          <Heading variant='footerHeading'>LOCATION</Heading>
          <Text letterSpacing='2px'>
            8115 104 St NW.
            <br />
            Edmonton, AB T6E 4E4
          </Text>
          <Button
            color={colors.dark}
            borderRadius='0'
            w='fit-content'
            bg='backgroundLight'
            fontStyle={"italic"}
            letterSpacing='2px'
            fontWeight='700'>
            <Link to='https://goo.gl/maps/YtM2K31WNjdT84tU9' target='_blank'>
              Directions
            </Link>
          </Button>
        </Box>
      </Grid>
    </Flex>
  );
}

export default Footer;
