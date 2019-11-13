import React, { Fragment } from "react";

import Header from "../Layout/HomePage/Header";
import InfoCards from "../Layout/HomePage/InfoCards";
import Testimonials from "../Layout/HomePage/Testimonials";
import Footer from "../Layout/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <InfoCards />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
