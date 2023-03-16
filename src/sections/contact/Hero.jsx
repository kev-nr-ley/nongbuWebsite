import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Text, Heading, Grid, Box } from "@chakra-ui/react";
import Hours from "@components/Hours";
import ImageContainer from "@components/ImageContainer";
import ChakraLink from "@components/ChakraLink";
import ContactInfo from "@components/ContactInfo";
import LocationInfo from "@components/LocationInfo";
import NongbuImageContainer from "../../components/NongbuImageContainer";
export default function Hero(props) {
  const { colors } = useTheme();

  return (
    <Flex //body
      bg={colors.backgroundDark}
      alignItems='center'
      position='relative'
      flexDirection={["column", "row"]}
      minH='100vh'
      color={colors.light}
      overflow='hidden'
      {...props}>
      <NongbuImageContainer
        objectPosition='100% 100%'
        position={["static", "absolute", "absolute"]}
        w={["100%", "100%", "80vw", "70vw"]}
        h={["30vh", "100%", "100%", "100vh"]}
        right={["none", "0", "0"]}
        top={["none", "0", "0"]}
        zIndex='4'
        filename='nongbu-contact-1'
      />

      <Flex //Text block
        flexDirection='column'
        justifyContent='center'
        bg={colors.backgroundDark} //for desktop
        zIndex='5'
        px='5vw'
        py='5vw'
        gap='2rem'
        minW={["100vw", "60vw", "30vw", "30vw"]}
        h={["100%", "100vh", "100vh", "100vh"]}>
        <Box>
          {" "}
          <Heading as='h3' px='0' variant='mediumHeading'>
            Contact us
          </Heading>
          <Text variant='bodyText' px='0' maxW='24rem' lineHeight='40px'>
            Book a table, order takeout, inquire about private events and
            catering, ask about our menu... etc.
          </Text>
        </Box>

        {/* add padding to phone and email text to line up */}
        <Hours border='2px solid white' p='1rem' showheading='false' />

        <ContactInfo showheading='false' />
        <LocationInfo showheading='true' />
      </Flex>
    </Flex>
  );
}
