import React from "react";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";
import ChakraLink from "@components/ChakraLink";

export default function SkipTheDishesLink(...props) {
  return (
    <ChakraLink
      to='https://www.skipthedishes.com/nongbu-korean-eatery'
      name='Skip the dishes'
      {...props}>
      <NongbuImageContainer
        filename='skipthedishes-logo'
        name='Skip the dishes logo'
        w={["8rem", "12rem", "12rem", "12rem"]}
      />
      {/* test */}
    </ChakraLink>
  );
}
