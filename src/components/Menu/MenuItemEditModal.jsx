/* eslint-disable react/prop-types */
import { Flex, VStack, HStack, Text } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
export default function MenuItemEditModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      english: props.item.english,
      korean: props.item.korean,
      price: props.item.price,
    },
  });

  const [item, setItem] = useState({
    english: props.item.english,
    korean: props.item.korean,
    price: props.item.price,
  });

  const loadedMenu = props.functions.loadedMenu;
  const setLoadedMenu = props.functions.setLoadedMenu;
  const refreshMenu = props.functions.refreshMenu;

  // CRUD functions ------------------------------
  //update menu
  const updateMenu = () => {
    const newMenu = loadedMenu;
    newMenu.items.forEach((item) => {
      if (item.id === props.item.id) {
        item = item;
      }
    });
  };

  //update item
  const updateItemInMenu = (item) => {
    const oldMenu = loadedMenu;
    const newMenu = oldMenu.items.push(item);
    oldMenu.items = newMenu;
  };

  //delete
  const deleteItemFromMenu = (id) => {
    const oldMenu = loadedMenu;
    // const newMenu = oldMenu.items.filter((item) => item.id !== id);
    // oldMenu.items = newMenu;
  };

  //delete button handler
  const handleDelete = () => {
    deleteItemFromMenu(item.id);
    onClose();
  };

  //create
  const addItemToMenu = (item) => {
    const oldMenu = loadedMenu;
    console.log(oldMenu)

  };

  // ---------------------------------------------

  // Form fucntions ------------------------------
  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    deleteItemFromMenu(item.id);

    setItem({
      english: data.english,
      korean: data.korean,
      price: data.price,
      id: data.english,
    });

    addItemToMenu(item);
    refreshMenu();
    onClose();
  };

  const onError = (errors, event) => {
    console.log("error");
    console.log(errors);
  };

  const englishName = watch("english");
  const koreanName = watch("korean");

  // ---------------------------------------------
  return (
    <HStack
      alignSelf='flex-start'
      {...props}>
      <Button
        onClick={onOpen}
        color='black'
        bg='blue.500'>
        Edit
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody px='1rem'>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <Text>{englishName}</Text>
              <input
                {...register("english", {
                  required: "english name required",
                  minLength: { value: 4, message: "min length is 4" },
                })}
                type='text'
                placeholder={item.english}
                message='english name is required'
              />
              <input
                {...register("korean", { required: "korean name required" })}
                placeholder={item.korean}
                type='text'
              />
              <input
                {...register("price", { required: "price required" })}
                type='text'
              />
              {errors.english && <Text>{errors.english.message}</Text>}
              {errors.korean && <Text>{errors.korean.message}</Text>}
              {errors.price && <Text>required</Text>}
              <input type='submit' />
            </form>
          </ModalBody>

          <ModalFooter
            as={Flex}
            gap='1rem'>
            <Button
              onClick={handleDelete}
              color='gray.100'
              bg='black'
              _hover={{
                color: "red.500",
              }}>
              DELETE
            </Button>

            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
}
