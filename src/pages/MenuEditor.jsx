import React from "react";
import Page from "@components/layout/Page";
import MenuItemEdit from "@components/Menu/MenuItemEdit";
import MenuItemEditModal from "@components/Menu/MenuItemEditModal";
// import { menu } from "@assets/data/Menu";

// import menu from "@assets/data/jsonMinimized";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

export default function MenuEditor(props) {
  // const [loadedMenu, setLoadedMenu] = useState(menu);
  return (
    <Page
      color='white'
      bg='black'
      pt='100px'
      w='100%'
      alignItems='left'
      textAlign='left'>
      {/* <VStack
        spacing={8}
        align='left'
        w='100%'>
        <Heading
          as='h1'
          size='2xl'>
          Menu Editor
        </Heading>
        <Text fontSize='xl'>
          Edit the menu here. Click on an item to edit it.
        </Text>
      </VStack> */}

      {/* <Accordion allowToggle>

          {loadedMenu.items.map((item) => (
            <AccordionItem>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  {item.english}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <MenuItemEditModal
                  item={item}
                  functions={{
                    loadedMenu,
                    setLoadedMenu,
                    refreshMenu,
                    setRefreshMenu,
                    setItemToEdit,
                  }}
                />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion> */}

      {JSON.stringify(loadedMenu)}
    </Page>
  );
}
