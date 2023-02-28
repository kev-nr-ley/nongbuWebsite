import React from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Image,
  Link,
  color,
} from "@chakra-ui/react";
import BigMenuItem from "@components/BigMenuItem";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ImageContainer from "@components/ImageContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Textfit } from "react-textfit";

import { useTheme } from "@chakra-ui/react";

export default function About() {
  const { colors, fonts } = useTheme();
  return (
    <>
      {" "}
      <Box
        position='relative'
        h='100vh'
        bg={colors.backgroundDark}
        overflowX='hidden'>
        <Box
          //Text block
          flexDirection='column'
          position={["absolute", "absolute", "absolute"]}
          w={["100%", "80%", "70%", "70%"]}
          left={["0%", "5%", "5%", "5%"]}
          top={["10%", "10%", "10%", "5%"]}
          //   mx={["0%", "0%", "0%", "0%"]}
          p={["5%", "5%", "5%", "5%"]}
          // transform={["none", "none", "translateY(-50%)"]}
          h={["fit-content", "fit-content", "fit-content"]}
          // bg={colors.backgroundDark}
          // bg='red'
          // border='4px'
          // borderStyle='solid'
          color={colors.light}
          zIndex='8'>
          <Heading
            as='h3'
            variant='sectionHeading'
            fontSize={["24px", "28px", "32px", "36px"]}
            lineHeight={['30px', '36px', '40px', '40px']}
            letterSpacing='4px'>
            It is our desire to have our guests leave every NongBu experience
            happy, full, and a little more knowledgeable about our little
            country.
          </Heading>
        </Box>

        <Flex
          position='absolute'
          bottom={["10%", "10%", "20%", "20%"]}
          left={["0", "0", "10%", "10%"]}
          h='30vh'
          // bg='red'

          gap={["0", "0", "5vh", "5vh"]}>
          <ImageContainer
            w={["100%", "100%", "30vw", "30vw"]}
            h={["100%", "100%", "25vw", "25vw"]}
            image='nongbu-event-1.jpg'
            flexShrink='1'
          />
          <ImageContainer
            position='relative'
            top={["0", "0", "-5vh", "-5vh"]}
            w={["240px", "400px", "30vw", "30vw"]}
            h={["100%", "100%", "25vw", "25vw"]}
            image='nongbu-1.png'
            flexShrink='0'
          />
          <ImageContainer
            w={["100%", "100%", "30vw", "30vw"]}
            h={["100%", "100%", "25vw", "25vw"]}
            image='nongbu-2.jpg'
            flexShrink='1'
          />
        </Flex>
      </Box>
      <Box
        // position='relative'
        bg={colors.backgroundLight}
        // h={["100vh", "100vh", "100vh", "80vh"]}
        minH='100vh'
        w='100vw'
        zIndex='9'
        overflow='hidden'>
        <Flex
          //Text block
          flexDirection='column'
          //   position={["absolute", "absolute", "absolute"]}
          //   w={["100%", "100%", "50%", '30%']}
          //   right={["0%", "0%", "10%", "10%"]}
          //   mx={["0%", "0%", "0%", "0%"]}
          px={["5%", "5%", "10%", "20%"]}
          py={["10%", "10%", "5%", "5%"]}
          gap='5vh'
          //   top={["50%", "50%", "50%"]}
          //   transform={["none", "none", "translateY(-50%)"]}
          //   h={["fit-content", "fit-content", "100%"]}
          //   justifyContent='center'
          bg={colors.backgroundLight}
          color={colors.dark}
          zIndex='8'
          h='fit-content'>
          {/* <Heading as='h3' variant='sectionHeading'>
          </Heading> */}

          <Flex flexDirection={"column"} gap='2vw'>
            <Heading as='h3' variant='sectionHeading'>
              Food
            </Heading>

            <Text variant='bodyText'>
              NongBu Korean Eatery opened with the mission to re-introduce
              traditional Korean food to Edmontonians. From its conception,
              NongBu wanted to fill a void in the Korean food offerings in our
              city. Our goal is to curate a menu consisting of traditional
              Korean dishes not commonly found in the local Korean food scene
              along with well known Korean staples. Korean street food, Korean
              comfort food and Korean Anju (Food served with liquor) all have a
              place in our small but focused menu.
            </Text>

            <Text variant='bodyText'>
              At NongBu, we prepare all our dishes using only the best and
              freshest ingredients available to us. We do not add flavour
              additives or MSG into any of our food. We believe traditional
              Korean cooking should be fresh and healthy. We source some crucial
              elements of our cuisine directly from Korea to offer unique
              flavours that cannot be achieved using commercially available
              products. It is our philosophy to cook as we would for our
              families and guests at home. Each dish is thoroughly thought out
              and recipes are created to achieve a balance of the diverse
              flavours and textures found in Korean cuisine.
            </Text>

            <Link variant='sectionLink'>
              Contact us <ArrowForwardIcon fontSize='24px' />
            </Link>
          </Flex>

          <Flex flexDirection={"column"} gap='2vw'>
            <Heading as='h3' variant='sectionHeading'>
              Culture
            </Heading>
            <Text variant='bodyText' lineHeight='30px'>
              NongBu wants to expand on what people already know about Korean
              culture. It is not just a traditional dining experience but a
              complete cultural experience. The space we designed is minimalist
              and industrial space, reminiscent of many modern restaurants in
              Korea. The music we play is a diverse collection of old and new
              music from every genre to highlight that there is more to the
              Korean music scene than K-pop. Vintage movies are projected onto a
              large wall to showcase Korea’s long history in film. Interested in
              using our space?
            </Text>

            <Link variant='sectionLink'>
              Contact us <ArrowForwardIcon fontSize='24px' />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
