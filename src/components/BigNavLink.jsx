import React from "react";
import BigMenuItem from "@components/BigMenuItem";
import { Link } from "react-router-dom";
export default function BigNavLink(props) {
  return (
    <Link to={props.to} onClick={props.onClick}>
      <BigMenuItem>{props.name}</BigMenuItem>
    </Link>
  );
}
