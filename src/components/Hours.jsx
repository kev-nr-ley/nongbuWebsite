import React from "react";
import { Heading, Flex, Grid, Text } from "@chakra-ui/react";

export default function Hours(props) {
  return (
    <Flex flexDirection='column' gap='1' w='100%'>
      <Heading variant='footerHeading'>HOURS</Heading>
      <Flex justifyContent={"space-between"} letterSpacing='2px'>
        <strong> Tue - Thu </strong> 4pm - 9pm
      </Flex>
      <Flex justifyContent={"space-between"} letterSpacing='2px'>
        <strong> Fri & Sat </strong> 4pm - 10pm
      </Flex>
      <Flex justifyContent={"space-between"} letterSpacing='2px'>
        <strong> Sun & Mon Closed</strong>
      </Flex>
    </Flex>
  );
}
