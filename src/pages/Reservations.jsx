import React from "react";
import ReservationsMain from "@sections/reservations/ReservationsMain";
import Page from "@components/Page";
export default function Reservations(props) {
  return (
    <Page {...props}>
      <ReservationsMain />
    </Page>
  );
}
