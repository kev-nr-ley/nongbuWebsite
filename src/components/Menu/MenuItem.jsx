import React from "react";
import { Flex, Box, Text, IconButton } from "@chakra-ui/react";
import EditMenuItem from "@components/Menu/EditMenu/EditMenuItem";
import { EditIcon } from "@chakra-ui/icons";
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

export default function MenuItem(props) {
  const item = props.item;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const modalOpen = () => {
    onOpen();
    console.log(props);
    console.log("modal open");
  };

  return (
    <Box w='100%' mt='1' position='relative'>
      <IconButton
        // Will come back to this later
        display='none'
        // Remove to enable edit button

        top='0'
        right='0'
        position='absolute'
        aria-label='Edit Menu Item'
        onClick={modalOpen}
        icon={<EditIcon />}
        fontSize='20px'
        w='12px'>
        Press me
      </IconButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Page data */}
            <EditMenuItem item={props} />
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

      <Flex justifyContent='space-between'>
        <Text className='menu-item-name' variant='menuCaps'>
          {props.english} {props.korean}
        </Text>

        {/* disable until we get prices */}
        {/* <Text className='menu-item-price' variant='menuCaps'>
          ${props.price ? props.price : "Market Price"}
        </Text> */}
      </Flex>

      {props.description ? (
        <Text className='menu-item-description' variant='menuBody'>
          {props.description} <br />
        </Text>
      ) : null}

      {props.notes ? (
        <Text className='menu-item-notes' variant='menuBody'>
          {props.notes === "...notes" ? "" : props.notes}
        </Text>
      ) : null}

      {props.modifiers ? (
        <Text className='menu-item-modifiers' variant='menuBody'>
          {props.modifiers === "...modifiers" ? "" : props.modifiers}
        </Text>
      ) : null}
    </Box>
  );
}
