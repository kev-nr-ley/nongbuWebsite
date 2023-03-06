import React from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
export default function NongbuLogoLink(props) {
  return (
      <Link to='/' w='60px' h='60px'>
        <Image
        w='60px'
        h='60px'
        minW='60px'
        minH='60px'
        maxW='60px'
        maxH='60px'
          objectFit='contain'
          objectPosition='center'
          src={`/logos/nongbu-logo.webp`}
          placeholder={`url('https://via.placeholder.com/${props.w}x${props.h}')`}
          alt={`${props.src} logo`}
        />
      </Link>
  );
}
