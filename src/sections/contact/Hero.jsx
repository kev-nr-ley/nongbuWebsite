import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Text, Heading, Grid, Box } from "@chakra-ui/react";
import Hours from "@components/Hours";
import ImageContainer from "@components/ImageContainer";
import ChakraLink from "@components/ChakraLink";

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
      <ImageContainer
        objectPosition='100% 100%'
        position={["static", "absolute", "absolute"]}
        w={["100vw", "100%", "80vw", "70vw"]}
        h={["30vh", "100%", "100%", "100vh"]}
        right={["none", "0", "0"]}
        top={["none", "0", "0"]}
        zIndex='4'
        image='nongbu-contact-1.webp'
      />

      <Flex //Text block
        flexDirection='column'
        justifyContent='center'
        bg={colors.backgroundDark} //for desktop
        zIndex='5'
        gap='8'
        px='5vw'
        py='5vh'
        minW={["100vw", "60vw", "30vw", "30vw"]}
        h={["100%", "100vh", "100vh", "100vh"]}>
        <Heading as='h3' variant='mediumHeading'>
          Contact us
        </Heading>

        <Text maxW='400px'>
          Book a table, order takeout, inquire about private events and
          catering, ask about our menu... etc.
        </Text>

        <Grid gap='8' p='4' w='100%' maxW='400px'>
          <Flex
            flexDirection={["column", "row"]}
            justifyContent={"space-between"}>
            <Text as='span' variant='mediumText' letterSpacing='2px'>
              Call
            </Text>
            <ChakraLink
              variant='heroLink'
              to='tel:7809890997'
              name='(780) 989 0997'
              color={colors.primary}
            />
          </Flex>

          <Flex
            flexDirection={["column", "row"]}
            justifyContent={"space-between"}>
            <Text as='span' variant='mediumText' letterSpacing='2px'>
              Email
            </Text>
            <ChakraLink
              variant='heroLink'
              to='mailto:jahn@nongbu.ca'
              name='jahn@nongbu.ca'
              color={colors.primary}
            />
          </Flex>

          <Flex
            flexDirection={["column", "row"]}
            justifyContent={"space-between"}>
            <Text as='span' variant='mediumText' letterSpacing='2px'>
              Reservations
            </Text>
            <ChakraLink
              variant='heroLink'
              to='/contact'
              name='Book a table'
              color={colors.primary}
            />
          </Flex>
        </Grid>
        <Hours border='2px' gap='8' p='4' w='100%' maxW='400px' />
      </Flex>
    </Flex>
  );
}
