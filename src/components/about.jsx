import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import AbouRow from "./AbouRow";
import { stackImgs, stackImgs1 } from "../data/data";

function About({ isLight }) {
  return (
    <section
      id="About"
      className="about"
      style={{
        padding: "7rem 0",
        background: !isLight ? "#0c070d" : "#DBBDDB",
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <h2 style={{ color: isLight ? "black" : "white" }}>About</h2>
        </div>
        <AbouRow
          stackImgs={stackImgs}
          headerText1={"Software Developer"}
          headerText2={"Developpement stack"}
          left={true}
          isLight={isLight}
        />
        <AbouRow
          stackImgs={stackImgs1}
          headerText1={"Software Developer"}
          headerText2={"Developpement stack"}
          left={false}
          isLight={isLight}
        />
      </div>
    </section>
  );
}

export default About;
