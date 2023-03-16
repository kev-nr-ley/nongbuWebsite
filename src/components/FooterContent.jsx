import React from "react";

import {
  Flex,
  Box,
  HStack,
  VStack,
  Text,
  Heading,
  Image,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";

export default function FooterContent(props) {
  return (
    <Flex
      flexDirection='column'
    //   textAlign={"center"}
      justifyContent='flex-start'
      bg='red.200'
      {...props}>
      <Heading>{props.headingtext}</Heading>

      <VStack bg='blue.300'>
        {Object.keys(props.content).map((key) => {
          return (
            <HStack>
              <Text>{key}</Text>
              <Text>{props.content[key]}</Text>
            </HStack>
          );
        })}
      </VStack>
    </Flex>
  );
}
