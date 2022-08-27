import React from "react";
import Spinner from "react-spinkit";
import { useState } from "react";

const Loader = () => {
  let [display, setDispaly] = useState("none");
  function loading() {
    window.onload = () => {
      console.log("loading...");
    };
  }
  return (
    <div className="preloader" style={{ display: `${display}` }}>
      <Spinner name="wandering-cubes" color="red" className="loader" />
    </div>
  );
};

export default Loader;
