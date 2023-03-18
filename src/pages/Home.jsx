import React from "react";
import Page from "@components/layout/Page";
import { useTheme } from "@chakra-ui/react";

import HomeHero from "@sections/home/HomeHero";
import HomeAbout from "@sections/home/HomeAbout";
import HomeEvents from "@sections/home/HomeEvents";
import HomeTakeout from "@sections/home/HomeTakeout";

function Home(props) {
  const { colors } = useTheme();
  return (
    <Page bg={colors.backgroundDark} {...props}>
      <HomeHero />
      <HomeAbout />
      <HomeEvents />
      <HomeTakeout />
    </Page>
  );
}

export default Home;
