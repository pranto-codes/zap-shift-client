import React from "react";
import Banner from "../Banner/Banner";
import Functions from "../../Functions/Functions";
import OurServices from "../../Services/OurServices";
import Brands from "../Brands/Brands";
import Support from "../Support/Support";

import Reviews from "../Review/Review";
import Merchant from "../../Merchant/Merchant";
import Faq from "../../Faq/Faq";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Functions></Functions>
      <OurServices></OurServices>
      <Brands></Brands>
      <Merchant></Merchant>
      <Support></Support>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <Faq></Faq>
    </div>
  );
};

export default Homepage;
