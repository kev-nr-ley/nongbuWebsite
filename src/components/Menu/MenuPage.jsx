import React from "react";
import { Flex, Box, Text, Heading, Grid } from "@chakra-ui/react";
import MenuSection from "@components/Menu/MenuSection";

export default function MenuPage(props) {
  function objectToArray(object) {
    return Object.keys(object).map((key) => {
      return object[key];
    });
  }

  return (
    <Flex
      flexDirection='column'
      bg='backgroundLight'
      w='100%'
      px={["4", "6", "10", "12"]}
      py={["4", "6", "10", "12"]}
      justifyContent={"flex-start"}
      position='relative'
      {...props}>
      <Heading as='h2' variant='menuSection' color='primary'>
        {props.title}
      </Heading>
      <Text color='primary' fontStyle='italic'>
        {props.description}
      </Text>

      <Box direction='column' align='center' justify='center'>
        {objectToArray(props.sections).map((section, index) => {
          return (
            <MenuSection
              {...section}
              objectToArray={props.objectToArray}
              key={index}
            />
          );
        })}
      </Box>
    </Flex>
  );
}
