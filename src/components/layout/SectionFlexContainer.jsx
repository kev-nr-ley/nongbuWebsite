import React from "react";
import { Flex } from "@chakra-ui/react";

export default function SectionFlexContainer(props) {
  return (
    <Flex
      className="section-flex-container "
      alignItems={["center", "center"]}
      flexDirection={["column", "row", "row", "row"]}
      position="relative"
      justifyContent={"center"}
      h={["100%", "auto", "auto", "auto"]}
      w="clamp(20rem, 100%, 100%)"
      // border="1px solid red"
      color="dark"
      {...props}
    ></Flex>
  );
}
