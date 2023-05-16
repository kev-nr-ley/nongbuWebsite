import React from "react";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";
import ChakraLink from "@components/ChakraLink";
export default function FantuanLink(...props) {
  return (

    <ChakraLink
      to='https://www.fantuanorder.com/store/nongbu-korean-eatery/ca-9090'
      name='Fantuan'
      target='_blank'
      {...props}>
      <NongbuImageContainer
        filename='fantuan-logo'
        name='Fantuan Logo'
        w={["8rem", "12rem", "12rem", "12rem"]}
        transition="all 0.2s ease-in-out"
        _hover={{ transform: "scale(1.1)" }}
      />
    </ChakraLink>
  );
}


