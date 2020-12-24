import React from "react";
import Hero from "../components/Hero ";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="Ops we can't find this page">
        <Link to="/" class="btn-primary">
          Go back Home
        </Link>
      </Banner>
    </Hero>
  );
}
