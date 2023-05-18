import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";

import NongbuImageContainer from "@components/layout/NongbuImageContainer";

export default function AboutHero(props) {
  const { colors } = useTheme();
  return (
    <SectionFlexContainer
      flexDirection="column"
      position="relative"
      h="fit-content"
      w="100vw"
      maxW="100%"
      bg="backgroundDark"
      color="light"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      gap="5vh"
      {...props}
    >
      {/* Align text to left, inline with left edge of image */}
      <SectionFlexContentContainer
        flexDirection="column"
        h="fit-content"
        w={["100%", "100%", "80%", "60%"]}
        maxW="100vw"
        mt="5vh" //need for mobile banner
        {...props}
      >
        <Heading
          variant={[
            "mediumHeading",
            "largeHeading",
            "largeHeading",
            "largeHeading",
          ]}
        >
          It is our desire to have our guests leave every NongBu experience
          happy, full, and a little more knowledgeable about our little country.
        </Heading>
      </SectionFlexContentContainer>

      {/* One picture for mobile and tablet1 */}
      {/* fix resizing on small screen */}
      <Flex
        position="relative"
        // left={["0", "0", "10%", "10%"]}
        gap={["0", "0", "4", "4"]}
      >
        <NongbuImageContainer
          minW="30vw"
          w={["100%", "100%", "30vw", "30vw"]}
          h={["100%", "100%", "30vw", "30vw"]}
          filename="nongbu-chef"
          name="chef plating food"
          // flexShrink='1'
        />

        <NongbuImageContainer
          minW={["100vw", "100vw", "40vw", "40vw"]}
          w={["100%", "100%", "40vw", "40vw"]}
          h={["100%", "100%", "30vw", "30vw"]}
          filename="nongbu-entrance"
          name="nongbu-entrance"
          // flexShrink='0'
          // top='-6vh'
        />

        <NongbuImageContainer
          minW="30vw"
          w={["100%", "100%", "30vw", "30vw"]}
          h={["100%", "100%", "30vw", "30vw"]}
          filename="steak-bulgogi"
          name="Steak bulgogi"
          // flexShrink='1'
        />
      </Flex>
    </SectionFlexContainer>
  );
}
