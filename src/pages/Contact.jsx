import React from "react";
import { TagLeftIcon, useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading, Link, Grid } from "@chakra-ui/react";
import BigMenuItem from "@components/BigMenuItem";
import ImageContainer from "@components/ImageContainer";
import {
  ArrowForwardIcon,
  AtSignIcon,
  CheckIcon,
  EmailIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import Logo from "@components/Logo";
function Contact(props) {
  const { colors, fonts } = useTheme();

  return (
    <Flex //body
      bg={colors.backgroundDark}
      // justifyContent='center'
      alignItems='center'
      position='relative'
      flexDirection={["column", "row"]}
      h={["auto", "100vh", "100vh", "100vh"]}
      gap='8'
      color={colors.light}
      {...props}>
      <ImageContainer
        objectPosition='100% 100%'
        position={["static", "absolute", "absolute"]}
        w={["100vw", "100%", "80vw", "70vw"]}
        h={["30vh", "100%", "100%", "100%"]}
        right={["none", "0", "0"]}
        top={["none", "0", "0"]}
        zIndex='4'
        // objectPosition='10% 10%'
        image='nongbu-contact-1.webp'
      />

      <Flex //Text block
        flexDirection='column'
        // w={["auto"]}
        h={["100%", "100%"]}
        justifyContent='center'
        gap='8'
        px={["5vw"]}
        pb='10vh'
        mt={["0", "80px"]}
        // minW='240px'
        maxW='400px'
        bg={colors.backgroundDark} //for desktop
        zIndex='5'>
        <Heading as='h3' variant='sectionHeading'>
          Contact us
        </Heading>

        <Text variant='bodyText' lineHeight='30px' maxW='400px'>
          Book a table, order takeout, inquire about private events and
          catering, ask about our menu... etc.
        </Text>

        <Grid
          gap='4'
          w='100%'
          //  minW='240px'
          maxW='400px'>
          {/* <Heading variant='footerHeading'>CONTACT</Heading> */}
          <Flex justifyContent={"space-between"} letterSpacing='2px'>
            <Text>Call </Text>
            <Text variant='bigText'> (780) 989 0997</Text>
          </Flex>
          <Flex justifyContent={"space-between"} letterSpacing='2px'>
            <Text>Email </Text>
            <Text variant='bigText'> jahn@nongbu.ca</Text>
          </Flex>
          <Flex justifyContent={"space-between"} letterSpacing='2px'>
            <Text>Reservation</Text>
            <Text variant='bigText'>OpenTable</Text>
          </Flex>
        </Grid>

        <Grid gap='4' maxW='400px'>
          <Heading variant='footerHeading'>HOURS</Heading>
          <Flex justifyContent={"space-between"} letterSpacing='2px'>
            <Text>Tue - Thu</Text>
            <Text>4pm - 9pm</Text>
          </Flex>
          <Flex justifyContent={"space-between"} letterSpacing='2px'>
            <Text>Fri & Sat</Text>
            <Text>4pm - 10pm</Text>
          </Flex>
          <Flex justifyContent={"space-between"} letterSpacing='2px'>
            <Text>Sun & Mon</Text>
            <Text> Closed </Text>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
}

export default Contact;
