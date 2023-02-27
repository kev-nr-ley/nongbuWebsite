import React from "react";

import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { theme } from "@styles/theme";
import MenuSection from "@components/Menu/MenuSection";

export default function MenuPage(props) {
  const objectToArray = props.objectToArray;
  const { colors } = theme;

  return (
    <Flex
      flexDirection='column'
      bg={colors.backgroundLight}
      w='100%'
      px={["4", "6", "10", "12"]}
      py={["4", "6", "10", "12"]}
      justifyContent={"flex-start"}>
      <Box>
        <Heading as='h2' variant='menuSection' color={colors.primary}>
          {props.title}
        </Heading>
        <Text
          mt='2'
          variant='menuBody'
          color={colors.primary}
          fontStyle='italic'>
          {props.description}
        </Text>

        <Flex direction='column' align='center' justify='center'>
          {objectToArray(props.sections).map((section, index) => {
            return (
              <MenuSection
                {...section}
                objectToArray={props.objectToArray}
                key={index}
              />
            );
          })}
        </Flex>
      </Box>
      {/* <Text bg='orange'>{props.footer}</Text> */}
    </Flex>
  );
}
