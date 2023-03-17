import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Heading } from "@chakra-ui/react";
import LogoLink from "@components/LogoLink";

import SectionFlexContentContainer from "@components/SectionFlexContentContainer";
import SectionFlexContainer from "@components/SectionFlexContainer";
import NongbuImageContainer from "@components/NongbuImageContainer";

function Takeout(props) {
  const { colors } = useTheme();

  return (
    <SectionFlexContainer
      flexDirection={["column", "column", "column", "row"]}
      bg={colors.backgroundLight} //section container,
      color={colors.dark}
      px='5vw'
py='5vw'
      {...props}>
      <NongbuImageContainer
        filename='nongbu-4'
        name='plate of ddeokbbokki'
        p={["0", "0", "5vw"]}
        maxW='44rem'
      />
      <SectionFlexContentContainer headingtext='Get NongBu to-go or delivered right to your door.'>
        <Flex
          flexDirection='column'
          gap='2rem'
          mt='2rem'
          alignItems={"flex-start"}>
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
  );
}

export default Takeout;
