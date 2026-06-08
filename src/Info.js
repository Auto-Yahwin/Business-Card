import React from "react";
import "./style.css";

export default function Info() {
  return (
    <div className="info">
      <img src={`${process.env.PUBLIC_URL}/Solomon Yahwin1.jpeg`} alt="Solomon's Picture" />
      <h1>OKON, SOLOMON YAHWIN</h1>
      <h3>Front-end Developer</h3>
      <a href="https://www.some.com">Yahwin's Portfolio</a>
      <button>
        <i className="fa fa-envelope fa-3x fa0"></i>
        <span>Email</span>
      </button>
    </div>
  );
}
