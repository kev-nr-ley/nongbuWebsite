import React from "react";
import { Flex, Text, Heading, Grid } from "@chakra-ui/react";
import { theme } from "@styles/theme";

import MenuItem from "./MenuItem";
export default function MenuSection(props) {
  function renderMenuItems(items) {
    function objectToArray(object) {
      return Object.keys(object).map((key) => {
        return object[key];
      });
    }

    return objectToArray(items).map((item, index) => {
      return (
        <MenuItem {...item} objectToArray={props.objectToArray} key={index} />
      );
    });
  }

  return (
    <Flex flexDirection="column" w="100%" alignItems="flex-start">
      <Heading
        as="h2"
        mt="1rem"
        className="menu-section-heading"
        variant="menuHeading"
        color="primary"
      >
        {props.name}
      </Heading>

      {props.description && (
        <Text
          className="menu-section-description"
          variant="menuItalic"
          my="0.5rem"
          textAlign="left"
        >
          {props.description}
        </Text>
      )}

      <Grid className="menu-section-items" w="100%" gap="1rem">
        {renderMenuItems(props.items)}
        {props.footer && (
          <Text variant="menuItalic" color="red">
            {props.footer}
          </Text>
        )}
      </Grid>
    </Flex>
  );
}
