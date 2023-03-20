import React from "react";
import { Flex, Text, Grid, Box, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import EarImageContainer from "@components/layout/EarImageContainer";
import { InstagramEmbed } from "react-social-media-embed";
import { useState, useEffect } from "react";
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
      p='1rem'
      gap='1rem'
      border='2px solid limegreen'
      h='200vh'
      position='relative'>

      {/* Text */}
      <Box border='2px solid red' p='1rem'
      w='400px'
      >
        <EarLogoLink />
        <Heading fontSize='4rem' bg='blue.200'>
          Ear We Are
        </Heading>
        <Text fontFamily='serif' useRef='ref' px='1rem' bg='green.200' h='auto'>
          We are ear. Me and my bakery, baking it up. The thing about good
          baking is that it comes not from the oven, but from the ❤. Baking is
          more than a choice, its a lifestyle. Complete, organic, ever changing,
          never moving. Forward we go! Flour in hand, pushing the envelope of
          culinary flakiness to its zenith. Lark! Ho! Avast ye friends! Take
          sail on the high custard sea!
        </Text>

        <Text>Open Monthly! you can email or call or something.</Text>

        <Text>-JYP, out</Text>

{/* Form */}
        <Flex
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
        </Flex>
      </Box>

{/* Image gallery */}
      <Grid
        border='2px solid red'
        gridTemplateColumns='repeat(2, 50%)'
        gridTemplateRows='repeat(2, auto)'
        w='100%'
        gap='1rem'
        h='40vh'
        position='sticky'
        top='10vh'
        right='0'>
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
