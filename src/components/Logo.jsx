import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Link,
  Flex,
  Button,
  Menu,
  Image,
  useColorMode,
} from "@chakra-ui/react";
function Logo(props) {
  return (
    <Box
      w={`${props.width}px`}
      minW={`${props.width}px`}
      h={`${props.height}px`}
      minH={`${props.height}px`}
      bg={`${props.bg}`}
>

      <Image
        width='100%'
        height='100%'
        objectFit='contain'
        objectPosition='center'
        src={`/logos/${props.src}`}
        placeholder={`url('https://via.placeholder.com/${props.width}x${props.height}')`}
        alt={`${props.src} logo`}        
      />
    </Box>
  );
}

export default Logo;
