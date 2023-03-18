import React from "react";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";
import ChakraLink from "@components/ChakraLink";

export default function NongbuLogoLink(props) {
  return (
    <ChakraLink to='/' w={props.iconsize} h={props.iconsize} {...props}>
      <NongbuImageContainer
        w={props.iconsize}
        h={props.iconsize}
        src={`/logos/nongbu-logo.webp`}
        alt='Nongbu logo'
      />
    </ChakraLink>
  );
}
