import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";

export default function AboutHero(props) {
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
      gap="4rem"
      {...props}
    >
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
            "mediumHeading",
            "largeHeading",
            "largeHeading",
          ]}
        >
          It is our desire to have our guests leave every NongBu experience
          happy, full, and a little more knowledgeable about our little country.
        </Heading>
      </SectionFlexContentContainer>

      <Flex position="relative" gap={["0.5rem", "1rem", "1.5rem", "2rem"]}>
        <NongbuImageContainer
          minW="30vw"
          w={["100%", "100%", "30vw", "30vw"]}
          h={["100%", "100%", "30vw", "30vw"]}
          filename="nongbu-chef"
          name="chef plating food"
        />

        <NongbuImageContainer
          minW={["100vw", "100vw", "40vw", "40vw"]}
          w={["100%", "100%", "40vw", "40vw"]}
          h={["100%", "100%", "30vw", "30vw"]}
          filename="nongbu-entrance"
          name="nongbu entrance"
        />

        <NongbuImageContainer
          minW="30vw"
          w={["100%", "100%", "30vw", "30vw"]}
          h={["100%", "100%", "30vw", "30vw"]}
          filename="steak-bulgogi"
          name="Steak bulgogi"
        />
      </Flex>
    </SectionFlexContainer>
  );
}
