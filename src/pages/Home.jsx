import React from "react";
import Page from "@components/layout/Page";
import { useTheme } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";
import HomeHero from "@sections/home/HomeHero";
import HomeAbout from "@sections/home/HomeAbout";
import HomeEvents from "@sections/home/HomeEvents";
import HomeEventsMess from "@sections/home/HomeEventsMess";
import HomeTakeout from "@sections/home/HomeTakeout";

function Home(props) {
  const { colors } = useTheme();
  return (
    <Page position='relative' {...props}>
      <HomeHero h='90vh' />
      <HomeAbout />
      <HomeEventsMess />

      <HomeTakeout />
    </Page>
  );
}

export default Home;
