import React from "react";
import { Heading, Flex, Grid, Text } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import { useTheme } from "@chakra-ui/react";
export default function ContactInfo(props) {
  const { colors } = useTheme();
  return (
    <Flex flexDirection='column' gap='1' w='100%' {...props}>
      {props.showheading ? (
        <Heading variant='footerHeading'>CONTACT</Heading>
      ) : null}

      <Flex justifyContent={"space-between"} letterSpacing='2px' mt='1rem' px='1rem'>
        <Text >Phone </Text>{" "}
        <ChakraLink
          variant='smallText'
          to='tel:7809890997'
          name='(780) 989 0997'
          color={colors.primary}
        />
      </Flex>
      <Flex justifyContent={"space-between"} letterSpacing='2px' px='1rem'>
        <Text> Email </Text>{" "}
        <ChakraLink
          variant='smallText'
          to='mailto:jahn@nongbu.ca'
          name='jahn@nongbu.ca'
          color={colors.primary}
        />
      </Flex>
    </Flex>
  );
}
