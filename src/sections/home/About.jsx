import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function About() {
  const { colors, fonts } = useTheme();

  return (
    <Flex //section container
      justifyContent={["flex-start", "center", "center", "center"]}
      alignItems={["center", "center", "flex-start"]}
      flexDirection={["column", "column", "row", "row"]}
      p={["0vw", "0vw", "5vw", "5vw"]}
      gap='5vw'
      bg={colors.backgroundLight}
      // bg={["red", "green", "blue", "yellow"]}
      color={colors.brand.fontDark}>
      <Box //image container
        w={["100%", "100%", "40vh", "40vh"]}
        h={["30vh", "30vh", "60vh", "60vh"]}>
        <Image src='/src/assets/images/nongbu-2.jpg'></Image>
      </Box>

      <Flex //section content
        flexDirection={"column"}
        w={["100%", "50%", "30%", "30%"]}
        gap='5'>
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
