import React from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
export default function NongbuBannerLink(props) {
  return (
    <Link to='/' w='60px' h='60px'>
      <Image
        w='240px'
        h='80px'
        minW='240px'
        minH='80px'
        maxW='240px'
        maxH='80px'
        objectFit='contain'
        objectPosition='center'
        src={`/logos/nongbu-banner-logo.webp`}
        placeholder={`url('https://via.placeholder.com/${props.w}x${props.h}')`}
        alt={`${props.src} logo`}
      />
    </Link>
  );
}
