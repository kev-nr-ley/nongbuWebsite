import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
export default function NongbuImageContainer(props) {
  const path = "/images/";
  const type = ".webp";

  const [mouseIsOver, setMouseIsOver] = useState(false);

  return (
    <Box
      className='NongbuImageContainer'
      position='relative'
      w={props.w || "100%"}
      h={props.h || "100%"}
      overflow='hidden'
      {...props}>
      <Image
        position='absolute'
        top={mouseIsOver ? "-20%" : "0"}
        left={mouseIsOver ? "-0%" : "0"}
        h={mouseIsOver ? "140%" : "100%"}
        w={mouseIsOver ? "120%" : "100%"}
        filter='grayscale(50%)'
        transition='all 300ms'
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
        onMouseEnter={() => setMouseIsOver(true)}
        onMouseLeave={() => setMouseIsOver(false)}
        bg={mouseIsOver ? "transparents" : "#00000030"}
        alignItems='center'
        justifyContent='center'>
        <Image
          src='/images/ear-big.webp'
          transition = 'all 200ms'
          w={mouseIsOver ? "0" : "33%"}
          h={mouseIsOver ? "0" : "33%"}
          _hover={{
            transform: "scale(1.3) rotate(12deg)",
          }}
          objectFit='contain'></Image>
      </Flex>
    </Box>
  );
}
