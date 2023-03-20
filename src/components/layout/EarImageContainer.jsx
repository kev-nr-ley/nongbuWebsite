import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
export default function NongbuImageContainer(props) {
  const path = "/images/";
  const type = ".webp";

  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Box
      className='NongbuImageContainer'
      position='relative'
      w={props.w || "100%"}
      h={props.h || "100%"}
      {...props}>
      <Image
        position='absolute'
        top='0'
        left='0'
        w='100%'
        h='100%'
        filter='grayscale(50%)'
        transition='filter 200ms'
        _hover={{
          filter: "grayscale(0%)",
        }}
        objectFit={props.objectFit || "cover"}
        name={props.name}
        src={props.src || path + props.filename + type}
        alt={`Image of ${props.name}`}
        objectPosition={props.objectPosition || "center"}
        aria-label={`Image of ${props.name}`}
      />
      <Flex
        position='absolute'
        top='0'
        left='0'
        w='100%'
        h='100%'
        bg='#ffffff50'
        alignItems='center'
        justifyContent='center
        '>
        <Image src='/images/ear-big.webp' h='33%' objectFit='contain'></Image>
      </Flex>
    </Box>
  );
}
