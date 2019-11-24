import React from "react";

import TopPageHeader from "../layout/TopPageHeader";
import Container from "@material-ui/core/Container";

const WhoWeTeachPage = () => {
  return (
    <div>
      <TopPageHeader text="Who do we teach?" />
      <Container>
        <p>We teach bot Adults and Children. In some of the courses we will provide our classes
          will provide teaching that suits both ages in a manner that will help them excel.
        </p>
        <p>Children's classes will be based on a more interactive approach to teaching as we find that this provides best results when they are are engaged.</p>
        <p>Adult classes will cover everything to complete a lesson with a ability to ask any questions with regards to the lesson</p>
      </Container>
    </div>
  );
};

export default WhoWeTeachPage;
