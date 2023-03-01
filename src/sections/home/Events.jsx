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
      flexDirection={["column", "row-reverse", "row-reverse", "row-reverse"]}
      bg={colors.backgroundDark}
      color={colors.light}
      gap={["0", "12", "12", "12"]}
      h={["auto", "80vh", "80vh", "80vh"]}
      pb='10vh'
      overflow='hidden'>
      <Box //image container
        w={["100vw", "auto", "70vw", "70vw"]}
        h={["30vh", "80vh", "80vh", "80vh"]}
        overflow='hidden'>
        <Image
          h='100%'
          src='/src/assets/images/nongbu-3.jpg'
          objectPosition={["0% 50%", "20% 50%", "0% 0%", "0% 0%"]}
          objectFit='cover'></Image>
      </Box>

      <Flex //section content
        flexDirection={"column"}
        justifyContent='center'
        justifySelf='center'
        alignself='center'
        gap='8'
        mt='8'
        px='5vw'
        w={["100%", "30%", "30%", "30%"]}
        minW='300px'
        // pb='10vh'
        h={["auto", "100%", "100%", "100%"]}>
        <Heading variant='sectionHeading' color={colors.light}>
          Use our space and services.
        </Heading>

        <Text variant='bodyText'>
          Are you looking for a private and modern space for your event? Do you
          have guests to feed? We might be able to help with your venue and
          catering needs.
        </Text>

        <BigMenuItem>
          <Text
            color={colors.brand.highlight}
            fontSize={fonts.heading.fontSize}
            whiteSpace='nowrap'
            >
            Get in touch
            <ArrowForwardIcon fontSize={fonts.heading.fontSizeXl} />
          </Text>
        </BigMenuItem>
      </Flex>
    </Flex>
  );
}

export default Events;
