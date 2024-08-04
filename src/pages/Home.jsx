import React from "react";
import Sales from "../components/Home/Sales";
import Browsecategories from "../components/Home/Browsecategories";
import Exploreproduct from "../components/Home/Exploreproduct";
import Services from "../components/Home/Services";

export const Home = () => {
  return (
    <div>
      <Sales />
      <Browsecategories />
      <Exploreproduct />
      <Services />
    </div>
  );
};
