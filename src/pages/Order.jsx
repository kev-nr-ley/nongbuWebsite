import React from "react";
import OrderMain from "@sections/order/OrderMain";
import Page from "@components/Page";
export default function Order(props) {
  return (
    <Page {...props}>
      <OrderMain />
    </Page>
  );
}
