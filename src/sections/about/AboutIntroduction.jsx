import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";
import { useTheme } from "@chakra-ui/react";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";
import SectionFlexContainer from "@components/layout/SectionFlexContainer";

import NongbuImageContainer from "@components/layout/NongbuImageContainer";


export default function AboutIntroduction() {
  const { colors } = useTheme();
  return (
    <SectionFlexContainer
      overflow='hidden'
      flexDirection='column'
      py={["10%", "10%", "5%", "5%"]}
      gap='5vh'
      zIndex='8'
      h='fit-content'
      bg='backgroundLight'
      >
      <SectionFlexContentContainer
        headingtext='Food'
        linktext='View Menu'
        linkto='/menu'
        flexDirection={"column"}
        minW='240px'
        w={['100%', '100%', '80%', '80%']}
        maxW='100%'>
        <Text variant='bodyText'>
          NongBu Korean Eatery opened with the mission to re-introduce
          traditional Korean food to Edmontonians. From its conception, NongBu
          wanted to fill a void in the Korean food offerings in our city. Our
          goal is to curate a menu consisting of traditional Korean dishes not
          commonly found in the local Korean food scene along with well known
          Korean staples. Korean street food, Korean comfort food and Korean
          Anju (Food served with liquor) all have a place in our small but
          focused menu.
          <br /> <br />
          At NongBu, we prepare all our dishes using only the best and freshest
          ingredients available to us. We do not add flavour additives or MSG
          into any of our food. We believe traditional Korean cooking should be
          fresh and healthy. We source some crucial elements of our cuisine
          directly from Korea to offer unique flavours that cannot be achieved
          using commercially available products. It is our philosophy to cook as
          we would for our families and guests at home. Each dish is thoroughly
          thought out and recipes are created to achieve a balance of the
          diverse flavours and textures found in Korean cuisine.
        </Text>
      </SectionFlexContentContainer>
      <SectionFlexContentContainer
        headingtext='Culture'
        linktext='Contact Us'
        linkto='/contact'
        flexDirection={"column"}
        minW='240px'
        w={['100%', '100%', '80%', '80%']}
        maxW='100%'>
        <Text variant='bodyText'>
          NongBu wants to expand on what people already know about Korean
          culture. It is not just a traditional dining experience but a complete
          cultural experience. The space we designed is minimalist and
          industrial space, reminiscent of many modern restaurants in Korea. The
          music we play is a diverse collection of old and new music from every
          genre to highlight that there is more to the Korean music scene than
          K-pop. Vintage movies are projected onto a large wall to showcase
          Korea’s long history in film. Interested in using our space?
        </Text>
      </SectionFlexContentContainer>
    </SectionFlexContainer>
  );
}
