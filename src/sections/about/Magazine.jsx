import React from "react";

import { Flex, Heading, Text, Grid, Image } from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";

function Magazine(props) {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection={["column-reverse", "column-reverse", "row"]}
      bg={colors.backgroundDark}
      h={["auto", "auto", "80vh", "80vh"]}
      w='100vw'
      maxW='100%'
      overflow='hidden'
      justifyContent={["flex-start", "center"]}
      alignItems={["flex-start", "center"]}
      gap='5vw'
      p='5vw'
      {...props}>
      <Grid color={colors.light} my='2rem' textAlign={["left", "right", "right"]}>
        <Heading as='h3' variant='mediumHeading'>
          Awards
        </Heading>

        <Heading as='h3' variant='smallHeading' mt='4' mb='2'>
          Edify Edmonton (Avenue Magazine)
        </Heading>
        <Text>1st, Best New Restaurant, 2016</Text>
        <Text>1st, Best Korean Restaurant, 2016</Text>
        <Text>1st, Best Korean Restaurant, 2017</Text>
        <Text>Honourable Mention,</Text>
        <Text>Best Overall Restaurant, 2018</Text>

        <Heading as='h3' variant='smallHeading' mt='4' mb='2'>
          Vue Weekly
        </Heading>
        <Text> 1st, Best Korean Restaurant, 2016</Text>
        <Text>1st, Best Korean Restaurant, 2017</Text>
        <Text>1st, Best Korean Restaurant, 2018</Text>

        <Heading as='h3' variant='smallHeading' mt='4' mb='2'>
          Where Magazine
        </Heading>
        <Text> 2nd, Best New Restaurant, 2016</Text>
      </Grid>

      <Image
        src='/images/nongbu-magazine.webp'
        w={["100%", "320px", "440px", "480px"]}
        h={["auto"]}
      />
    </Flex>
  );
}

export default Magazine;
