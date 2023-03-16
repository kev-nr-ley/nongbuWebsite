import React from "react";
import { Heading, Flex, Grid, Text, Button } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import { useTheme } from "@chakra-ui/react";
export default function ContactInfo(props) {
  const { colors } = useTheme();
  return (
    <Flex flexDirection='column' gap='1' w='100%' {...props}>
      {props.showheading ? (
        <Heading variant='footerHeading' px='0'>
          LOCATION
        </Heading>
      ) : null}
      <Flex justifyContent={"space-between"} letterSpacing='2px'>
        <Text mt='1rem'>
          8125 104st NW <br /> Edmonton, AB
        </Text>
      </Flex>
      <Button w='fit-content' color={colors.dark} borderRadius='0' mt='1rem'>
        <ChakraLink
          to='https://goo.gl/maps/yjVFxw69rWZYhbN18'
          name='Directions'
          fontWeight='600'
          color='dark'
        />
      </Button>
    </Flex>
  );
}
