import React from "react";
import { Heading, Flex, Text } from "@chakra-ui/react";

export default function Hours(props) {
  return (
    <Flex flexDirection='column' gap='0.25rem' {...props}>
      {props.showheading && (
        <Heading variant='footerHeading' px='0' mb='1rem'>
          HOURS
        </Heading>
      )}
      <Text as={Flex} justifyContent='space-between'>
        <strong>Mons - Thu</strong>&nbsp;&nbsp;4pm - 9pm
      </Text>
      <Text as={Flex} justifyContent='space-between'>
        <strong>Fri & Sat</strong>&nbsp;4pm - 10pm
      </Text>
      <Text fontWeight='700'>Closed on Sunday</Text>
    </Flex>
  );
}
