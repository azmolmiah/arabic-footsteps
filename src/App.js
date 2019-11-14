import React from "react";

import NavBar from "./components/layout/NavBar";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
