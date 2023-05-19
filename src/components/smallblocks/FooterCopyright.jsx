import React from "react";
import { Flex, VStack, Box, Text } from "@chakra-ui/react";
export default function FooterCopyright(props) {
  return (
    // <FrankieInnerWrapper {...props}>
    <Text
      textAlign="center"
      variant="smallText"
      position="absolute"
      bottom="0"
      w="100%"
      {...props}
    >
      Designed with love by{" "}
      <strong>
        {" "}
        <a href="http://www.frankieweb.ca"> FrankieWeb.ca</a>
      </strong>
       &nbsp;All rights reserved. ©{new Date().getFullYear()}
    </Text>
    // </FrankieInnerWrapper>
  );
}
