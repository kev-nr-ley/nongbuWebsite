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
    <SectionFlexContainer //section container
      flexDirection={["column", "column", "column", "row"]}
      bg={colors.backgroundDark} //section container,
      color={colors.light}
      position='relative'
      justifyContent={"center"}
      alignItems='center'
      minH='90vh'
      {...props}>
      <NongbuImageContainer
        w={["100vw", "100vw", "100vw", "50vw"]}
        h={["30vh", "40vh", "auto", "auto"]}
        filename='nongbu-4'
        name='plate of ddeokkbokki'
        minW='20rem'
        maxW='800px'
      />

      <SectionFlexContentContainer
        headingtext='Get NongBu to-go or delivered'
        flexDirection={["column", "column", "column", "column"]}
        maxW='32rem'>
        <Flex
          flexWrap='wrap'
          alignItems='center'
          justifyContent='center'
          gap='1rem'
          
          >
          <Text variant='bodyText' bg='red'>
            Look at our menu and give us a call to pick up your order, or get
            NongBu delivered right to your door using one of these apps:
          </Text>
          <Flex flexDirection='column' gap='1rem'>
            <LogoLink
              to='https://www.skipthedishes.com/nongbu-korean-eatery'
              name='Skip The Dishes'
              src='skipthedishes.webp'
              width={["200px", "200px", "240px", "260px"]}
            />
            <LogoLink
              to='https://www.ubereats.com/ca/store/nongbu-korean-eatery-104-st/1Y-WFnTDTZ2yh5xB01bLaw'
              name='Uber Eats'
              src='ubereats.webp'
              width={["200px", "200px", "240px", "260px"]}
            />
            <LogoLink
              to='https://www.fantuanorder.com/store/nongbu-korean-eatery/ca-9090'
              name='Fantuan'
              src='fantuan.webp'
              width={["200px", "200px", "240px", "260px"]}
            />
          </Flex>
        </Flex>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
