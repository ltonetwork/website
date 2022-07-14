import React, { useEffect } from "react";
import Link from "next/link";
import DarkTheme from "../layouts/Dark";

const PartnersClients = () => {
  useEffect(function mount() {
    window.location = '/partnerships';
  });

  return (
    <DarkTheme>
      <div>Redirecting to partnerships, click <Link href="/partnerships">here</Link> to go immediately.</div>
    </DarkTheme>    
  );
};

export default PartnersClients;