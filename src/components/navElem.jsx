import React, { useState } from "react";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  const [isOn, setIsOn] = useState(false);
  const styleSwitchMode = {
    width: "63px",
    height: "25px",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    display: "flex",
    justifyContent: isOn ? "flex-end" : "flex-start",
    borderRadius: "50px",
    padding: "10px",
    cursor: "pointer",
    alignItems: "center",
  };

  const toggleSwitch = () =>
    setIsOn((prevState) => {
      console.log(prevState);
      return !prevState;
    });
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  // const [currTheme, setCurrTheme] = useState("light");

  function changeTheme() {
    // if (currTheme === "light") {
    //   localStorage.setItem("theme", "dark");
    //   setCurrTheme("dark");
    // } else {
    //   localStorage.setItem("theme", "light");
    //   setCurrTheme("light");
    // }
  }

  return (
    <Fade top duration={1000} distance="20px">
      <nav className="nav navbar navbar-expand-lg">
        <NavLink
          className="navbar-brand"
          to="#home"
          style={{
            color:
              "linear-gradient(90deg, #963cff 0%, rgba(255, 0, 101, 1) 100%)",
          }}
        >
          Navbar
        </NavLink>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon navbar-toggler"
          htmlFor="menu-btn"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navicon"></span>
        </label>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ justifyContent: "center", textAlign: "-webkit-center" }}
        >
          <ul
            className="navbar-nav light"
            style={{
              display: "flex",
              width: "60%",
              justifyContent: "space-around",
              fontFamily: "Google Sans Regular",
              alignItems: "center",
            }}
          >
            <li className="nav-item active ">
              <a className=" nav-link  light homelink " href="#">
                Home
              </a>
            </li>
            <li className="nav-item light ">
              <a className="nav-link light xplink" href="#">
                experince
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link  light projectslink" href="#">
                Project
              </a>
            </li>
            <li className="nav-item light ">
              <a className=" nav-link  light eclink " href="#">
                Education
              </a>
            </li>
            <li className="nav-item light">
              <a className="light nav-link  crlink" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div
            className="switch nav-item"
            style={{ ...styleSwitchMode, float: "left" }}
            onClick={toggleSwitch}
          >
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
      </nav>
    </Fade>
  );
}

export default NavBar;
