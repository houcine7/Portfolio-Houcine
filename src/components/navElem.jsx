import React, { useState } from "react";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function NavBar({ isLight, setIsLight }) {
  const styleSwitchMode = {
    width: "63px",
    height: "25px",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    display: "flex",
    justifyContent: isLight ? "flex-end" : "flex-start",
    borderRadius: "50px",
    padding: "10px",
    cursor: "pointer",
    alignItems: "center",
  };

  const toggleSwitch = () =>
    setIsLight((prevState) => {
      localStorage.setItem("theme", !prevState);
      return !prevState;
    });
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <Fade top duration={1000} distance="20px">
      <nav
        className="nav navbar navbar-expand-lg"
        style={{ background: !isLight ? "#0c070d" : "#DBBDDB" }}
      >
        <NavLink
          className="navbar-brand"
          to="#home"
          style={{
            color:
              "linear-gradient(90deg, #963cff 0%, rgba(255, 0, 101, 1) 100%)",
          }}
        >
          <img
            src="./imgs/logo.png"
            alt="logo img"
            className="navbr-brand img-fluid"
            style={{ maxWidth: "55px" }}
          />
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
          style={{ justifyContent: "end", textAlign: "-webkit-center" }}
        >
          <ul
            className="navbar-nav "
            style={{
              display: "flex",
              width: "78%",
              justifyContent: "space-around",
              fontFamily: "Google Sans Regular",
              alignItems: "center",
            }}
          >
            <li className="nav-item active ">
              <a
                className=" nav-link   homelink "
                href="/"
                style={{ color: isLight ? "black" : "white" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link   projectslink"
                href="/Projects"
                style={{ color: isLight ? "black" : "white" }}
              >
                Projects
              </a>
            </li>
            <li
              className="nav-item "
              style={{ textAlign: "-webkit-match-parent" }}
            >
              <a
                className=" nav-link eclink"
                href="/Education"
                style={{
                  color: isLight ? "black" : "white",
                }}
              >
                Education & Experinces
              </a>
            </li>
            <li className="nav-item ">
              <a
                className=" nav-link  crlink"
                href="#"
                style={{ color: isLight ? "black" : "white" }}
              >
                Contact
              </a>
            </li>
          </ul>
          <div
            className="switch nav-item"
            style={{ ...styleSwitchMode, float: "left" }}
            onClick={toggleSwitch}
          >
            <motion.div
              className="handle"
              layout
              transition={spring}
              style={{ backgroundImage: "./imgs/moon.png" }}
            />
          </div>
        </div>
      </nav>
    </Fade>
  );
}

export default NavBar;
