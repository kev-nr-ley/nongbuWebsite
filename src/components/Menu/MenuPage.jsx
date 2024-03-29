import React from "react";
import { Flex, Box, Text, Heading, Grid, Image } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import MenuSection from "@components/Menu/MenuSection";

import { useState, useEffect } from "react";
export default function MenuPage(props) {
  function objectToArray(object) {
    return Object.keys(object).map((key) => {
      return object[key];
    });
  }

  const [useAccordion, setUseAccordion] = useState(false);
  const [windowResize, setWindowResize] = useState(false);

  const { title, description, footer, sections } = props.menu;
  useEffect(() => {
    if (window.innerWidth < 900) {
      setUseAccordion(true);
    } else {
      setUseAccordion(false);
    }
  }, [windowResize]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowResize(window.innerHeight);
    });
  }, []);

  return useAccordion ? (
    // mobile view
    <Accordion
      allowToggle
      {...props}>
      <AccordionItem>
        <Flex
          flexDirection='column'
          bg='backgroundLight'
          px='1rem'
          py='1rem'
          w='100%'
          justifyContent='flex-start'>
          <AccordionButton
            color='primary'
            fontSize='2.5rem'
            display='flex'
            justifyContent={"space-between"}
            p='0'>
            <Heading
              as='h2'
              variant='menuSection'
              color='primary'>
              {title}
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel position={"relative"}>
            <Image
              src={"images/nongbu-logo.webp"}
              alt='nongbu logo'
              position='absolute'
              bottom='0%'
              right='0%'
              zIndex='0'
              w='8rem'
              h='8rem'
            />

            <Text
              color='primary'
              fontStyle='italic'>
              {description}
            </Text>

            <Box
              direction='column'
              align='center'
              justify='center'>
              {Object.keys(sections).map((key, index) => {
                return (
                  <MenuSection
                    {...sections[key]}
                    key={index}
                  />
                );
              })}
            </Box>
          </AccordionPanel>
        </Flex>
      </AccordionItem>
    </Accordion>
  ) : (
    // desktop view
    <Flex
      flexDirection='column'
      bg='backgroundLight'
      px={["2rem"]}
      py={["2rem"]}
      justifyContent={"flex-start"}
      position='relative'>
      <Image
        src={"images/nongbu-logo.webp"}
        alt={title}
        position='absolute'
        bottom='1rem'
        right='1rem'
        zIndex='0'
        w={["100px", "150px", "200px"]}
        h={["100px", "150px", "200px"]}
      />
      <Heading
        as='h2'
        variant='menuSection'
        color='primary'>
        {title}
      </Heading>
      <Text
        color='primary'
        fontStyle='italic'>
        {description}
      </Text>

      <Box
        direction='column'
        align='center'
        justify='center'>
        {objectToArray(sections).map((section, index) => {
          return (
            <MenuSection
              {...section}
              key={index}
            />
          );
        })}
      </Box>
    </Flex>
  );
}
