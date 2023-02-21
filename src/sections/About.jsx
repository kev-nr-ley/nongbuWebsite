import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import BigMenuItem from "../components/BigMenuItem";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function About() {
  const { colors, fonts } = useTheme();

  return (
    <Flex //section container
      justifyContent={"center"}
      alignItems={"top"}
      flexDirection={["column", "column", "row", "row"]}
      p={[0, 0, "5vw", "5vw"]}
      gap='5vw'
      m='5vh'
      bg={colors.brand.backgroundLight}
      color={colors.brand.fontDark}>
      <Box //image container
        w={["100%", "100%", "30%", "30%"]}
        h={["40vh", "40vh", "auto", "auto"]}>
        <Image src='/src/assets/images/nongbu-2.jpg'></Image>
      </Box>

      <Flex //section content
        flexDirection={"column"}
        w={["100%", "100%", "30%", "20%"]}
        h='70vh'
        justifyContent={"center"}
        alignItems={"center"}
        gap='5vh'>
        <Heading variant='h3' w='100%' whiteSpace={"wrap"}>
          Welcome to NongBu.
        </Heading>

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

        <BigMenuItem mt='500px' justifySelf='flex-end' bg='red'>
          <Text
            fontSize={fonts.heading.fontSize}
            color={colors.brand.highlight}>
            Our Menu <ArrowForwardIcon fontSize={fonts.heading.fontSizeXl} />
          </Text>
        </BigMenuItem>
      </Flex>
    </Flex>
  );
}

export default About;
