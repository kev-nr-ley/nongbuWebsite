import React from "react";
import EarHero from "@sections/Ear/EarHero";
import Page from "@components/layout/Page";
export default function Ear(props) {
  return (
    <Page {...props}>
      <EarHero />
    </Page>
  );
}
