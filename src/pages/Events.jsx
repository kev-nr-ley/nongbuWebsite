import React from "react";
import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import ImageContainer from "@components/ImageContainer";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
import { useTheme } from "@chakra-ui/react";

export default function Events(props) {
  const { colors } = useTheme();
  return (
    <Box bg={colors.backgroundDark} {...props}>
      <Box position='relative'>
        <ImageContainer
          position={["static", "absolute", "absolute"]}
          w={["100vw", "100%", "80vw", "70vw"]}
          h={["30vh", "100vh", "100vh", "100vh"]}
          right={["none", "0", "0"]}
          top={["none", "0", "0"]}
          zIndex='4'
          objectPosition='10% 10%'
          image='nongbu-event-1.webp'
        />

        <Flex //Text block
          position='relative'
          flexDirection={["column", "row"]}
          h={['100%', '100vh']}
          gap='12'
          alignItems={"center"}
          color={colors.light}
          w={["100%", "fit-content"]}
          // px={["5vw"]}
          // pb='10vh'
          p={["5vh 5vw 5vh", "5vh 5vw 5vh", "0vh 5vw 5vh", "0vh 5vw 5vh"]}
          bg={colors.backgroundDark} //for desktop
          zIndex='5'>
          <Flex
            flexDirection={"column"}
            gap='8'
            w='100%'
            minW='240px'
            maxW='320px'>
            <Heading as='h3' variant='mediumHeading'>
              Use our space and services.
            </Heading>

            <Text w='100%' minW='240px' maxW='320px'>
              Are you looking for a private and modern space for your event? Do
              you have guests to feed? We might be able to help with your venue
              and catering needs.
            </Text>

            <ChakraLinkArrow to='/contact' name='Get in touch' />
          </Flex>
        </Flex>
      </Box>

      <Box
        position='relative'
        bg={[colors.backgroundDark, colors.backgroundLight]}>
        <ImageContainer
          position={["static", "absolute", "absolute"]}
          w={["100vw", "100vw", "100vw", "100vw"]}
          h={["30vh", "100vh", "100vh", "100vh"]}
          right={["none", "0", "0"]}
          top={["none", "0", "0"]}
          zIndex='4'
          p={["0", "5vw"]}
          objectPosition='50% 100%'
          image='nongbu-event-2.webp'
        />
        <Flex //Text block
          position='relative'
          flexDirection={["column", "row"]}
          h={['100%', '100vh']}
          alignItems={"center"}
          color={colors.light}
          w={["100%", "fit-content"]}

          p={["5vh 5vw 5vh", "5vh 5vw 5vh", "0vh 5vw 5vh", "0vh 5vw 5vh"]}
          zIndex='5'>
          <Flex
            flexDirection={"column"}
            gap='8'
            w='100%'
            minW='240px'
            maxW='320px'
            pl={[0, "5vw"]}>
            <Heading as='h3' variant='mediumHeading'>
              We host all kinds of events.
            </Heading>

            <Text w='100%' minW='240px' maxW='320px'>
              From birthday parties to low-key weddings. Our minimalist and
              modern space allow you and your guests to be the focus. Get in
              touch with some details about your event if you are interested in
              our space or services.
            </Text>

            <ChakraLinkArrow to='/contact' name='Contact Us' />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
