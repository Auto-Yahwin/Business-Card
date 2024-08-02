import React from "react";
import Info from "./Info.js";
import About from "./About.js";
import Interest from "./Interest.js";
import Contact from "./Contact.js";
//import Footer from './Footer.js'

export default function Card() {
  return (
    <div className="container">
      <Info />
      <div className="section">
        <About />
        <Interest />
        <Contact />
      </div>
    </div>
  );
}
