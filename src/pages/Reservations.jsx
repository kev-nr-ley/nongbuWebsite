import React from "react";
import ReservationsHero from "@sections/reservations/ReservationsHero";
import Page from "@components/layout/Page";
export default function Reservations(props) {
  return (
    <Page {...props}>
      <ReservationsHero />
    </Page>
  );
}
