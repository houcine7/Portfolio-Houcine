import React from "react";
import StackContainer from "./StackContainer";

const AbouRow = ({ stackImgs, headerText1, headerText2, left, isLight }) => {
  return (
    <>
      <div className="row" style={{ padding: "2rem 0" }}>
        {left && (
          <>
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 style={{ color: isLight ? "black" : "white" }}>
                  {headerText2}
                </h2>
                <div className="row">
                  {stackImgs.map((stack, i) => (
                    <StackContainer img={stack.img} key={i} name={stack.name} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        <div className="col-lg-6">
          <div className="section-title text-center">
            <h2 style={{ color: isLight ? "black" : "white" }}>
              {headerText1}
            </h2>
            <p className="text-muted">
              <span>⭐ </span>Website & mobile design
            </p>
            <p className="text-muted">
              <span>⭐ </span>Frontend developpement
            </p>
            <p className="text-muted">
              <span>⭐ </span>Backend developpement
            </p>
          </div>
        </div>
        {!left && (
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2 style={{ color: isLight ? "black" : "white" }}>
                {headerText2}
              </h2>
              <div className="row">
                {stackImgs.map((stack, i) => (
                  <StackContainer img={stack.img} key={i} name={stack.name} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AbouRow;
