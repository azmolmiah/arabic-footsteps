import React, { Fragment } from "react";

import Header from "../layout/HomePage/Header";
import InfoCards from "../layout/HomePage/InfoCards";
import Testimonials from "../layout/HomePage/Testimonials";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <InfoCards />
      <Testimonials />
    </Fragment>
  );
};

export default HomePage;
