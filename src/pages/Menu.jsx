import React from "react";
import MenuMain from "@sections/menu/MenuMain";
import Page from "@components/layout/Page";
export default function Menu(props) {
  return (
    <Page {...props}>
      <MenuMain />
    </Page>
  );
}
