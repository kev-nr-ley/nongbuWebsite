import React from "react";
import Page from "@components/layout/Page";
import HomeHero from "@sections/home/HomeHero";
import HomeAbout from "@sections/home/HomeAbout";
import HomeEvents from "@sections/home/HomeEvents";
import HomeTakeout from "@sections/home/HomeTakeout";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
function ErrorPage(props) {
  return (
    <Page {...props}>
      <Flex
        w='100vw'
        h='90vh'
    bg='light'
        alignItems='center'
        justifyContent='center'
            flexDirection='column'
        >
        <Text>404 Error</Text>
        <Link href='/'>Home</Link>
        <Link href='/menu'>Menu</Link>
      </Flex>
    </Page>
  );
}

export default ErrorPage;
