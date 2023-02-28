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
import { useTheme } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ImageContainer from "@components/ImageContainer";

export default function ImageTextblockSection(props) {
  const { colors } = useTheme();

  return (
    <Flex position='relative' bg={colors.backgroundDark} h='100%'>
      <Flex
        //Text block
        flexDirection='column'
        position={["absolute", "absolute", "absolute"]}
        w={["100%", "100%", "380px"]}
        left={["0%", "0%", "5%", "15%"]}
        p={["10%", "10%", "0%"]}
        top={["0", "0", "20%"]}
        h={["100%", "100%", "fit-content"]}
        bg={colors.backgroundDark}
        color={colors.colorLight}
        zIndex='8'>
        <Heading as='h3' variant='sectionHeading'>
          {props.heading}
        </Heading>

        <Text variant='bodyText' lineHeight='30px' mt='8'>
          {props.bodyText}
        </Text>

        <Link variant='sectionLink' mt='8'>
          {props.arrowText} <ArrowForwardIcon fontSize='24px' />
        </Link>
      </Flex>
      <ImageContainer
        position={["relative", "relative", "absolute"]}
        w={["100%", "100%", "60vw"]}
        left={["0", "0", "10%"]}
        top={["0", "0", "10%"]}
        image={props.image}
      />
    </Flex>
  );
}
