import React from "react";
import { Flex, Text, Heading, Box, VStack } from "@chakra-ui/react";
import ContactInfo from "@components/smallblocks/ContactInfo";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";
export default function ContactHero(props) {
  return (
    <Flex //body
      bg="backgroundDark"
      color="light"
      alignItems="center"
      position="relative"
      flexDirection={["column", "row"]}
      overflow="hidden"
      {...props}
    >
      <NongbuImageContainer
        objectPosition="0% 20%"
        position={["static", "absolute", "absolute"]}
        w={["100%", "100%", "70vw", "60vw"]}
        h={["30vh", "100%", "100%", "100%"]}
        right={["none", "0", "0"]}
        top={["none", "0", "0"]}
        zIndex="4"
        filename="kimchi-friedrice"
      />

      <Flex //Text block
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        bg="backgroundDark" //for desktop
        zIndex="5"
        px="5vw"
        py="5vh"
        gap="1rem"
        minW={["100vw", "60vw", "30vw", "30vw"]}
        h={["100%", "100vh", "100vh", "80vh"]}
      >
        <VStack gap="1rem">
          <Heading variant="mediumHeading" alignSelf="flex-start">
            Contact us
          </Heading>
          <Text variant="bodyText" maxW="24rem">
            Book a table, order takeout, inquire about private events and
            catering, ask about our menu, etc.. We're here to help!
          </Text>
          <ContactInfo alignItems="flex-start" w="100%" />
        </VStack>
      </Flex>
    </Flex>
  );
}
