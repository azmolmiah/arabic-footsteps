import React from "react";

import TopPageHeader from "../layout/TopPageHeader";
import ContactForm from "../layout/contactpage/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <TopPageHeader text="Contact Us" />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
