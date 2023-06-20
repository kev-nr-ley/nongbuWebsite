import React from "react";
import { Flex, Text, Heading, Grid } from "@chakra-ui/react";

import MenuItem from "./MenuItem";
export default function MenuSection(props) {
  // console.log(props.items);
  console.log("helo");
  return (
    <Flex
      flexDirection='column'
      w='100%'
      alignItems='flex-start'>
      <Heading
        as='h2'
        mt='1rem'
        className='menu-section-heading'
        variant='menuHeading'
        color='primary'>
        {props.name}
      </Heading>

      {props.description && (
        <Text
          className='menu-section-description'
          variant='menuItalic'
          my='0.5rem'
          textAlign='left'>
          {props.description}
        </Text>
      )}

      <Grid
        className='menu-section-items'
        w='100%'
        gap='1rem'>
        {Object.entries(props.items).map(([key, value]) => {
          return (
            console.log({ value }),
            console.log({ key }),
            (
              <MenuItem
                key={key}
                value={value}
                {...value}
              />
            )
          );
        })}

        {props.footer && (
          <Text
            variant='menuItalic'
            color='red'>
            {props.footer}
          </Text>
        )}
      </Grid>
    </Flex>
  );
}
