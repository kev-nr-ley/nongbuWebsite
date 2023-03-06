import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
function About(props) {
  const { colors } = useTheme();

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
      color={colors.brand.fontDark}
      {...props}>
      <Box w={["100vw", "35vw"]} h={["30vh", "80vh"]}>
        <Image zIndex={1} src='/images/nongbu-2.webp' objectFit='cover'></Image>
      </Box>

      <Flex //section content
        flexDirection={"column"}
        height='100%'
        w={["100%", "50vw", "50vw", "50vw"]}
        maxW={["auto", "autko", "320px"]}
        px={["5vw", "0"]}
        gap='8'
        pb='10vh'>
        <Heading variant='mediumHeading'>Welcome to NongBu.</Heading>

        <Text>
          NongBu resurrects Korean cuisine from bygone generations and
          reintroduces it to the Canadian and Korean palate alike.
        </Text>

        <Text>
          At NongBu, the menu is always evolving, always reaching back into
          childhood memory and rustic, rural Korean dishes.
        </Text>

        <Text>
          The result is a menu as nourishing and comforting as it is pioneering
          and imaginative.
        </Text>

        <ChakraLinkArrow to='/menu' name='View Menu' />
      </Flex>
    </Flex>
  );
}

export default About;
