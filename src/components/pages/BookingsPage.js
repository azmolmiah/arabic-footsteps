import React from "react";

import TopPageHeader from "../layout/TopPageHeader";
import Bookings from "../layout/bookingpage/Bookings";

const BookingsPage = () => {
  return (
    <div>
      <TopPageHeader text="Book your class here" />
      <Bookings />
    </div>
  );
};

export default BookingsPage;
