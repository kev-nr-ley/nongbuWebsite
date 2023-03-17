import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/SectionFlexContentContainer";
import SectionFlexContainer from "@components/SectionFlexContainer";
import NongbuImageContainer from "@components/NongbuImageContainer";
export default function About(props) {
  const { colors } = useTheme();

  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row"]}
      bg={colors.backgroundLight}
      color={colors.dark}
      {...props}>
      <NongbuImageContainer
        position='relative'
        h={["auto", "auto", "auto", "80vh"]}
        name='table with korean dishes and makgeolli'
        filename='nongbu-2'
        p='5vw'
        // border='4px'
        maxW='44rem'
      />

      <SectionFlexContentContainer
        headingtext='Welcome to NongBu.'
        linktext='View Menu'
        linkto='/menu'
        linkalign='flex-end'>
        <Text variant='bodyText' maxW={["100%", "100%", "100%", "20rem"]}>
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
