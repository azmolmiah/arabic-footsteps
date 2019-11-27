import React from "react";

import TopPageHeader from "../layout/TopPageHeader";
import BookingsForm from "../layout/bookingpage/BookingsForm";

const BookingsPage = () => {
  return (
    <div>
      <TopPageHeader text="Book your class here" />
      <BookingsForm />
    </div>
  );
};

export default BookingsPage;
