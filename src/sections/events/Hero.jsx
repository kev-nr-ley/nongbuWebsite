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
      <SectionFlexContainer
        flexDirection={["column", "column", "column", "row-reverse"]}
        bg={colors.backgroundDark}
        color={colors.light}
        // h={["auto", "80vh", "80vh", "80vh"]}
        // flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
        px='5vw'
        gap={["0", "0", "0", "5vw"]}
        {...props}>
        <NongbuImageContainer
          overflow='hidden'
          pt='5vw'
          pb={["0", "0", "0", "5vw"]}
          // p={["5vw 5vw 0", "5vw 5vw 0", "5vw 5vw 0", "5vw"]}
          filename='nongbu-event-1'
          // w={["100%", "100%", "auto", "65vw"]}
          // h={["auto", "auto", "100%", "100%"]}
          // maxH={['40vh' , '40vh', '100%', '100%']}
          filter='brightness(0.85)'
          minW='20rem'
          objectPosition={["100%, 100%", "50%, 100%"]}
          objectFit='cover'
        />

        {/* Move this more to the center, try to overlap iamge on desktop */}
        <SectionFlexContentContainer
          flexDirection={"column"}
          headingtext='Use our space and services.'
          linktext='Get in touch'
          linkto='/events'
          w={["100%", "100%", "100%", "60%"]}
          justifyContent='flex-start'
          alignItems='flex-start'
          pb='4rem'
          color={colors.light}>
          <Text
            variant='bodyText'
            // maxW='32rem'
            // w={["100%", "80%", "80%", "20rem"]}
            maxW='36rem'
            zIndex='2'>
            Are you looking for a private and modern space for your event? Do
            you have guests to feed? We might be able to help with your venue
            and catering needs.
          </Text>
        </SectionFlexContentContainer>
      </SectionFlexContainer>

      <SectionFlexContainer
        flexDirection={["column", "column", "column", "row"]}
        bg={colors.backgroundLight}
        color={colors.dark}
        // h={["auto", "80vh", "80vh", "80vh"]}
        // flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
        px='5vw'
        gap={["0", "0", "0", "5vw"]}
        {...props}>
        <NongbuImageContainer
          overflow='hidden'
          pt='5vw'
          pb={["0", "0", "0", "5vw"]}
          // p={["5vw 5vw 0", "5vw 5vw 0", "5vw 5vw 0", "5vw"]}
          filename='nongbu-event-2'
          // w={["100%", "100%", "auto", "65vw"]}
          // h={["auto", "auto", "100%", "100%"]}
          // maxH={['40vh' , '40vh', '100%', '100%']}
          filter='brightness(0.85)'
          minW='20rem'
          objectPosition={["100%, 100%", "50%, 100%"]}
          objectFit='cover'
        />

        {/* Move this more to the center, try to overlap iamge on desktop */}
        <SectionFlexContentContainer
          flexDirection={"column"}
          headingtext='We host all kinds of events.'
          linktext='Get in touch'
          linkto='/events'
          w={["100%", "100%", "100%", "60%"]}
          justifyContent='flex-start'
          alignItems='flex-start'
          pb='4rem'
       
          color={colors.dark}>
          <Text
            variant='bodyText'
            // maxW='32rem'
            // w={["100%", "80%", "80%", "20rem"]}
            maxW='36rem'
            zIndex='2'>
            From birthday parties to low-key weddings. Our minimalist and modern
            space allow you and your guests to be the focus. Get in touch with
            some details about your event if you are interested in our space or
            services.
          </Text>
        </SectionFlexContentContainer>
      </SectionFlexContainer>

      {/* <Box position='relative' bg='backgroundLight'>
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
            maxW={["100%", "100%", "20rem", "28rem"]}
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
      </Box> */}
    </Box>
  );
}
