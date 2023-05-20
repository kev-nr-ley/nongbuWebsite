import React from "react";
import { Text } from "@chakra-ui/react";

import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";

export default function EventServices(props) {
  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row-reverse"]}
      bg="backgroundDark"
      color="light"
      justifyContent="center"
      alignItems="center"
      px="5vw"
      gap={["0", "0", "0", "5vw"]}
      {...props}
    >
      <NongbuImageContainer
        overflow="hidden"
        pt="5vw"
        pb={["0", "0", "0", "5vw"]}
        filename="nongbu-event-1"
        filter="brightness(0.85)"
        minW="20rem"
        objectPosition={["100%, 100%", "50%, 100%"]}
        objectFit="cover"
      />

      <SectionFlexContentContainer
        flexDirection={"column"}
        headingtext="Use our space and services."
        linktext="Get in touch"
        linkto="/contact"
        w={["100%", "100%", "100%", "60%"]}
        justifyContent="flex-start"
        alignItems="flex-start"
        pb="4rem"
        color="light"
      >
        <Text variant="bodyText" maxW="36rem" zIndex="2">
          Are you looking for a private and modern space for your event? Do you
          have guests to feed? We might be able to help with your venue and
          catering needs.
        </Text>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
