import React from "react";
import Info from "./Info.js";
import About from "./About.js";

export default function Card() {
  return (
    <div className="card">
      <Info />
      <About />
    </div>
  );
}
