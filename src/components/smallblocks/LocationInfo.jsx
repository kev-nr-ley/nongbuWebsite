import React from "react";
import { Heading, Flex, Grid, Text, Button } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import { useTheme } from "@chakra-ui/react";
export default function ContactInfo(props) {
  return (
    <Flex flexDirection="column" gap="0.25rem"  {...props}>
      {props.showheading && (
        <Heading variant="footerHeading" px="0" mb="1rem">
          LOCATION
        </Heading>
      )}
      <Flex justifyContent={"space-between"} letterSpacing="2px">
        <Text fontWeight="700" whiteSpace='nowrap' textAlign='center'>
          8115 104st NW <br /> Edmonton, AB
        </Text>
      </Flex>
      <Button w="fit-content" color="dark" borderRadius="0" mt="1rem">
        <ChakraLink
          to="https://goo.gl/maps/yjVFxw69rWZYhbN18"
          name="Directions"
          fontWeight="600"
          color="dark"
        />
      </Button>
    </Flex>
  );
}
