import React from "react";
import Headshot from "./images/javier-headshot.jpg";

export default function Info() {
  return (
    <div className="info-section">
      <img src={Headshot} alt="headshot"></img>
      <h1 className="name">Javier Guerra</h1>
      <h3 className="profession">Fullstack Developer</h3>
      <a className="portfolio">Portfolio</a>
    </div>
  );
}
