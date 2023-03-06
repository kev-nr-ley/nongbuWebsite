import React from "react";
import { Flex, Box, Text, Input, Textarea } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputAddon,
} from "@chakra-ui/react";

export default function EditMenuItem(props) {
  const item = props.item;

  return (
    <Flex
      w='100%'
      mt='1'
      border='4px'
      borderRadius='4'
      gap='1'
      p='1'
      fontSize='1rem'
      flexDirection='column'>
      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children='English' w='6rem' />
          <Input
            type='text'
            variant='menuEdit'
            placeholder={item.english}
            _placeholder={{
              color: "gray.800",
              opacity: 1,
            }}
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children='Korean' w='6rem' />
          <Input
            type='text'
            variant='menuEdit'
            placeholder={item.korean}
            _placeholder={{
              color: "gray.800",
              opacity: 1,
            }}
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children='Price' w='6rem' />
          <Input
            type='number'
            variant='menuEdit'
            placeholder={item.price}
            _placeholder={{
              color: "gray.800",
              opacity: 1,
            }}
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <InputGroup display='block'>
          <Text>Description</Text>
          <Input
            as='Textarea'
            variant='menuEdit'
            rows='3'
            placeholder={item.description}
            _placeholder={{
              color: "gray.800",
              opacity: 1,
            }}
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <InputGroup display='block'>
          <Text>Notes</Text>
          <Input
            as='Textarea'
            variant='menuEdit'
            type='text'
            rows='3'
            placeholder={item.notes}
            _placeholder={{
              color: "gray.800",
              opacity: 1,
            }}
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <InputGroup display='block'>
          <Text>Modifiers</Text>
          <Input
            as='Textarea'
            variant='menuEdit'
            type='text'
            rows='3'
            placeholder={item.modifiers}
            _placeholder={{
              color: "gray.800",
              opacity: 1,
            }}
          />
        </InputGroup>
      </FormControl>
    </Flex>
  );
}
