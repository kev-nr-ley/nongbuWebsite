import React from "react";
import { TagLeftIcon, useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading, Link, Grid } from "@chakra-ui/react";
import BigMenuItem from "@components/BigMenuItem";
import Hours from "@components/Hours";
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
      h={["100vh", "100vh", "100vh", "100vh"]}
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
        p={["0", "0", "5vw"]}
        // objectPosition='10% 10%'
        image='nongbu-contact-1.webp'
      />

      <Flex //Text block
        flexDirection='column'
        h={["100%", "100%"]}
        justifyContent='center'
        gap='8'
        p={["5vw"]}
        pt={["0", "0px", "80px"]}
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
          // gap='4'
          w='100%'
          //  minW='240px'
          // border='2px'
          gap='8'
          p='2'
          maxW='400px'>
          {/* <Heading variant='footerHeading'>CONTACT</Heading> */}
          <Link w='100%' letterSpacing='2px'>
            <Flex justifyContent={"space-between"}>
              <Text as='span'>Call</Text>
              <Text as='span'>
                (780) 989 0997 <ArrowForwardIcon fontSize='24px' />
              </Text>
            </Flex>
          </Link>
          <Link justifyContent={"space-between"} letterSpacing='2px'>
            <Flex justifyContent={"space-between"}>
              <Text as='span'>Email</Text>
              <Text as='span'>
                jahn@nongbu.ca <ArrowForwardIcon fontSize='24px' />
              </Text>
            </Flex>
          </Link>
          <Link justifyContent={"space-between"} letterSpacing='2px'>
            <Flex justifyContent={"space-between"}>
              <Text as='span'>Reservations</Text>
              <Text as='span'>
                OpenTable <ArrowForwardIcon fontSize='24px' />
              </Text>
            </Flex>
          </Link>
        </Grid>

        <Hours border='2px' gap='8' p='4' w='100%' maxW='400px' />
      </Flex>
    </Flex>
  );
}

export default Contact;
