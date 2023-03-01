import React from "react";
import { Heading, Flex, Grid, Text } from "@chakra-ui/react";

export default function Hours(props) {
  return (
    <Grid {...props}>
      <Heading variant='footerHeading'>HOURS</Heading>
      <Flex flexDirection='column' gap='1'>
        <Flex justifyContent={"space-between"} letterSpacing='2px'>
          <Text as='span'>Tue - Thu</Text> <Text as='span'>4pm - 9pm</Text>
        </Flex>
        <Flex justifyContent={"space-between"} letterSpacing='2px'>
          <Text as='span'>Fri & Sat</Text> <Text as='span'>4pm - 10pm</Text>
        </Flex>
        <Flex justifyContent={"space-between"} letterSpacing='2px'>
          <Text as='span'>Sun & Mon</Text> <Text as='span'>Closed</Text>
        </Flex>
      </Flex>
    </Grid>
  );
}
