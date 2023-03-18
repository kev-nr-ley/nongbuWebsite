import React from "react";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";


import ChakraLink from "@components/ChakraLink";

export default function NongbuBannerLink(props) {
  return (
    <ChakraLink to='/' {...props}>
      <NongbuImageContainer
        w='240px'
        h='60px'
        src={`/logos/nongbu-banner-logo.webp`}
        alt='Nongbu logo'
      />
    </ChakraLink>
  );
}
