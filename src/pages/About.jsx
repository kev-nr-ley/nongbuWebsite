import React from "react";
import Magazine from "@sections/about/Magazine";
import AboutUs from "@sections/about/AboutUs";
import Hero from "@sections/about/Hero";
import Page from "@components/Page";

export default function About(props) {
  return (
    <Page {...props}>
      <Hero />
      <AboutUs />
      <Magazine />
    </Page>
  );
}
