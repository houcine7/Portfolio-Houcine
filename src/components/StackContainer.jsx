import React from "react";

const StackContainer = ({ img, name }) => {
  return (
    <>
      <img
        src={img}
        alt="Stack logo"
        className="img-fluid stackimgs"
        data-bs-toggle="tooltip"
        data-bs-container="true"
        data-bs-fallbackplacements="top, right, bottom, left"
        data-bs-x-placement="bottom"
        data-bs-offset="10,20"
        title={name}
      />
    </>
  );
};

export default StackContainer;
