import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Text, Heading } from "@chakra-ui/react";
import ImageContainer from "@components/ImageContainer";

function Contact(props) {
  const { colors } = useTheme();

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
      mt={["0", "0px"]}
      w={["100%"]}
      justifyContent={["center"]}
      zIndex='5'
      {...props}>
      <Flex flexDirection='column' gap='8'>
        <Heading as='h3' variant='sectionHeading' minW='220px' maxW='320px'>
          Book a Table
        </Heading>

        <Text variant='bodyText' lineHeight='30px' minW='220px' maxW='320px'>
          For reservations of 20 or more, please give us a call. There is an
          automatic 18% gratuity for groups of 8 or more.
        </Text>
      </Flex>

      <ImageContainer
        zIndex='4'
        minW='220px'
        maxW='320px'
        h='auto'
        image='open-table-1.webp'
      />
    </Flex>
  );
}

export default Contact;
