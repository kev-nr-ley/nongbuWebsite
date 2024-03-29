import React from "react";
import { Flex, Box, Text, IconButton, VStack } from "@chakra-ui/react";

export default function MenuItem(props) {
  const showColors = false;
  const {
    english,
    korean,
    description,
    notes,
    modifiers,
    price,
    price2,
    textVariant,
  } = props;

  // console.log(props.items)
  return (
    props.showItem && (
      <Flex
        mt='1rem'
        position='relative'
        justifyContent='space-between'
        gap='1rem'>
        <VStack
          justifyContent='flex-start'
          alignItems='flex-start'>
          <Flex
            className='menu-item-text'
            bg={showColors ? "blue.200" : null}
            alignItems='flex-start'
            flexDirection='column'
            flexWrap='wrap'>
            <Flex
              className='menu-item-name'
              variant='menuCaps'
              position='relative'
              flexWrap='wrap'
              alignItems='flex-start'
              textAlign='left'>
              <Text
                as='span'
                // whiteSpace="nowrap"
                variant='menuFood'
                color='dark'>
                {english}&nbsp;
              </Text>

              <Text
                as='span'
                // whiteSpace="nowrap"
                variant='menuFood'
                color='dark'>
                {korean}
              </Text>
            </Flex>
          </Flex>

          {description && (
            <Text
              className='menu-item-description'
              variant='menuBody'
              textAlign='left'
              bg={showColors ? "red.200" : null}
              color='dark'>
              {description} <br />
            </Text>
          )}

          {notes && (
            <Text
              className='menu-item-notes'
              variant='menuBody'
              fontStyle='italic'
              textAlign='left'
              bg={showColors ? "green.200" : null}
              color='dark'>
              {notes}
            </Text>
          )}

          {modifiers && (
            <Box
              className='menu-item-modifiers'
              variant='menuBody'
              color='dark'
              bg={showColors ? "yellow.200" : null}>
              {modifiers.map((mod, index) => {
                return (
                  <Text
                    as='span'
                    fontWeight='700'
                    key={index}>
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
          color='dark'
          w='fit-content'
          alignItems='flex-end'>
          {price && (
            <Text
              className='menu-item-price'
              fontWeight='700'
              whiteSpace='nowrap'>
              {typeof price == "number" && "$"}
              {price ? price : "Msarket Price"}
            </Text>
          )}
          {price2 && (
            <Text
              className='menu-item-price'
              fontWeight='700'
              whiteSpace='nowrap'>
              {Number.isInteger(price) && "$"}
              {price2 ? price2 : "Market Price"}
            </Text>
          )}
        </Flex>
      </Flex>
    )
  );
}
