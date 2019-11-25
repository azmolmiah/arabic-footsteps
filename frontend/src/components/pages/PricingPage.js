import React from "react";

import TopPageHeader from "../layout/TopPageHeader";
import Container from "@material-ui/core/Container";

const PricingPage = () => {
  return (
    <div>
      <TopPageHeader text="How much does it cost?" />
      <Container maxWidth="md">
        <h3>Payment plans</h3>
        <p>
          Our group tuition is offered at just £5/class, and payment is due once
          every 12-session term, hence a £60 payment just once every 12 weeks
          (based upon 1 class a week). Our accepted method of payment is through
          PayPal.
        </p>
        <p>
          Private one-to-one classes may be offered dependant on tutor
          availability, but cannot be guaranteed.
        </p>
        <ul>
          <li>
            {" "}
            If the tutor is unable to attend a scheduled class, notice will be
            given to all registered students of that class and it will not count
            toward their payment, it will not be charged or count as one of the
            12 sessions.{" "}
          </li>
          <li>
            Students who register on to group classes make payments upon the
            fixed 12-session term basis that runs between fixed dates and we
            cannot offer make-up classes for any students who miss a class -
            however if there happens to be another group class running for the
            same course at an alternative time, the student is welcome to log on
            {"&"} catch up missed sessions with that group.
          </li>
          <li>
            If the tutor experiences technical connection issues with the
            internet and is therefore late logging on, that missed time will be
            made up at the end of the class to a maximum of 10 minutes, and any
            further time placed into credit to be added on at a later class.{" "}
          </li>
          <li>
            Our email address is available to all students to make any enquiries
            or ask questions regarding their studies as they go along.{" "}
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default PricingPage;
