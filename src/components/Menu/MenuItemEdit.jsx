import React from "react";
import { Flex, Box, Text, IconButton, VStack } from "@chakra-ui/react";
import MenuItemEditModal from "@components/Menu/MenuItemEditModal";

export default function MenuItemEdit(props) {
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

  const stateMenu = props.stateMenu;
  const setStateMenu = props.setStateMenu;

  const onSubmit = (data) => {
    console.log(data);
    const prevArray = stateMenu;
    const updatedArray = prevArray.map((item) => {
      if (item.id === currentMenuItem.id) {
        return {
          ...item,
          ...data,
        };
      } else {
        return item;
      }
    });
    setStateMenu(updatedArray);
    // console.log(stateMenu);
    console.log('00000000000000000')
    onClose();
  };



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
                variant={textVariant}>
                {english}&nbsp;
              </Text>

              <Text
                as='span'
                // whiteSpace="nowrap"
                variant={textVariant}>
                {korean}
              </Text>
            </Flex>
          </Flex>

          {description && (
            <Text
              className='menu-item-description'
              variant='menuBody'
              textAlign='left'
              bg={showColors ? "red.200" : null}>
              {description} <br />
            </Text>
          )}

          {notes && (
            <Text
              className='menu-item-notes'
              variant='menuBody'
              fontStyle='italic'
              textAlign='left'
              bg={showColors ? "green.200" : null}>
              {notes}
            </Text>
          )}

          {modifiers && (
            <Box
              className='menu-item-modifiers'
              variant='menuBody'
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
        <MenuItemEditModal setStateMenu={props.setStateMenu}
        stateMenu={props.stateMenu}
        {...props} />
      </Flex>
    )
  );
}
