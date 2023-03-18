import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";

import NongbuImageContainer from "@components/layout/NongbuImageContainer";

export default function HomeAbout(props) {
  const { colors } = useTheme();

  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row"]}
      bg={colors.backgroundLight}
      color={colors.dark}
      px='5vw'
      gap={["0", "0", "0", "5vw"]}
      {...props}>
      <NongbuImageContainer
        position='relative'
        h={["auto", "auto", "auto", "80vh"]}
        name='table with korean dishes and makgeolli'
        filename='nongbu-2'
        // p='5vw'
        pt='5vw'
        pb={["0", "0", "0", "5vw"]}  

        // border='4px'
        objectFit='cover'
        maxW='44rem'
      />

      <SectionFlexContentContainer
        headingtext='Welcome to NongBu.'
        linktext='View Menu'
        linkto='/menu'
        w={["100%", "100%", "100%", "60%"]}
        justifyContent='flex-start'
        alignItems='flex-start'
        pb='4rem'
        px='0'
        >
        <Text variant='bodyText' 
        maxW={["100%", "100%", "80%", "20rem"]}
        // maxW='36rem'
        >
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
