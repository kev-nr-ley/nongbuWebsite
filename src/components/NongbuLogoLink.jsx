import React from "react";
import { Link } from "react-router-dom";
import Logo from "@components/Logo";
export default function NongbuLogoLink() {
  return (
    <Link to='/'>
      <Logo
        src='nongbu-logo.webp'
        w='52px'
        h='52px'
        aira-label='Nongbu Korean Restaurant'
        title='Nongbu Korean Restaurant'
        _hover={{ opacity: "0.4", bg:'orange' }}
        
      />
    </Link>
  );
}
