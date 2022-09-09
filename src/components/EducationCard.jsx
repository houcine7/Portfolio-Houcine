import React from "react";
import Svg from "./Svg";

export const EducationCard = ({
  degreeName,
  desc,
  schoolName,
  startYear,
  endYear,
  isLight,
}) => {
  return (
    <>
      <div
        className="card-container"
        style={{
          background: !isLight ? "#0c070d" : "#DBBDDB",
        }}
      >
        <div className="bubble"></div>
        <div className="icon">
          <i className="bi bi-code"></i>
        </div>
        <div className="title">
          <h3 style={{ color: isLight ? "black" : "white" }}>{degreeName}</h3>
        </div>
        <div
          className="description"
          style={{ color: isLight ? "black" : "white" }}
        >
          <p>
            at {schoolName}
            <br /> {desc}
            <br />
            <b>
              {startYear} - {endYear}
            </b>
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </>
  );
};

export const EducationLayout = ({ data, isLight }) => {
  return (
    <>
      <Svg title={"Degrees"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <EducationCard
              degreeName={data[1].degree}
              desc={data[1].desc}
              schoolName={data[1].School}
              startYear={data[1].yearStart}
              endYear={data[1].yearEnd}
              isLight={isLight}
            />
            <EducationCard
              degreeName={data[2].degree}
              desc={data[2].desc}
              schoolName={data[2].School}
              startYear={data[2].yearStart}
              endYear={data[2].yearEnd}
              isLight={isLight}
            />
          </div>
          <div className="col-lg-6 center align-self-center">
            <EducationCard
              degreeName={data[0].degree}
              desc={data[0].desc}
              schoolName={data[0].School}
              startYear={data[0].yearStart}
              endYear={data[0].yearEnd}
              isLight={isLight}
            />
          </div>
        </div>
      </div>
    </>
  );
};
