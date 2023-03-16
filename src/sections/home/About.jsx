import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/SectionFlexContentContainer";
import SectionFlexContainer from "@components/SectionFlexContainer";
import NongbuImageContainer from "@components/NongbuImageContainer";
export default function About(props) {
  const { colors } = useTheme();

  return (
    <SectionFlexContainer
      bg={colors.backgroundLight}
      color={colors.dark}
      {...props}>

      <NongbuImageContainer
        position='relative'
        w={["100vw", "35vw"]}
        h={["30vh", "80vh"]}
        py='5vh'
        name='table with korean dishes and makgeolli'
        filename='nongbu-2'
      />

      <SectionFlexContentContainer
        headingtext='Welcome to NongBu.'
        linktext='View Menu'
        linkto='/menu'
        alignItems='center'
        >
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
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
