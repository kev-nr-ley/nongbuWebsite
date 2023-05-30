import React from "react";
import EarHero from "@sections/ear/EarHero";
import Page from "@components/layout/Page";
export default function Ear(props) {
  return (
    <Page {...props}>
      <EarHero />
    </Page>
  );
}
