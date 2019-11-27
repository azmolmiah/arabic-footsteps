import React from "react";
import TopPageHeader from "../layout/TopPageHeader";
import Container from "@material-ui/core/Container";

const QualTeachersPage = () => {
  return (
    <div>
      <TopPageHeader text="Qualified Teachers" />
      <Container maxWidth="md">
        <p>
          Our main Tutor is Abū Mu’ādh Taqweem Aslam, a graduate from the
          prestigious University of Madīnah, K.S.A.
        </p>
        <p>
          He holds a 1st class diploma in Arabic Language Studies, as well as 2
          two degrees; the first from the School of BusinessEconomics at the
          University of Manchester, U.K, and the second from the Faculty of
          Hadīth at the University of Madīnah, K.S.A.
        </p>
        <p>
          {" "}
          He has a decade of teaching experience - both children {"&"} adults -
          having taught the Arabic language since 2009, with hundreds of
          students enrolled over that 10-year period to date!
        </p>
      </Container>
    </div>
  );
};

export default QualTeachersPage;
