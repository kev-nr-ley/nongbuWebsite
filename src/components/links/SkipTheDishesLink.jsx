import React from "react";
import NongbuImageContainer from "@components/layout/NongbuImageContainer";
import ChakraLink from "@components/ChakraLink";
export default function SkipTheDishesLink(props) {
  return (
    <ChakraLink
      to='https://www.skipthedishes.com/nongbu-korean-eatery'
      name='Skip The Dishes'
      target='_blank'
      {...props}>
      <NongbuImageContainer
        filename='skipthedishes-logo'
        name='Skip The Dishes Logo'
        w={["8rem", "12rem", "12rem", "12rem"]}
      />
    </ChakraLink>
  );
}
