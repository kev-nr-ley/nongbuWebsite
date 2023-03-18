import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function NongbuImageContainer(props) {
  const path = "/images/";
  const type = ".webp";
  return (
    <Box
      className='NongbuImageContainer'
      position={props.position || "relative"}
      w={props.w || "100%"}
      h={props.h || "100%"}
      {...props}>
      <Image
        w='100%'
        h='100%'
        objectFit={props.objectFit || "cover"}
        name={props.name}
        src={props.src || path + props.filename + type}
        alt={`Image of ${props.name}`}
        objectPosition={props.objectPosition || "center"}
        aria-label={`Image of ${props.name}`}
      />
    </Box>
  );
}
