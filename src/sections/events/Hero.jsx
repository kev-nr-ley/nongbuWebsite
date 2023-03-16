import React from "react";
import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import ImageContainer from "@components/ImageContainer";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
import { useTheme } from "@chakra-ui/react";

import SectionFlexContentContainer from "@components/SectionFlexContentContainer";
import SectionFlexContainer from "@components/SectionFlexContainer";
import NongbuImageContainer from "@components/NongbuImageContainer";

export default function Hero(props) {
  const { colors } = useTheme();
  return (
    <Box bg={colors.backgroundDark} {...props}>
      <Box position='relative'>
        <NongbuImageContainer
          position={["static", "static", "absolute"]}
          w={["100%", "100%", "80vw", "70vw"]}
          h={["30vh", "30vh", "100vh", "100vh"]}
          right={["none", "0", "0"]}
          top={["none", "0", "0"]}
          zIndex='4'
          objectPosition='10% 10%'
          filename='nongbu-event-1'
          name='Nongbu Event'
        />

        <Flex //Text block
          position='relative'
          flexDirection={["column", "column", "row"]}
          h={["100%", "100%", "100vh"]}
          alignItems={"center"}
          color={colors.light}
          w={["100%", "100%", "fit-content"]}
          p={["5vh 5vw 5vh", "5vh 5vw 5vh", "0vh 5vw 5vh", "0vh 5vw 5vh"]}
          bg={colors.backgroundDark} //for desktop
          zIndex='5'>
          <Flex
            flexDirection={"column"}
            w='100%'
            minW='18rem'
            maxW={["100%", "100%", "20rem"]}>
            <Heading variant='mediumHeading'>
              Use our space and services.
            </Heading>

            <Text variant='bodyText'>
              Are you looking for a private and modern space for your event? Do
              you have guests to feed? We might be able to help with your venue
              and catering needs.
            </Text>

            <ChakraLinkArrow
              to='/contact'
              variant='sectionLink'
              name='Get in touch'
            />
          </Flex>
        </Flex>
      </Box>

      <Box position='relative' bg='backgroundLight'>
        <NongbuImageContainer
          position={["static", "static", "absolute", "absolute"]}
          w={["100%", "100%", "100vw", "100vw"]}
          h={["30vh", "30vh", "100vh", "100vh"]}
          right={["none", "0", "0"]}
          top={["none", "0", "0"]}
          zIndex='4'
          p={["0 0 0 ", "5vw 5vw 0vw", "5vw 5vw"]}
          objectPosition='50% 100%'
          filename='nongbu-event-2'
          name='wedding ducks'
        />

        <Flex //Text block
          position='relative'
          flexDirection={["column", "column", "row"]}
          h={["100%", "100%", "100vh"]}
          alignItems={"center"}
          color={["dark", "dark", "light"]}
          w={["100%", "100%", "fit-content"]}
          p={["5vh 5vw 5vh", "5vh 5vw 5vh", "0vh 5vw 5vh", "0vh 5vw 5vh"]}
          zIndex='5'>
          <Flex
            flexDirection={"column"}
            w='100%'
            minW='18rem'
            maxW={["100%", "100%", "20rem", '28rem']}
            pl={[0, "0", "5vw"]}>
            <Heading as='h3' variant='mediumHeading'>
              We host all kinds of events.
            </Heading>

            <Text variant='bodyText'>
              From birthday parties to low-key weddings. Our minimalist and
              modern space allow you and your guests to be the focus. Get in
              touch with some details about your event if you are interested in
              our space or services.
            </Text>

            <ChakraLinkArrow
              to='/contact'
              variant='sectionLink'
              name='Contact Us'
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
