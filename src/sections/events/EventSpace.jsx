import React from "react";
import { Text } from "@chakra-ui/react";

import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";

export default function EventSpace(props) {
  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row"]}
      bg="backgroundLight"
      color="dark"
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
        filename="nongbu-event-2"
        filter="brightness(0.85)"
        minW="20rem"
        objectPosition={["100%, 100%", "50%, 100%"]}
        objectFit="cover"
      />

      <SectionFlexContentContainer
        flexDirection={"column"}
        headingtext="We host all kinds of events."
        linktext="Get in touch"
        linkto="/contact"
        w={["100%", "100%", "100%", "60%"]}
        justifyContent="flex-start"
        alignItems="flex-start"
        pb="4rem"
        color="dark"
      >
        <Text variant="bodyText" maxW="36rem" zIndex="2">
          From birthday parties to low-key weddings. Our minimalist and modern
          space allow you and your guests to be the focus. Get in touch with
          some details about your event if you are interested in our space or
          services.
        </Text>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
