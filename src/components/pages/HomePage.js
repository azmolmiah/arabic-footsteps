import React, { Fragment } from 'react';

import Header from '../Layout/HomePage/Header';
import Container from '@material-ui/core/Container';
import BriefAbout from '../Layout/HomePage/BriefAbout';

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Container maxWidth='md'>
        <BriefAbout />
      </Container>
    </Fragment>
  );
};

export default HomePage;
