import React, { Fragment } from "react";

import Header from "../layout/homepage/Header";
import InfoCards from "../layout/homepage/InfoCards";
import Testimonials from "../layout/homepage/Testimonials";

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
