import React from "react";
import { useTheme } from "@chakra-ui/react";
import {
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
  Button,
  Box,
} from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import InstagramLink from "@components/InstagramLink";
import FacebookLink from "@components/FacebookLink";
import { Link } from "react-router-dom";
import FooterContent from "@components/FooterContent";

import Hours from "@components/Hours";

import ContactInfo from "@components/ContactInfo";
import LocationInfo from "@components/LocationInfo";
export default function Footer(props) {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection='row'
      flexWrap='wrap'
      justifyContent='space-between'
      alignItems='flex-start'
      bg={colors.backgroundDarker}
      color={colors.light}
      w='100%'
      px='5vw'
      py='5vh'
      h='fit-content'
      {...props}>
      <Hours maxW='16rem' />
      <ContactInfo maxW='16rem' />
      <LocationInfo maxW='16rem' />
    </Flex>
  );
}
