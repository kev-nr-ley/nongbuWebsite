import React from "react";
import Page from "@components/layout/Page";
import ContactHero from "@sections/contact/ContactHero";

export default function Contact(props) {
  return (
    <Page {...props}>
      <ContactHero />
    </Page>
  );
}
