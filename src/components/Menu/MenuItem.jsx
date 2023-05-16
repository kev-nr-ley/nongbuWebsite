import React from "react";
import { Flex, Box, Text, IconButton, VStack } from "@chakra-ui/react";

export default function MenuItem(props) {
  const showColors = false;

  return (
    props.showItem && (
      <Flex mt="1rem" position="relative" justifyContent="space-between" gap='1rem'>
        <VStack justifyContent="flex-start" alignItems="flex-start">
          <Flex
            className="menu-item-text"
            bg={showColors ? "blue.200" : null}
            alignItems="flex-start"
            flexDirection="column"
            flexWrap="wrap"
          >
            <Flex
              className="menu-item-name"
              variant="menuCaps"
              position="relative"
              flexWrap='wrap'
              alignItems='flex-start'
              textAlign='left'

            >
              <Text as="span" 
              // whiteSpace="nowrap" 
              variant={props.textVariant}>
                {props.english}&nbsp;
              </Text>


              <Text as="span" 
              // whiteSpace="nowrap" 
              variant={props.textVariant}>
                {props.korean}
              </Text>
            </Flex>
          </Flex>

          {props.description && (
            <Text
              className="menu-item-description"
              variant="menuBody"
              textAlign="left"
              bg={showColors ? "red.200" : null}
            >
              {props.description} <br />
            </Text>
          )}

          {props.notes && (
            <Text
              className="menu-item-notes"
              variant="menuBody"
              fontStyle="italic"
              textAlign="left"
              bg={showColors ? "green.200" : null}
            >
              {props.notes}
            </Text>
          )}

          {props.modifiers && (
            <Box
              className="menu-item-modifiers"
              variant="menuBody"
              bg={showColors ? "yellow.200" : null}
            >
              {props.modifiers.map((mod, index) => {
                return (
                  <Text as="span" fontWeight="700" key={index}>
                    {mod}&nbsp;
                  </Text>
                );
              })}
            </Box>
          )}
        </VStack>
        <Flex
          className="menu-item-prices"
          flexDirection="column"
          bg={showColors ? "purple.200" : null}
          w="fit-content"
          alignItems="flex-end"
        >
          {props.price && (
            <Text
              className="menu-item-price"
              fontWeight="700"
              whiteSpace="nowrap"
            >
              {typeof props.price == "number" && "$"}
              {props.price ? props.price : "Msarket Price"}
            </Text>
          )}
          {props.price2 && (
            <Text
              className="menu-item-price"
              fontWeight="700"
              whiteSpace="nowrap"
            >
              {Number.isInteger(props.price) && "$"}
              {props.price2 ? props.price2 : "Market Price"}
            </Text>
          )}
        </Flex>
      </Flex>
    )
  );
}
