import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function About() {
  const { colors, fonts } = useTheme();

  return (
    <Flex //section container
      alignItems={["center", "center"]}
      flexDirection={["column", "row", "row", "row"]}
      position='relative'
      justifyContent={"center"}
      h={["100%", "auto", "auto", "auto"]}
      w='100vw'
      maxW='100%'
      p={["0", "5vw", "5vw", "5vw"]}
      pb='10vh'
        gap='8'
      bg={colors.backgroundLight}
      color={colors.brand.fontDark}>
      <Box w={["100vw", "35vw"]} h={["30vh", "80vh"]}>
        <Image zIndex={1} src='/images/nongbu-2.webp' objectFit='cover'></Image>
      </Box>

      <Flex //section content
        flexDirection={"column"}
        height='100%'
        w={["100%", "50vw", "50vw", "50vw"]}
        // maxW='320px'
        maxW={['100%, 320px']}
        px={['5vw', '0']}
        gap='8'
        // px={["5vw", "0vw", "0vw", "0vw"]}
        pb='10vh'>
        <Heading variant='sectionHeading'>Welcome to NongBu.</Heading>

        <Text variant='bodyText'>
          NongBu resurrects Korean cuisine from bygone generations and
          reintroduces it to the Canadian and Korean palate alike.
        </Text>

        <Text variant='bodyText'>
          At NongBu, the menu is always evolving, always reaching back into
          childhood memory and rustic, rural Korean dishes.
        </Text>

        <Text variant='bodyText'>
          The result is a menu as nourishing and comforting as it is pioneering
          and imaginative.
        </Text>

        <Link variant='sectionLink'>
          Our Menu <ArrowForwardIcon fontSize={fonts.iconSizeMd} />
        </Link>
      </Flex>
    </Flex>
  );
}

export default About;
