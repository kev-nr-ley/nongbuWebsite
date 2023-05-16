import React from "react";
import OrderHero from "@sections/order/OrderHero";
import Page from "@components/layout/Page";
export default function Order(props) {
  return (
    <Page  {...props}>
      <OrderHero />
    </Page>
  );
}
