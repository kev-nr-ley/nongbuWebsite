import React from "react";
import { Heading, HStack, Text, Box, Flex } from "@chakra-ui/react";
import { useState, useContext } from "react";

export default function FrankieLogo(props) {
  const nameSplit = websiteInf("frankieweb").name.split("");

  return (
    <Flex
      className='frankie-logo'
      flexDirection='column'
      fontFamily='Jockey One'
      position='relative'
      color='white'
      {...props}>
      <Heading
        as={Flex}
        fontFamily='Jockey One'
        textTransform='lowercase'
        fontSize={props.fontSize}>
        {nameSplit.map((letter, index) => {
          return (
            <FrankieFramerWrapper
              flexDirection='row'
              flexWrap='nowrap'
              key={index}
              initial={{ y: 0 }}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1,
                // repeat: Infinity,
                delay: 0,
              }}>
              {letter}
            </FrankieFramerWrapper>
          );
        })}
      </Heading>
      {/* <Text fontSize='0.5rem' mt='0' position='absolute' bottom='-30%'>design & development</Text> */}
    </Flex>
  );
}
