import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function About() {
  const { colors, fonts } = useTheme();

  return (
    <Flex //section container
      justifyContent={["flex-start", "flex-start", "center", "center"]}
      alignItems={"center"}
      flexDirection={["column", "column", "row", "row"]}
      p={["0vw", "0vw", "5vw", "5vw"]}
      gap='5vw'
      bg={colors.backgroundLight}
      color={colors.brand.fontDark}>
      <Box //image container
        w={["100%", "100%", "30%", "30%"]}
        h={["40vh", "40vh", "auto", "auto"]}>
        <Image src='/src/assets/images/nongbu-2.jpg'></Image>
      </Box>

      <Flex //section content
        flexDirection={"column"}
        w={["100%", "50%", "30%", "25%"]}
        justifyContent={"center"}
        alignItems={"center"}
        gap='5'
        p={["5vh 10vw", "5vh 0vw", "0", "0"]}
        bg={colors.backgroundLight}>
        <Heading variant='sectionHeader' w='100%' whiteSpace={"wrap"}>
          Welcome to NongBu.
        </Heading>

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
