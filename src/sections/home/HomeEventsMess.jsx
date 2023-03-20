import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";

import NongbuImageContainer from "@components/layout/NongbuImageContainer";

export default function HomeEventsMess(props) {
  const { colors } = useTheme();

  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row-reverse"]}
      bg={colors.backgroundDark}
      color={colors.light}
      justifyContent='space-between'
      h='fit-content'
      position='relative'
      bg='green'
      {...props}>
      <NongbuImageContainer
        bg={colors.backgroundDark}
        overflow='hidden'
        position='relative'
        top='0'
        right='0'
        filename='nongbu-3'
        h='90vh'
        objectFit='cover'
        objectPosition={["100%, 100%", "50%, 100%", "50%, 100%", "50%, 100%"]}
        zIndex='9'
      />

      {/* Move this more to the center, try to overlap iamge on desktop */}
      <SectionFlexContentContainer
        flexDirection={"column"}
        headingtext='Use our space and services.'
        linktext='Get in touch'
        px='10vw'
        linkto='/events'
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
        w='100%'
        h='100%'
        justifyContent='center'
        alignItems='flex-start'
        // pl={["5vw", "5vw", "5vw", "5vw"]}
        position='absolute'
        top='0'
        left='0'
        zIndex='9'
        color={colors.light}>
        <Text
          variant='bodyText'
          maxW='34rem'
          textShadow='2px 2px 2px rgba(0,0,0,0.5)'
          zIndex='2'>
          Are you looking for a private and modern space for your event? Do you
          have guests to feed? We might be able to help with your venue and
          catering needs.
        </Text>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
