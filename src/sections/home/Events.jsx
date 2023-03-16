import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/SectionFlexContentContainer";
import SectionFlexContainer from "@components/SectionFlexContainer";
import NongbuImageContainer from "@components/NongbuImageContainer";

function Events(props) {
  const { colors } = useTheme();

  return (


    <SectionFlexContainer
    flexDirection={["column", "column", "column", "row-reverse"]}
    bg={colors.backgroundDark}
    color={colors.light}
    // h={["auto", "80vh", "80vh", "80vh"]}
    // flexWrap='wrap'
    justifyContent='center'
    alignItems='center'
    px='5vw'
    gap={["0", "0", "0", "5vw"]}
    {...props}>
    <NongbuImageContainer
      overflow='hidden'
      pt='5vw'
      pb={["0", "0", "0", "5vw"]}
      // p={["5vw 5vw 0", "5vw 5vw 0", "5vw 5vw 0", "5vw"]}
      filename='nongbu-3'
      // w={["100%", "100%", "auto", "65vw"]}
      // h={["auto", "auto", "100%", "100%"]}
      // maxH={['40vh' , '40vh', '100%', '100%']}
      filter='brightness(0.85)'
      minW='20rem'
      objectPosition={["100%, 100%", "50%, 100%"]}
      objectFit='cover'
    />

    {/* Move this more to the center, try to overlap iamge on desktop */}
    <SectionFlexContentContainer
      flexDirection={"column"}
      headingtext='Use our space and services.'
      linktext='Get in touch'
      linkto='/events'
      w={["100%", "100%", "100%", "60%"]}
      justifyContent='flex-start'
      alignItems='flex-start'
      pb='4rem'
      color={colors.light}>
      <Text
        variant='bodyText'
        // maxW='32rem'
        // w={["100%", "80%", "80%", "20rem"]}
        maxW='36rem'
        zIndex='2'>
        Are you looking for a private and modern space for your event? Do
        you have guests to feed? We might be able to help with your venue
        and catering needs.
      </Text>
    </SectionFlexContentContainer>
  </SectionFlexContainer>


    // <SectionFlexContainer
    //   flexDirection={["column", "column", "row-reverse", "row-reverse"]}
    //   bg={colors.backgroundDark}
    //   color={colors.light}
    //   // h={["auto", "80vh", "80vh", "80vh"]}
    //   // flexWrap='wrap'
    //   justifyContent='center'
    //   alignItems='center'
    //   // px='5vw'
    //   {...props}>
    //   <NongbuImageContainer
    //     overflow='hidden'
    //     // py={["0", "0", "5vw"]}
    //     p='5vw'
    //     filename='nongbu-3'
    //     // w={["100%", "100%", "auto", "65vw"]}
    //     // h={["auto", "auto", "100%", "100%"]}
    //     // maxH={['40vh' , '40vh', '100%', '100%']}
    //     filter='brightness(0.85)'
    //     minW='20rem'
    //     objectPosition={["100%, 100%", "50%, 100%"]}
    //     objectFit='cover'
    //   />


    //   {/* Move this more to the center, try to overlap iamge on desktop */}
    //   <SectionFlexContentContainer
    //     flexDirection={"column"}
    //     headingtext='Use our space and services.'
    //     linktext='Get in touch'
    //     linkto='/events'
    //     w={["100%", "100%", "45%"]}
    //     justifyContent='flex-start'
    //     alignItems='flex-start'
    //     color={colors.light}>
    //     <Text
    //       variant='bodyText'
    //       maxW='32rem'
    //       w={["100%", "80%", "20rem"]}
    //       zIndex='2'>
    //       Are you looking for a private and modern space for your event? Do you
    //       have guests to feed? We might be able to help with your venue and
    //       catering needs.
    //     </Text>
    //   </SectionFlexContentContainer>
    // </SectionFlexContainer>
  );
}

export default Events;
