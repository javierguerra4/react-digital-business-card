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
      <a
        href="https://javierguerra4.github.io/Javier-Guerra-Portfolio/"
        target="_blank"
      >
        <h4 className="portfolio">Portfolio</h4>
      </a>
      <div className="buttons">
        <a href="mailto:javier.j.guerra4@gmail.com">
          <button className="mail-button">
            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/javier-guerra4/" target="_blank">
          <button className="linkedin-button">
            <i class="fab fa-linkedin fa-lg"></i>LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
