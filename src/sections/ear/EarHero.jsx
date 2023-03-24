import React from "react";
import { Flex, Text, Grid, Box, Heading, VStack } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import EarImageContainer from "@components/layout/EarImageContainer";
import { InstagramEmbed } from "react-social-media-embed";
import { useState, useEffect } from "react";
import ChakraLink from "@components/ChakraLink";
import EarLogoLink from "@components/links/EarLogoLink";
import { FaInstagram } from "react-icons/fa";
import {
  FormLabel,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import FormInputContainer from "@components/FormInputContainer";

export default function EarHero(props) {
  const { colors } = useTheme();

  return (
    <Flex
      gap='1rem'
      // border='2px solid limegreen'
      bg={colors.backgroundDark}
      position='relative'
      w='100vw'
      maxW='100%'
      minH='80vh'
      px='5vw'
      alignItems='center'
      justifyContent='center'
      flexDirection={["column", "column", "column", "row"]}>
      {/* Text */}
      <VStack
        p='1rem'
        w='100%'
        h='100%'
        alignItems='center'
        justifyContent='center'>
        <EarLogoLink color='light' fontSize='48px'  mt='2rem'/>
        <Text color={colors.light} my='2rem' w={['100%', '100%', '400px', '350px']} textAlign='center' ineHeight='30px'>
          Ear YEG is Joy Park’s small batch bakery with a home at Nongbu Korean
          Eatery. Check out the Instagram page and DM Joy for inquiries.
        </Text>

        <ChakraLink
          to='https://www.instagram.com/ear_yeg/'
          target='_blank'
          rel='noopener noreferrer'
          fontSize='1.5rem'
          lineHeight='30px'
          color='primary'>
          @ear_yeg
        </ChakraLink>
      </VStack>
      {/* Image gallery */}
      <Grid
        w='auto'
        h='auto'
        bg='light'
        px='5vw'
        alignItems='center'
        justifyItems='center'
        gridTemplateColumns={[
          "repeat(1,  90vw)",
          "repeat(1,  90vw)",
          "repeat(2,  30vw)",
          "repeat(2,  20vw)",
        ]}
        gridTemplateRows={[
          "repeat(4,  20vw)",
          "repeat(4,  20vw)",
          "repeat(2,  30vw)",
          "repeat(2,  20vw)",
        ]}
        gap='1rem'
        p='1rem'>
        <EarImageContainer
          filename='ear-1'
          w='100%'
          h='100%'
          objectFit='cover'
          _active={{
            h: "50vh",
            w: "50vh",
            border: "1rem solid black",
            zIndex: "999",
          }}
        />

        <EarImageContainer
          filename='ear-2'
          w='100%'
          h='100%'
          objectFit='cover'
          _active={{
            h: "50vh",
            w: "50vh",
            border: "1rem solid black",
            zIndex: "999",
          }}
        />
        <EarImageContainer
          filename='ear-3'
          w='100%'
          h='100%'
          objectFit='cover'
          _active={{
            h: "50vh",
            w: "50vh",
            border: "1rem solid black",
            zIndex: "999",
          }}
        />
        <EarImageContainer
          filename='ear-4'
          w='100%'
          h='100%'
          objectFit='cover'
          _active={{
            h: "50vh",
            w: "50vh",
            border: "1rem solid black",
            zIndex: "999",
          }}
        />
      </Grid>
    </Flex>
  );
}
