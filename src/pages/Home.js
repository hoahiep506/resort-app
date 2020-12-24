import React from "react";
import Hero from "../components/Hero ";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";

import FeatureRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Luxurious Rooms" subtitle="rooms starting at 299$">
          <Link to="/rooms" className="btn-primary">
            Let start
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms />
    </>
  );
}
