import React, { Fragment } from "react";

import TopPageHeader from "../layout/TopPageHeader";
import Container from "@material-ui/core/Container";

const About = () => {
  return (
    <Fragment>
      <TopPageHeader text="Specialists in Arabic tuition" />
      <Container maxWidth="md">
        <h2>Why learn with “Arabic Footsteps”? </h2>
        <p>
          Welcome to “Arabic Footsteps” where we learn the beautiful language of
          Arabic step-by-step until we reach the top!
        </p>
        <p>
          Our tuition has been on offer at a localised level in and around
          Nelson, U.K. during the last 10 years between 2009-2019, however, now
          for the first time, we are opening up classes to the public at large
          via online platforms such as Skype {"&"} Zoom.
        </p>
        <p>
          We have a decade of experience in providing tuition to both adults and
          children, and during that time have adapted and moulded our programmes
          to suit English-speaking learners even more!
        </p>
        <p>
          Our main course follows the Madīnah Arabic Book series - a course that
          has been tried and tested since the 60’s! It is the course taught at
          the University of Madīnah, and the same course that our main tutor Abū
          Mu’ādh Taqweem Aslam studied and qualified in with a 1st grade Diploma
          of 96% in 2004, followed by a 1st class degree in Hadīth Sciences in
          2010...so you can rest assured you will be taught by a fully qualified
          {"&"} experienced tutor!
        </p>
        <p>
          Through a decade of experience, the classes are precisely structured,
          clear, {"&"} interesting...making the process of learning smooth {"&"}{" "}
          fluid. Student participation is a core aspect of tuition, engaging the
          student and ensuring they are able to pronounce the arabic
          words/phrases being learned properly. Clear tasks are highlighted for
          “homework {"&"} revision” so the student completely understands how to
          study in between tuition classes online with us.
        </p>
      </Container>
    </Fragment>
  );
};

export default About;
