import React from "react";
import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import LogoLink from "@components/LogoLink";
import { useTheme } from "@chakra-ui/react";
import ImageContainer from "@components/ImageContainer";
import SectionFlexContentContainer from "@components/SectionFlexContentContainer";
import SectionFlexContainer from "@components/SectionFlexContainer";
import NongbuImageContainer from "@components/NongbuImageContainer";

export default function OrderMain(props) {
  const { colors } = useTheme();
  return (
    <>
      {" "}
      <SectionFlexContainer //section container
        flexDirection={["column", "column", "column", "row"]}
        bg={colors.backgroundDark} //section container,
        color={colors.light}
        position='relative'
        justifyContent={"space-between"}
        alignItems='center'
        p='5vw'
        gap='5vw'
        {...props}>
        <NongbuImageContainer
          // h={["30vh", "40vh", "auto", "30%"]}
          w='100%'
          maxW={["100%", "20rem", "100%", "40%"]}
          filename='nongbu-4'
          name='plate of ddeokkbokki'
          pt='5vh'
          pb={["0", "0", "0", "5vw"]}
        />

        <SectionFlexContentContainer
          flexDirection={"column"}
          headingtext='Get NongBu to-go or delivered.'
          w={["100%", "100%", "100%", "60%"]}
          justifyContent='flex-start'
          gap='1rem'
          alignItems='flex-start'
          // headingvariant='heroHeading'
          pb='4rem'
          // bg='red'
          color={colors.light}>
          <Text
            variant='bodyText'
            // maxW='32rem'
            // w={["100%", "80%", "80%", "20rem"]}
            zIndex='2'>
            Look at our menu and give us a call to pick up your order, or get
            NongBu delivered right to your door.
          </Text>

          <Flex
            flexDirection={["column", "column", "row"]}
            gap='2rem'
            bg={colors.backgroundDark}
            mt='1rem'
            pb='5vw'
            alignItems='flex-start'
            justifyContent='flex-start'
            px='1rem'>
            <LogoLink
              to='https://www.skipthedishes.com/nongbu-korean-eatery'
              name='Skip The Dishes'
              src='skipthedishes.webp'
              w={["8rem", "12rem", "12rem", "14rem"]}
            />
            <LogoLink
              to='https://www.ubereats.com/ca/store/nongbu-korean-eatery-104-st/1Y-WFnTDTZ2yh5xB01bLaw'
              name='Uber Eats'
              src='ubereats.webp'
              w={["8rem", "12rem", "12rem", "14rem"]}
            />
            <LogoLink
              to='https://www.fantuanorder.com/store/nongbu-korean-eatery/ca-9090'
              name='Fantuan'
              src='fantuan.webp'
              w={["8rem", "12rem", "12rem", "14rem"]}
            />
          </Flex>
        </SectionFlexContentContainer>
      </SectionFlexContainer>
    </>
  );
}
