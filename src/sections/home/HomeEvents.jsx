import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";
export default function HomeEventsMess(props) {
  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row-reverse"]}
      bg="backgroundDark"
      color="light"
      justifyContent="space-between"
      h="fit-content"
      position="relative"
      {...props}
    >
      <NongbuImageContainer
        bg="backgroundDark"
        overflow="hidden"
        position="relative"
        top="0"
        right="0"
        filename="nongbu-3"
        h="90vh"
        objectFit="cover"
        objectPosition={["100%, 100%", "50%, 100%", "50%, 100%", "50%, 100%"]}
        zIndex="9"
      />

      <SectionFlexContentContainer
        flexDirection={"column"}
        headingtext="Use our space and services."
        linktext="Get in touch"
        px="5vw"
        linkto="/events"
        bg={[
          `linear-gradient(90deg, 
          #12212b 00%,  
          #12212b80 99%, 
          #00000000 100%)`,
          `linear-gradient(90deg, 
            #12212b 00%,  
            #12212b80 99%, 
            #00000000 100%)`,
          `linear-gradient(90deg, 
              #12212b 10%,  
              #12212b80 60%, 
              #00000000 100%)`,
          `linear-gradient(90deg, 
                #12212b 10%,  
                #12212b80 50%, 
                #00000000 100%)`,
        ]}
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="0"
        left="0"
        gap="1rem"
        zIndex="9"
      >
        <Text
          variant="smallText"
          maxW="34rem"
          textShadow="2px 2px 2px rgba(0,0,0,0.5)"
          zIndex="2"
          color="light"
        >
          Are you looking for a private and modern space for your event? Do you
          have guests to feed? We might be able to help with your venue and
          catering needs.
        </Text>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
