import React from "react";
import Page from "@components/layout/Page";

import AboutHero from "@sections/about/AboutHero";
import AboutIntroduction from "@sections/about/AboutIntroduction";
import AboutAwards from "@sections/about/AboutAwards";

export default function About(props) {
  return (
    <Page {...props}>
      <AboutHero />
      <AboutIntroduction />
      <AboutAwards />
    </Page>
  );
}
