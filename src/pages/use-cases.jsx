import React, { useEffect } from "react";
import Link from "next/link";

const PartnersClients = () => {
  useEffect(function mount() {
    window.location = '/partnerships';
  });

  return (
    <div>Redirecting to partnerships, click <Link href="/partnerships">here</Link> to go immediately.</div>
  );
};

export default PartnersClients;