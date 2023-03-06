import React from "react";
import { Flex, Text, Heading, Grid, Input, Textarea } from "@chakra-ui/react";
import { theme } from "@styles/theme";
import EditMenuItem from "@components/Menu/EditMenu/EditMenuItem";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputLeftAddon,
  InputAddon,
} from "@chakra-ui/react";
export default function MenuSection(props) {
  const section = props;
  const { colors, fonts } = theme;

  return (
    <Flex
      flexDirection='column'
      w='100%'
      color='gray.800'
      border='4px'
      p='1'
      gap='1'>
      {/* Heading */}
      <Heading as='h3' variant='sectionHeading' fontSize='32px'>
        <Text as='span' fontSize='20px'>
          {props.name}
        </Text>
      </Heading>

      {/* Section Name */}
      <FormControl>
        <InputGroup>
          <InputLeftAddon children='Name' w='6rem' />
          <Input
            type='Name'
            variant='menuEdit'
            placeholder={props.name}
            _placeholder={{
              color: "gray.800",
              opacity: 1,
            }}
          />
        </InputGroup>
      </FormControl>

      {/* Section Description */}
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea placeholder={props.description} />
      </FormControl>
      {/* Section Footer */}
      <FormControl>
        Footer
        <Input as='Textarea' placeholder={props.footer} />
      </FormControl>
    </Flex>
  );
}
