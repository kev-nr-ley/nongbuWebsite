import React from "react";
import Page from "@components/layout/Page";
import HomeHero from "@sections/home/HomeHero";
import HomeAbout from "@sections/home/HomeAbout";
import HomeEventsMess from "@sections/home/HomeEventsMess";
import HomeTakeout from "@sections/home/HomeTakeout";

function Home(props) {
  return (
    <Page {...props}>
      <HomeHero h={['100vh', '100vh', '92vh']} />
      <HomeAbout />
      <HomeEventsMess />
      <HomeTakeout />
    </Page>
  );
}

export default Home;
