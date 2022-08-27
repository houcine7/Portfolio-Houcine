import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import AbouRow from "./AbouRow";
import { stackImgs, stackImgs1 } from "../data/data";

function About() {
  return (
    <section id="about" className="about" style={{ padding: "7rem 0" }}>
      <div className="container">
        <div className="section-title text-center">
          <h2>About</h2>
        </div>
        <AbouRow
          stackImgs={stackImgs}
          headerText1={"Software Developer"}
          headerText2={"Developpement stack"}
          left={true}
        />
        <AbouRow
          stackImgs={stackImgs1}
          headerText1={"Software Developer"}
          headerText2={"Developpement stack"}
          left={false}
        />
      </div>
    </section>
  );
}

export default About;
