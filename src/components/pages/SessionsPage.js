import React from "react";

import TopPageHeader from "../layout/TopPageHeader";
import Container from "@material-ui/core/Container";

const SessionsPage = () => {
  return (
    <div>
      <TopPageHeader text="What to expect in the lesson" />
      <Container maxWidth='md'>
        <p>Our lessons begin with going over the rules and their applications.
          We then read through the pages of the books and finially finish off by applying the words in your own words.
        </p>
        <h3>Example lesson</h3>
        <p>
            * Learn basic vocabulary on everyday objects, house/door/book/pen/desk/bed/cat/dog/ horse/camel/teacher/student/boy/man etc
            * Learn simple questioning formats, “what is this?” “Who is this?” “Is this...?” 
            * By the end of lesson 1 - yes lesson 1 - the student will be able to hold a basic 3-4 line dialogue!
        </p>
      </Container>
    </div>
  );
};

export default SessionsPage;
