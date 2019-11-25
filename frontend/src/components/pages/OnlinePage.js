import React from "react";

import TopPageHeader from "../layout/TopPageHeader";
import Container from "@material-ui/core/Container";

const StudyOnlinePage = () => {
  return (
    <div>
      <TopPageHeader text="Study with us online" />
      <Container maxWidth="md">
        <p>
          You will be able to study with us online according to set times during
          the week. Should you need to discuss any further arrangements then please contact us on our contact page.
        </p>
        <p>We will use Skype mainly for our online classes, to which you will need to have permission to access once payment has been made. Microsoft owns skype, this means you will be getting the best performance from our end and all you need to do is make sure you have access to wifi with reasonable speed</p>
      </Container>
    </div>
  );
};

export default StudyOnlinePage;
