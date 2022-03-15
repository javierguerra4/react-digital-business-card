import React from "react";

export default function About() {
  return (
    <div className="about-interest-container">
      <div className="about-container">
        <h2 className="about">About</h2>
        <p className="about-content">
          I am a fullstack developer that enjoys learning about web-development
          as a whole. I continue to increase the knowledge of the languages I
          already know, and expose myself to new languages and frameworks.
        </p>
      </div>
      <div className="interest-container">
        <h2 className="interests">Interests</h2>
        <p className="interests-content">
          {" "}
          You will catch me enjoying a good action comedy or thriller movie. I
          spend time in the gym listening to some great jams or podcast. I love
          food and trying new restaurants.
        </p>
      </div>
    </div>
  );
}
