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
    <Box mt='80px' position='relative'>
      <Flex position='relative' bg={colors.backgroundDark} h='80vh'>
        <Flex
          flexDirection='column'
          position={["absolute", "absolute", "absolute"]}
          w={['100%', '100%', '380px']}
          gap='1rem'
          left={["0%", "0%", "5%", "15%"]}
          pt={["10%", "10%", "0%"]}
          px={["2rem", "2rem", "0"]}
          top={["0", "0", "20%"]}
          h={["100%", "100%", "fit-content"]}
          bg={[colors.backgroundDark99, colors.backgroundDark99, "none"]}
          color={[colors.light, colors.light, colors.light]}
          zIndex='8'>
          <Heading as='h2' variant='sectionHeading'>
            Use our space and services.
          </Heading>
          <Text variant='bodyText' lineHeight='30px'>
            Are you looking for a private and modern space for your event? Do
            you have guests to feed? We might be able to help with your venue
            and catering needs.
          </Text>
          <Link variant='sectionLink'>
            Get in touch <ArrowForwardIcon fontSize='24px' />
          </Link>
        </Flex>
        <ImageContainer
          position={["relative", "relative", "absolute"]}
          w={["100%", "100%", "60vw"]}
          right={["0", "0", "10%"]}
          top={["0", "0", "5%"]}
          h='auto'
          image='nongbu-event-1.jpg'
        />
      </Flex>

      <Flex position='relative' bg={colors.backgroundLight} h='80vh'>
        <ImageContainer
          position={["relative", "relative", "absolute"]}
          w={["100%", "100%", "60vw"]}
          left={["0", "0", "10%"]}
          top={["0", "0", "5%"]}
          h='auto'
          image='nongbu-event-2.jpg'
        />

        <Flex
          flexDirection='column'
          position={["absolute", "absolute", "absolute"]}
          w={['100%', '80%', '380px']}
          gap='1rem'
          right={["0%", "0%", "5%", "15%"]}
          pt={["10%", "10%", "0%"]}
          top={["0", "0", "20%"]}
          h={["100%", "100%", "fit-content"]}
          bg={[colors.backgroundLight99, colors.backgroundLight99, "none"]}
          color={colors.dark}
          zIndex='8'>
          <Text>
            Are you looking for a private and modern space for your event? Do
            you have guests to feed? We might be able to help with your venue
            and catering needs.
          </Text>
          <Link variant='sectionLink'>
            Get in touch <ArrowForwardIcon fontSize='24px' />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
