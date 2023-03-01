import React from "react";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Link, Text, Grid, Image } from "@chakra-ui/react";
import ImageContainer from "@components/ImageContainer";

import { useTheme } from "@chakra-ui/react";

function Magazine() {
  const { colors, fonts } = useTheme();
  return (
    <Flex
      // position='relative'
      flexDirection={["column-reverse", "column-reverse", "row"]}
      bg={colors.backgroundDark}
      h={["auto", "auto", "80vh", "80vh"]}
      w='100vw'
      overflow='hidden'
      justifyContent='flex-start'
      alignItems='flex-start'
      gap='5vw'
      p='5vw'>
      <Grid color={colors.light} textAlign={["left", "right", "right"]}>
        <Heading as='h3' variant='sectionHeading' fontSize='24px'>
          Awards
        </Heading>

        <Heading as='h4' variant='bodyText' mt='4' mb='2'>
          Edify Edmonton (Avenue Magazine)
        </Heading>
        <Text variant='bodyText'>1st, Best New Restaurant, 2016</Text>
        <Text variant='bodyText'>1st, Best Korean Restaurant, 2016</Text>
        <Text variant='bodyText'>1st, Best Korean Restaurant, 2017</Text>
        <Text variant='bodyText'>Honourable Mention,</Text>
        <Text variant='bodyText'>Best Overall Restaurant, 2018</Text>

        <Heading as='h4' variant='bodyText' mt='4' mb='2'>
          Vue Weekly
        </Heading>
        <Text variant='bodyText'> 1st, Best Korean Restaurant, 2016</Text>
        <Text variant='bodyText'>1st, Best Korean Restaurant, 2017</Text>
        <Text variant='bodyText'>1st, Best Korean Restaurant, 2018</Text>

        <Heading as='h4' variant='bodyText' mt='4' mb='2'>
          Where Magazine
        </Heading>
        <Text variant='bodyText'> 2nd, Best New Restaurant, 2016</Text>
      </Grid>

      <Image
        src='/src/assets/images/nongbu-magazine.jpg'
        w={["100%", "320px", "440px", "480px"]}
        h={['auto']}

        // minW='220px'
        // maxW='500px'
      />
    </Flex>
  );
}

export default Magazine;