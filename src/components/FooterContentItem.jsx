import React from "react";

import {
  Flex,
  Box,
  HStack,
  VStack,
  Text,
  Heading,
  Link,
  Image,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import FooterContentItem from "@components/FooterContentItem";

export default function FooterContentItem(props) {
  return <Flex>{props.children}</Flex>;
}
