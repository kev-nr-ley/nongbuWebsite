import React from "react";
import { Box, Image } from "@chakra-ui/react";
function Logo(props) {
  return (
    <Box w={props.w} h={props.h} bg={`${props.bg}`} cursor='pointer' {...props}>
      <Image
        w='100%'
        h='100%'
        objectFit='contain'
        objectPosition='center'
        src={`/logos/${props.src}`}
        placeholder={`url('https://via.placeholder.com/${props.w}x${props.h}')`}
        alt={`${props.src} logo`}
      />
    </Box>
  );
}

export default Logo;
