import React from "react";
import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { theme } from "@styles/theme";
import MenuSection from "@components/Menu/MenuSection";
import EditMenuSection from "@components/Menu/EditMenu/EditMenuSection";

import { useState } from "react";
// Modal Imports

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

// -------------------------------

// -------------------------------

export default function MenuPage(props) {
  const objectToArray = props.objectToArray;
  const { colors } = theme;
  const [currentSection, setCurrentSection] = useState("");
  // Modal Code
  const { isOpen, onOpen, onClose } = useDisclosure();
  // -------------------------------

  const modalOpen = () => {
    onOpen();
    setCurrentSection(props.name);
    console.log("modal open");
  };

  return (
    <Flex
      flexDirection='column'
      bg={colors.backgroundLight}
      w='100%'
      px={["4", "6", "10", "12"]}
      py={["4", "6", "10", "12"]}
      justifyContent={"flex-start"}
      position='relative'>
      {/*------------------------------------------ Modal code ------------------------------------------*/}

      <Button
        // Will come back to this later
        display='none'
        // Remove to enable edit button
        position='absolute'
        top='2'
        right='2'
        w='100px'
        h='100px'
        bg='red'
        onClick={modalOpen}>
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Page data */}
            {objectToArray(props.sections).map((section, index) => {
              return (
                <EditMenuSection
                  {...section}
                  objectToArray={props.objectToArray}
                  key={index}
                />
              );
            })}
            {/*  */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* ---------------------------------------------------------------------------------------------  */}
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
