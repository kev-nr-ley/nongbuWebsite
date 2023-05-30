import React from "react";
import { Text } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";

import NongbuImageContainer from "@components/layout/NongbuImageContainer";

export default function HomeAbout(props) {
  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row"]}
      bg="backgroundLight"
      color="dark"
      alignItems="center"
      justifyContent="center"
      px="5vw"
      gap={["0", "0", "0", "5vw"]}
      {...props}
    >
      <NongbuImageContainer
        position="relative"
        h={["auto", "auto", "auto", "80vh"]}
        name="nongbu entrance"
        filename="nongbu-entrance"
        overflow="hidden"
        pt="5vw"
        pb={["0", "0", "0", "5vw"]}
        objectFit="cover"
        maxW={["100%", "100%", "100%", "50%"]}
        // aspectRatio=''
        h='auto'
        filter="blur(1px)"
      />

      <SectionFlexContentContainer
        headingtext="Welcome to NongBu."
        linktext="View Menu"
        linkto="/menu"
        w={["100%", "100%", "100%", "auto"]}
        justifyContent="flex-start"
        alignItems="flex-start"
        pb="4rem"
      >
        <Text maxW={["100%", "100%", "80%", "24rem"]} alignSelf="flex-start">
          NongBu resurrects Korean cuisine from bygone generations and
          reintroduces it to the Canadian and Korean palate alike.
          <br /> <br />
          At NongBu, the menu is always evolving, always reaching back into
          childhood memory and rustic, rural Korean dishes.
          <br /> <br />
          The result is a menu as nourishing and comforting as it is pioneering
          and imaginative.
        </Text>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
