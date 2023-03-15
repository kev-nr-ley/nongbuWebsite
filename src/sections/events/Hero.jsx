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
          position={["static", "absolute", "absolute"]}
          w={["100vw", "100%", "80vw", "70vw"]}
          h={["30vh", "100vh", "100vh", "100vh"]}
          right={["none", "0", "0"]}
          top={["none", "0", "0"]}
          zIndex='4'
          objectPosition='10% 10%'
          filename='nongbu-event-1'
          name='Nongbu stairs'
        />

        <SectionFlexContentContainer
          headingtext='Use our space and services'
          linktext='Get in touch'
          linkto='/events'
          position='relative'
          flexDirection={["column", "row"]}
          h={["100%", "100vh"]}
          color={colors.light}
          bg={colors.backgroundDark} //for desktop
          zIndex='5'
          py='2rem'
          justifyContent='center'
          alignItems='center'>
          Are you looking for a private and modern space for your event? Do you
          have guests to feed? We might be able to help with your venue and
          catering needs.
        </SectionFlexContentContainer>
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

        <SectionFlexContentContainer
          headingtext='We host all kinds of events'
          linktext='Get in touch'
          linkto='/events'
          position='relative'
          flexDirection={["column", "row"]}
          h={["100%", "100vh"]}
          color={colors.light}
          bg={"transparent"} //for desktop
          zIndex='5'
          px={["0", "5vw"]}
          py='2rem'
          maxW='600px'
          // textAlign='left'
        >
          From birthday parties to low-key weddings. Our minimalist and modern
          space allow you and your guests to be the focus. Get in touch with
          some details about your event if you are interested in our space or
          services.
        </SectionFlexContentContainer>
      </Box>
    </Box>
  );
}
