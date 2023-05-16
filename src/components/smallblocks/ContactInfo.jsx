import React from "react";
import { Heading, Flex, Grid, Text } from "@chakra-ui/react";
import ChakraLink from "@components/ChakraLink";
import { useTheme } from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import InstagramLink from "@components/links/InstagramLink.jsx";
import FacebookLink from "@components/links/FacebookLink.jsx";
import EarLogoLink from "@components/links/EarLogoLink.jsx";
import NongbuLogoLink from "@components/links/NongbuLogoLink.jsx";

export default function ContactInfo(props) {
  const { colors } = useTheme();
  return (
    <Flex flexDirection="column" gap="0.25rem" {...props}>
      {props.showheading && (
        <Heading variant="footerHeading" px="0" mb="1rem">
          CONTACT
        </Heading>
      )}

      <Flex whiteSpace="nowrap">
        <Text>
          <strong>Phone: </strong>&nbsp;
          <ChakraLink
            variant="smallText"
            to="tel:7809890997"
            name="(780) 989 0997"
            color="primary"
            whiteSpace="nowrap"
          />
        </Text>
      </Flex>

      <Flex whiteSpace="nowrap">
        <Text>
          <strong>Email: </strong>&nbsp;
          <ChakraLink
            variant="smallText"
            to="mailto:jahn@nongbu.ca"
            name="jahn@nongbu.ca"
            color="primary"
          />
        </Text>
      </Flex>

      <Flex gap="1rem" p="1rem" alignItems="center">
        <FacebookLink fontSize="2.5rem" />
        <InstagramLink fontSize="2.5rem" />
        <EarLogoLink fontSize="2.5rem" />
      </Flex>
    </Flex>
  );
}
