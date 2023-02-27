import React from "react";
import { Flex, Text, Heading, Grid } from "@chakra-ui/react";
import { theme } from "@styles/theme";

import MenuItem from "./MenuItem";
export default function MenuSection(props) {
  const objectToArray = props.objectToArray;
  const { colors, fonts } = theme;

  function renderMenuItems(items) {
    return objectToArray(items).map((item, index) => {
      return <MenuItem {...item} objectToArray={props.objectToArray} key={index} />;
    });
  }

  return (
    <Flex flexDirection='column' w='100%'>
      <Heading
        as='h2'
        mt='4'
        className='menu-section-heading'
        variant='menuBody'
        color={colors.primary}>
        {props.name}
      </Heading>

      <Text className='menu-section-description' variant='menuItalic' my='1'>
        {props.description}
      </Text>

      <Grid className='menu-section-items' w='100%' gap='4'>
        {renderMenuItems(props.items)}
        <Text variant='menuItalic' color={colors.primary}>
          {props.footer}
        </Text>
      </Grid>
    </Flex>
  );
}
