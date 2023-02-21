import React from 'react'
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";

function ImageContainer() {
  return (
    <Box //image container
    w={["100%", "100%", "clamp(400px, 30vw, 450px)"]}
    h={["30vh", "30vh", "clamp(600px, 45vh, 700px)"]}
    bg='red'>
    <Image
      h='100%'
      w='100%'
      objectFit='cover'
      objectPosition={"center"}
      src='/src/assets/images/nongbu-2.jpg'></Image>
  </Box>
  )
}

export default ImageContainer