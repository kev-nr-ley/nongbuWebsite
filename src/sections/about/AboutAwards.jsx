import React from "react";
import { VStack, Heading, Text, Image } from "@chakra-ui/react";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";

export default function AboutAwards(props) {
  return (
    <SectionFlexContainer
      flexDirection={[
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "row",
      ]}
      bg="backgroundDark"
      // h={["auto", "auto", "auto", "auto"]}
      w="100vw"
      maxW="100%"
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
      gap="5vw"
      pt='5vw'
      pb='5vw'
      {...props}
    >
      <VStack color="light" my="1rem">
        <Heading variant="mediumHeading" borderBottom="2px solid white">
          Awards
        </Heading>

        <VStack pt="1rem" textAlign="center">
          <Heading variant="smallHeading">
            Edify Edmonton <br /> (Avenue Magazine)
          </Heading>
          <Text>1st, Best New Restaurant, 2016</Text>
          <Text>1st, Best Korean Restaurant, 2016</Text>
          <Text>1st, Best Korean Restaurant, 2017</Text>
          <Text>Honourable Mention,</Text>
          <Text>Best Overall Restaurant, 2018</Text>
        </VStack>

        <VStack pt="1rem" textAlign="center">
          <Heading variant="smallHeading">Vue Weekly</Heading>
          <Text> 1st, Best Korean Restaurant, 2016</Text>
          <Text>1st, Best Korean Restaurant, 2017</Text>
          <Text>1st, Best Korean Restaurant, 2018</Text>
        </VStack>

        <VStack pt="1rem" textAlign="center">
          <Heading variant="smallHeading">Where Magazine</Heading>
          <Text> 2nd, Best New Restaurant, 2016</Text>
        </VStack>
      </VStack>

      <Image
        src="/images/nongbu-magazine.webp"
        w={["100%", "100%", "24rem", "32rem"]}
        h="auto"
      />
    </SectionFlexContainer>
  );
}
