import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Text, Heading, Grid, Button } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Hours from "@components/Hours";
import { Link } from "react-router-dom";

function Footer(props) {
  const { colors } = useTheme();

  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      justifyContent='center'
      alignItems={["center", "center"]}
      bg={colors.backgroundDarker}
      px='8vw'
      py='2vw'
      w='100vw'
      gap='8vw'
      minH='360px'
      color={colors.white}
      {...props}>
      <Hours />

      <Grid minW='300px' h='240px' gap='8' p='4' w='100%' maxW='400px'>
        <Heading variant='footerHeading'>CONTACT</Heading>
        <Flex flexDirection='column' letterSpacing='2px'>
          <ChakraLink to='tel:7809890997' name='(780) 989 0997' />
          <ChakraLink to='mailto:jahn@nongbu.ca' name='jahn@nongbu.ca' />
          <Flex fontSize='32px' mt='2' gap='2'>
            <Link to='https://www.instagram.com/nongbu_korean/' target='_blank'>
              <FaInstagram />
            </Link>
            <Link to='https://www.facebook.com/nongbukorean' target='_blank'>
              <FaFacebook />
            </Link>
          </Flex>
        </Flex>
      </Grid>

      <Grid minW='300px' h='240px' gap='8' p='4' w='100%' maxW='400px'>
        <Heading variant='footerHeading'>LOCATION</Heading>
        <Flex flexDirection='column' letterSpacing='2px'>
          <Text letterSpacing='2px'>8115 104 St NW.</Text>
          <Text letterSpacing='2px'>Edmonton, AB T6E 4E4</Text>
          <Button
            color={colors.dark}
            borderRadius='0'
            w='fit-content'
            bg='backgroundLight'
            fontStyle={"italic"}
            letterSpacing='2px'
            mt='2'
            fontWeight='700'>
            <Link to='https://goo.gl/maps/YtM2K31WNjdT84tU9' target='_blank'>
              Directions
            </Link>
          </Button>
        </Flex>
      </Grid>
    </Flex>
  );
}

export default Footer;
