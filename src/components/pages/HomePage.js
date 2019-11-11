import React, { Fragment } from 'react';

import Header from '../Layout/HomePage/Header';
import BriefAbout from '../Layout/HomePage/BriefAbout';
import Testimonials from '../Layout/HomePage/Testimonials';

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <BriefAbout />
      <Testimonials />
    </Fragment>
  );
};

export default HomePage;
