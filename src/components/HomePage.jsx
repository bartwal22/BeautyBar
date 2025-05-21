import React from "react";
import Home from "./Home";
import Cosmetics from "./Cosmetics";
import DiscountSec from "./DiscountSec";
import { Value } from "./Value";
import Categories from "./Categories";
import IntroSection from "./IntroSection";
import NewArrivals from "./NewArrivals";
import BlogSection from "./BlogSection";
import StayInTouch from "./StayInTouch";

const HomePage = () => {
  return (
    <>
      <Home />
      <Cosmetics />
      <DiscountSec />
      <Value />
      <Categories />
      <IntroSection />
      <NewArrivals />
      <BlogSection />
      <StayInTouch />
    </>
  );
};

export default HomePage;
