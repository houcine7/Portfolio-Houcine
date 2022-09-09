import React from "react";
import { certificates } from "../data/data";
import Svg from "./Svg";
const CertificationCard = ({ img, title, desc, link, isLight }) => {
  return (
    <div className="card cer-card align-items-center">
      <img
        src={img}
        alt="Education"
        className="img-fluid"
        style={{ maxWidth: "30%" }}
      />
      <h3
        className="card-title text-center"
        style={{ color: isLight ? "black" : "white" }}
      >
        {title}
      </h3>
      <p
        className="card-description"
        style={{ color: isLight ? "black" : "white" }}
      >
        {desc}
      </p>
      <button
        type="link"
        className="card-btn btn"
        onClick={() => {
          window.open(link);
          return true;
        }}
      >
        View Certaficate
      </button>
    </div>
  );
};

const CertificationCards = ({ isLight }) => {
  return (
    <>
      <Svg title={"Certificates"} />
      <div className="container">
        <div className="row" style={{ gap: "20px" }}>
          {certificates.map((certificates, index) => {
            return (
              <CertificationCard
                title={certificates.title}
                img={certificates.img}
                desc={certificates.desc}
                link={certificates.link}
                isLight={isLight}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CertificationCards;
