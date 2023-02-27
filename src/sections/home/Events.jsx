import React from "react";

import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import BigMenuItem from "@components/BigMenuItem";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function Events() {
  const { colors, fonts } = useTheme();
  const [gradientEndPercent, setGradientEndPercent] = React.useState("40%");
  const [gradientEnd, setGradientEnd] = React.useState(
    "brand.backgroundDark50"
  );
  const [gradientStart, setGradientStart] = React.useState(
    "brand.backgroundDark"
  );

  return (
    <Flex //section container,
      flexDirection={["column3", "column", "row-reverse", "row-reverse"]}
      position='relative'
      alignItems={"center"}
      bg={colors.backgroundDark}
      color={colors.light}
      border='100px'
      h={["100vh", "100vh", "70vh"]}
      overflow='hidden'>
      <Box //image container
        w={["100vw", "100vw", "75vw", "75vw"]}
        h={["30vh", "30vh", "80vh", "80vh"]}>
        <Image zIndex={1} src='/src/assets/images/nongbu-3.jpg'></Image>
      </Box>

      <Flex //section content
        flexDirection={"column"}
        justifyContent='center'
        justifySelf='center'
        alignself='center'
        gap='2vh'
        w={["80%", "80%", "30%", "30%"]}
        h={["auto", "auto", "100%", "100%"]}
        position='absolute'
        p={["0vh 5vw", "0vh 5vw", "10vh 5vw", "10vh 5vw"]}
        // ml='5vw'
        top={["40%", "40%", "0"]}
        left='0'>
        <Heading
          variant='sectionHeading'
          color={colors.light}
          whiteSpace={"nowrap"}>
          Use our space and services.
        </Heading>

        <Text>
          Are you looking for a private and modern space for your event? Do you
          have guests to feed? We might be able to help with your venue and
          catering needs.
        </Text>

        <BigMenuItem>
          <Text
            color={colors.brand.highlight}
            fontSize={fonts.heading.fontSize}>
            Get in touch
            <ArrowForwardIcon fontSize={fonts.heading.fontSizeXl} />
          </Text>
        </BigMenuItem>
      </Flex>
    </Flex>
  );
}

export default Events;
