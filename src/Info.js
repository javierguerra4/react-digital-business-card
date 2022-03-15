import React from "react";
import Headshot from "./images/javier-headshot.jpg";

export default function Info() {
  return (
    <div className="info-section">
      <div className="headshot-container">
        <img className="my-headshot" src={Headshot} alt="headshot"></img>
      </div>
      <h1 className="name">Javier Guerra</h1>
      <h3 className="profession">Fullstack Developer</h3>
      <h4 className="portfolio">Portfolio</h4>
      <div className="buttons">
        <button className="mail-button">
          <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>Email
        </button>
        <button className="linkedin-button">
          <i class="fab fa-linkedin fa-lg"></i>LinkedIn
        </button>
      </div>
    </div>
  );
}
