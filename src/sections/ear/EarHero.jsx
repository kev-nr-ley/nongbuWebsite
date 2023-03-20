import React from "react";
import { Flex, Text, Grid, Box, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import EarImageContainer from "@components/layout/EarImageContainer";
import { InstagramEmbed } from "react-social-media-embed";
import { useState, useEffect } from "react";
export default function EarHero(props) {
  const { colors } = useTheme();

  return (
    <Flex p='1rem' gap='1rem' border='2px solid limegreen'>
      <Box border='2px solid red' p='1rem'>
        <Heading fontSize='4rem' bg='blue.200'>
          {" "}
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
      </Box>
      <Grid
        border='2px solid red'
        p='1rem'
        gridTemplateColumns='repeat(2, 500px)'
        gridTemplateRows='repeat(2, 500px)'
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
