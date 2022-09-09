import React from "react";

import Svg from "./Svg";

import { experiences } from "../data/data";

const ExperienceCard = ({ logo, title, desc, date, isLight }) => {
  return (
    <>
      <div
        className="card experince-card"
        style={{
          backgroundImage: `url("./imgs/graph2.png")`,
          backgroundRepeat: "no-repeat",
          maxWidth: "700px",
        }}
      >
        <img src={logo} alt="logo" className="img-fluid card-logo" />
        <div className="card-right" style={{ textAlign: "initial" }}>
          <b
            className="card-date"
            style={{ color: isLight ? "black" : "white" }}
          >
            {date}
          </b>
          <b
            className="card-title"
            style={{ color: isLight ? "black" : "white" }}
          >
            {title}
          </b>
          <p
            className="card-description"
            style={{ color: isLight ? "black" : "white" }}
          >
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

const Experiences = ({ isLight }) => {
  return (
    <>
      <Svg title={"Experiences"} />
      <div
        className="container col-lg-12 justify-content-center align-content-center"
        style={{ textAlign: "-webkit-center" }}
      >
        {experiences.map((exp, index) => {
          return (
            <ExperienceCard
              title={exp.title}
              date={exp.date}
              logo={exp.logo}
              desc={exp.desc}
              isLight={isLight}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Experiences;
