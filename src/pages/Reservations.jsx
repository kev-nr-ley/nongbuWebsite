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
    <Flex
      flexDirection={["column", "row"]}
      position='relative'
      minH='80vh'
      bg={colors.backgroundDark}
      color={colors.light}
      px='5vw'
      gap='12'
      py='10vh'
      
      // alignItems='center'
      mt={['0', '0px']}
      w={["100%"]}
      // alignItems={["center", "flex-start"]}
      justifyContent={["center"]}
      zIndex='5'>
      <Flex flexDirection='column' gap='8'>
        <Heading as='h3' variant='sectionHeading' minW='220px' maxW='320px'>
          Book a Table
        </Heading>

        <Text variant='bodyText' lineHeight='30px' minW='220px' maxW='320px'>
          For reservations of 20 or more, please give us a call. There is an
          automatic 18% gratuity for groups of 8 or more.
        </Text>

        {/* <Link variant='sectionLink' minW='220px' px='5vw'>
          Contact us <ArrowForwardIcon fontSize='24px' />
        </Link> */}
      </Flex>

      <ImageContainer zIndex='4'  minW='220px' maxW='320px' h='auto' image='open-table-1.webp' />
    </Flex>
  );
}

export default Contact;
