import React from "react";
import { Flex, Box, Text, IconButton, VStack } from "@chakra-ui/react";

export default function MenuItem(props) {
  const item = props.item;
  const showColors = false;

  return (
    <Flex
      mt='1rem'
      position='relative'
      justifyContent='space-between'
      color='black'>
      <VStack justifyContent='flex-start' alignItems='flex-start'>
        <Flex className='menu-item-text' bg={showColors ? "blue.200" : null}>
          {(props.english || props.korean) && (
            <Box className='menu-item-name' variant='menuCaps'>
              <Text as='span' variant='menuCaps'>
                {props.english}
              </Text>

              <Text as='span' variant='menuCaps' >
                {props.korean}
              </Text>
            </Box>
          )}
        </Flex>

        {props.description && (
          <Text
            className='menu-item-description'
            variant='menuBody'
            textAlign='left'
            bg={showColors ? "red.200" : null}>
            {props.description} <br />
          </Text>
        )}

        {props.notes && (
          <Text
            className='menu-item-notes'
            variant='menuBody'
            fontStyle='italic'
            bg={showColors ? "green.200" : null}>
            {props.notes}
          </Text>
        )}

        {props.modifiers && (
          <Box
            className='menu-item-modifiers'
            variant='menuBody'
            bg={showColors ? "yellow.200" : null}>
            {props.modifiers.map((mod, index) => {
              return (
                <Text as='span' fontWeight='700' key={index}>
                  {mod}&nbsp;
                </Text>
              );
            })}
          </Box>
        )}
      </VStack>
      <Flex
        className='menu-item-prices'
        flexDirection='column'
        bg={showColors ? "purple.200" : null}
        w='fit-content'>
        {props.price && (
          <Text className='menu-item-price' variant='menuCaps'>
            ${props.price ? props.price : "Market Price"}
          </Text>
        )}
        {props.price2 && (
          <Text className='menu-item-price' whiteSpace='nowrap'>
            ${props.price2 ? props.price2 : "Market Price"}
          </Text>
        )}
      </Flex>
    </Flex>
  );
}
