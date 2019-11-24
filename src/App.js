import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/HomePage";
import About from "./components/pages/AboutPage";
import Contact from "./components/pages/ContactPage";
import Pricing from "./components/pages/PricingPage";
//import Faqs from "./components/pages/FaqsPage";
import Testimonials from "./components/pages/TestimonialsPage";
import Teachers from "./components/pages/QualTeachersPage";
import WhoWeTeach from "./components/pages/WhoWeTeachPage";
import Sessions from "./components/pages/SessionsPage";
import online from "./components/pages/OnlinePage";
import Progress from "./components/pages/ProgressPage";
//import Bookings from "./components/pages/BookingsPage";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/pricing" component={Pricing} />
          {/* <Route exact path="/faqs" component={Faqs} /> */}
          <Route exact path="/testimonials" component={Testimonials} />
          {/* <Route exact path="/bookings" component={Bookings} /> */}
          {/* Info card routes */}
          <Route exact path="/teachers" component={Teachers} />
          <Route exact path="/whoweteach" component={WhoWeTeach} />
          <Route exact path="/sessions" component={Sessions} />
          <Route exact path="/online" component={online} />
          <Route exact path="/progress" component={Progress} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
