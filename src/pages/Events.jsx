import React from "react";
import { Flex, Box, Text, Heading, Link, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ImageContainer from "@components/ImageContainer";

import { useTheme } from "@chakra-ui/react";

export default function Events(props) {
  const { colors, fonts } = useTheme();
  return (
    <Box bg={colors.backgroundDark}>
      <Flex
        position='relative'
        flexDirection={["column", "row"]}
        h={["auto", "100vh", "100vh", "100vh"]}
        gap='12'
        color={colors.light}
        {...props}>
        <ImageContainer
          position={["static", "absolute", "absolute"]}
          w={["100vw", "100%", "80vw", "70vw"]}
          h={["30vh", "100%", "100%", "100%"]}
          right={["none", "0", "0"]}
          top={["none", "0", "0"]}
          zIndex='4'
          objectPosition='10% 10%'
          image='nongbu-event-1.jpg'
        />

        <Flex //Text block
          flexDirection='column'
          w={["100%", "auto"]}
          h={["100%", "100%"]}
          alignItems={["center", "flex-start"]}
          justifyContent={["flex-start", "center"]}
          gap='8'
          px={["5vw"]}
          pb='10vh'
          bg={colors.backgroundDark} //for desktop
          zIndex='5'>
          <Heading
            as='h3'
            variant='sectionHeading'
            w='100%'
            minW='240px'
            maxW='320px'>
            Use our space and services.
          </Heading>

          <Text
            variant='bodyText'
            lineHeight='30px'
            w='100%'
            minW='240px'
            maxW='320px'>
            Are you looking for a private and modern space for your event? Do
            you have guests to feed? We might be able to help with your venue
            and catering needs.
          </Text>

          <Link variant='sectionLink' w='100%' minW='240px' maxW='320px'>
            Get in touch <ArrowForwardIcon fontSize='24px' />
          </Link>
        </Flex>
      </Flex>

      <Flex
        flexDirection={["column", "row"]}
        position='relative'
        h={["auto", "80vh", "80vh", "80vh"]}
        bg={colors.backgroundLight}
        px={["0", "5vw"]}
        gap='12'
        pb='10vh'
        alignItems='center'>
        <ImageContainer
          zIndex='4'
          w={["100%", "60vw"]}
          h={["30vh", "60vh"]}
          image='nongbu-event-2.jpg'
        />

        <Flex //text block
          flexDirection='column'
          w={["100%", "50%", "50%", "30%"]}
          px={["5vw", "0"]}
          h={["fit-content", "100%", "100%"]}
          alignItems={["center", "flex-start"]}
          justifyContent={["center"]}
          zIndex='5'
          gap='8'>
          <Text variant='bodyText' lineHeight='30px' minW='220px' maxW='320px'>
            We host all kinds of events, from birthday parties to low-key
            weddings. Our minimalist and modern space allow you and your guests
            to be the focus. Get in touch with some details about your event if
            you are interested in our space or services.
          </Text>

          <Link variant='sectionLink' w='100%' minW='240px' maxW='320px'>
            Contact us <ArrowForwardIcon fontSize='24px' />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
