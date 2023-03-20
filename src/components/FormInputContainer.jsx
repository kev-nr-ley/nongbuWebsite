import { Text, Input, Textarea, Button, Flex } from "@chakra-ui/react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useTheme } from "@chakra-ui/react";

export default function FormInputContainer(props) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (props.isRequired && input === null) {
      setErrorMessage("This field is required");
    } else {
      setErrorMessage(null);
    }
  }, [input]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const isError = input === null && props.isRequired;

  return (
    <FormControl
      isRequired={props.isRequired ? true : false}
      isInvalid={isError}>
      <FormLabel fontWeight='700' mt='8'>
        {props.label}
      </FormLabel>

      {props.inputtype !== "textarea" ? (
        <Input
          type={props.inputtype}
          placeholder={props.placeholder}
          w='100%'
          h='40px'
          px='1rem'
          py='0.5rem'
          mt='-2'
          value={input}
          bg={props.inputbg}
          onChange={handleInput}
          boxShadow='inset 2px 1px 2px rgba(0, 0, 0, 0.25)'
          borderRadius='30px'
        />
      ) : (
        <Textarea
          placeholder={props.placeholder}
          mt='-0.25rem'
          w='100%'
          px='4'
          py='0.5rem'
          value={input}
          onChange={handleInput}
          bg={props.inputbg}
          boxShadow='inset 1px 1px 2px rgba(0, 0, 0, 0.25)'
          borderRadius='30px'
        />
      )}

      {isError ? (
        <FormHelperText>{`${props.label} is required`}</FormHelperText>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
}
