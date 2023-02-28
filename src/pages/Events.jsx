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

import { useTheme } from "@chakra-ui/react";

export default function Events() {
  const { colors, fonts } = useTheme();
  return (
    <Box>
      <Flex
        position='relative'
        bg={colors.backgroundDark}
        h={['100vh', '100vh', '100vh', '100vh']}
        w='100vw'
        overflow='hidden'>
        <Flex
          //Text block
          flexDirection='column'
          position={["absolute", "absolute", "absolute"]}
          w={["100%", "100%", "50%", '30%']}
          left={["0%", "0%", "10%", "10%"]}
          mx={["0%", "0%", "0%", "0%"]}
          px={["5%", "5%", "5%", "5%"]}
          top={["50%", "50%", "50%"]}
          transform={["none", "none", "translateY(-50%)"]}
          h={["fit-content", "fit-content", "100%"]}
          justifyContent='center'
          bg={colors.backgroundDark}
          color={colors.light}
          zIndex='8'>
          <Heading as='h3' variant='sectionHeading'>
            Use our space and services.
          </Heading>

          <Text variant='bodyText' lineHeight='30px' mt='8'>
            Are you looking for a private and modern space for your event? Do
            you have guests to feed? We might be able to help with your venue
            and catering needs.
          </Text>

          <Link variant='sectionLink' mt='8'>
            Get in touch <ArrowForwardIcon fontSize='24px' />
          </Link>
        </Flex>

        <ImageContainer
          position={["relative", "relative", "absolute"]}
          w={["100%", "100%", "80vw", "70%"]}
          h={["40%", "40%", "100vh"]}
          right={["0", "0", "0"]}
          top={["0", "0", "0"]}
          image='nongbu-event-1.jpg'
        />
      </Flex>

      <Flex position='relative' bg={colors.backgroundLight}   h={['100vh', '100vh', '100vh', '80vh']} w='100vw' overflow='hidden'>
        <Flex
          //Text block
          flexDirection='column'
          position={["absolute", "absolute", "absolute"]}
          w={["100%", "100%", "50%", '30%']}
          right={["0%", "0%", "10%", "10%"]}
          mx={["0%", "0%", "0%", "0%"]}
          px={["5%", "5%", "5%", "5%"]}
          top={["50%", "50%", "50%"]}
          transform={["none", "none", "translateY(-50%)"]}
          h={["fit-content", "fit-content", "100%"]}
          justifyContent='center'
          bg={colors.backgroundLight}
          color={colors.dark}
          zIndex='8'>
          {/* <Heading as='h3' variant='sectionHeading'>
          </Heading> */}

          <Text variant='bodyText' lineHeight='30px' mt='0'>
            We host all kinds of events, from birthday parties to low-key
            weddings. Our minimalist and modern space allow you and your guests
            to be the focus. Get in touch with some details about your event if
            you are interested in our space or services.
          </Text>

          <Link variant='sectionLink' mt='8'>
            Contact us <ArrowForwardIcon fontSize='24px' />
          </Link>
        </Flex>
        <ImageContainer
          position={["relative", "relative", "absolute"]}
          w={["100%", "100%", "65%"]}
          h={["40%", "40%", "100%"]}
          left={["0", "0", "0"]}
          top={["0", "0", "0"]}
          p={["0 0", "0 0", "5% 5%"]}
          image='nongbu-event-2.jpg'
        />
      </Flex>
    </Box>
  );
}
