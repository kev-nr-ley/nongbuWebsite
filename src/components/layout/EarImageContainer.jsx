import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
export default function NongbuImageContainer(props) {
  const path = "/images/";
  const type = ".webp";

  return (
    <Box position="relative" w="100%" h="100%">
      <Image
        objectFit={props.objectFit || "cover"}
        name={props.name}
        src={props.src || path + props.filename + type}
        alt={`Image of ${props.name}`}
        objectPosition={props.objectPosition || "center"}
        aria-label={`Image of ${props.name}`}
        filter="grayscale(50%)"
        transition="all 300ms ease-in-out"
        _hover={{
          filter: "grayscale(0%)",
          }}
        _active={{
          transform: 'scale(1.1)'

        }}
        {...props}
      />
    </Box>
  );
}
