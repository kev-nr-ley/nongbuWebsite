import React from "react";
import Page from "@components/layout/Page";
import HomeHero from "@sections/home/HomeHero";
import HomeAbout from "@sections/home/HomeAbout";
import HomeEvents from "@sections/home/HomeEvents";
import HomeTakeout from "@sections/home/HomeTakeout";

function Home(props) {
  return (
    <Page {...props}>
      <HomeHero h={['100vh', '100vh', '92vh']} />
      <HomeAbout />
      <HomeEvents />
      <HomeTakeout />
    </Page>
  );
}

export default Home;
