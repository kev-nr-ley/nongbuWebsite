import React from "react";
import { Flex, Text, Heading, Grid } from "@chakra-ui/react";
import { theme } from "@styles/theme";

import MenuItem from "./MenuItem";
export default function MenuSection(props) {
  const objectToArray = props.objectToArray;
  const { colors, fonts } = theme;

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
    <Flex flexDirection='column' w='100%'>
      <Heading
        as='h2'
        mt='4'
        className='menu-section-heading'
        variant='menuHeading'
        color={colors.primary}>
        {props.name}
      </Heading>

      {props.description ? (
        <Text className='menu-section-description' variant='menuItalic' my='1'>
          {props.description}
        </Text>
      ) : null}

      <Grid className='menu-section-items' w='100%' gap='4'>
        {renderMenuItems(props.items)}

        {props.footer ? (
          <Text variant='menuItalic' color={colors.primary}>
            {props.footer}
          </Text>
        ) : null}
      </Grid>
    </Flex>
  );
}
