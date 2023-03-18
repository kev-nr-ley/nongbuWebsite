import React from "react";
import ChakraLink from "@components/ChakraLink";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";
export default function LogoLink(props) {
  return (
    <ChakraLink to={props.to} name={props.name} {...props}>
      <NongbuImageContainer
        src={props.src}
        w={props.w}
        h={props.h}
        {...props}
      />
    </ChakraLink>
  );
}
