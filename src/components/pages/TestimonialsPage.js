import React from "react";

import TopPageHeader from "../layout/TopPageHeader";
import Container from "@material-ui/core/Container";

const TestimonialsPage = () => {
  return (
    <div>
      <TopPageHeader text="What student's say about us" />
      <Container>
        <h4>Shamsul</h4>
        <p>I studied and completed the Madinah Arabic book 1. Excellent classes. Really enjoyable, taught at a moderate pace. Would recommend 100%.</p>
        <h4>Ajmal</h4>
        <p>The structure of the lessons helped me to read and speak the basic's of arabic with ease.</p>
      </Container>
    </div>
  );
};

export default TestimonialsPage;
