import React from "react";

import { Flex, Box, Text } from "@chakra-ui/react";

export default function MenuItem(props) {
  function renderPrices(prices) {
    return Object.keys(prices).map((key) => {
      return <Text as='span' key={key}>{`$${prices[key]}`}</Text>;
    });
  }

  function renderModifiers(modifiers) {
    return Object.keys(modifiers).map((key) => {
      return <Text as='span' key={key}>{`| ${key} $${modifiers[key]} |`}</Text>;
    });
  }

  return (
    <Box w='100%' mt='1'>
      <Flex justifyContent='space-between'>
        <Text className='menu-item-name' variant='menuCaps'>
          {props.english} {props.korean}
        </Text>
        <Text className='menu-item-price' variant='menuCaps'>
          {renderPrices(props.prices)}
        </Text>
      </Flex>
      <Text className='menu-item-description' variant='menuBody'>
        {props.description} <br /> <em> {props.note} </em>
      </Text>
      <Text className='menu-item-description' variant='menuBody'>
        {renderModifiers(props.modifiers)}
      </Text>
    </Box>
  );
}
