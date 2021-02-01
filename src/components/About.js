import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam omnis nisi excepturi illo quidem ipsum cupiditate doloribus autem. Fugit possimus suscipit ratione quos? Maiores est perferendis eligendi sit temporibus.</p>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
