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
      bg={colors.backgroundLight} //section container,
      color={colors.dark}
      p={["0", "5vw", "5vw", "5vw"]}
      {...props}>
      <NongbuImageContainer
        w={["100vw", "60vw", "50vw", "50vw"]}
        h={["30vh", "auto", "auto", "auto"]}
        filename='nongbu-4'
        name='plate of ddeokbbokki'
      />
      <SectionFlexContentContainer
        headingtext='Get NongBu to-go or delivered right to your door.'
        w={["100%", "30%", "30%", "25%"]}>
        <Flex gap='8' flexDirection='column' alignItems={"center"}>
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
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}

export default Takeout;
