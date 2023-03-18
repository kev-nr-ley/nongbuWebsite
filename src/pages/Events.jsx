import React from "react";
import Page from "@components/layout/Page";
import EventServices from "@sections/events/EventServices";
import EventSpace from "@sections/events/EventSpace";
export default function Events(props) {
  return (
    <Page {...props}>
      <EventServices />
      <EventSpace />
    </Page>
  );
}
