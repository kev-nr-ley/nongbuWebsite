import React from "react";
import { Flex, Text, Grid, Box, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import EarImageContainer from "@components/layout/EarImageContainer";
import { InstagramEmbed } from "react-social-media-embed";
import { useState, useEffect } from "react";
import ChakraLink from "@components/ChakraLink";
import { FaInstagram } from "react-icons/fa";
import EarLogoLink from "@components/links/EarLogoLink";
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
      minH='100vh'
      h='fit-content'
      alignItems='center'
      justifyContent='space-between'>
      {/* Text */}
      <Box
        pl='5vw'
      >

        <Heading color='light' px='0'>
          ear.
        </Heading>
        <Text color={colors.light} mt='1rem' lineHeight='30px'>
          Ear YEG is Joy Park’s small batch bakery with a home at Nongbu Korean
          Eatery. Check out the Instagram page and DM Joy for inquiries.
        </Text>

        <ChakraLink
          href='https://www.instagram.com/ear_yeg/'
          target='_blank'
          rel='noopener noreferrer'
          fontSize='1.5rem'
          lineHeight='30px'
          color='primary'>
          @ear_yeg
        </ChakraLink>

        {/* Form */}
        {/* <Flex
          as='form'
          w='100%'
          flexDirection='column'
          justifyContent='flex-start'>
          <FormInputContainer
            id='name'
            label='Name'
            inputtype='text'
            inputbg='white'
            isRequired
            placeholder='Jahn Doe'
          />
          <FormInputContainer
            id='email'
            label='Email'
            inputtype='email'
            inputbg='white'
            isRequired
            placeholder='Joy@Park.ca'
          />
          <FormInputContainer
            id='phone'
            label='Phone'
            inputtype='tel'
            inputbg='white'
            isRequired
            placeholder='780 802 2777'
          />
          <FormInputContainer
            id='message'
            label='Message'
            inputtype='textarea'
            inputbg='white'
            isRequired
            placeholder='One million cakes please'
          />

          <Button type='submit' my='1rem' bg={colors.primary}>
            Submit
          </Button>
        </Flex> */}
      </Box>

      {/* Image gallery */}
      <Grid
        // border='2px solid red'
        bg='light'
        p='1rem'
        gridTemplateColumns='repeat(2,  25vw)'
        gridTemplateRows='repeat(2, 25vw)'
        gap='1rem'>
        <EarImageContainer
          filename='ear-1'
          w='100%'
          h='100%'
          objectFit='cover'
        />

        <EarImageContainer
          filename='ear-2'
          w='100%'
          h='100%'
          objectFit='cover'
        />
        <EarImageContainer
          filename='ear-3'
          w='100%'
          h='100%'
          objectFit='cover'
        />
        <EarImageContainer
          filename='ear-4'
          w='100%'
          h='100%'
          objectFit='cover'
        />
      </Grid>
    </Flex>
  );
}
