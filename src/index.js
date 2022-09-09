import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navElem";
import Home from "./components/Home";
import About from "./components/about";
import Footer from "./components/footer";
import Education from "./components/Education";
import { EducationLayout } from "./components/EducationCard";
import { Study } from "./data/data";
import CertificationCards from "./components/CertaficationCards";
import Experiences from "./components/Experiences";
import { Projects } from "./components/Projects";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//
function App() {
  //theme ctrl
  let theme;
  if (localStorage.getItem("theme") == "true") theme = true;
  else theme = false;
  const [isLight, setIsLight] = useState(theme);

  useEffect(() => {
    document.querySelector("body").style.backgroundColor = !isLight
      ? "#0c070d"
      : "#DBBDDB";
  }, [isLight]);

  //scroll event : the dsipaly of navigation bar
  var lastScrollTop = 0;
  window.addEventListener(
    "scroll",
    function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // downscroll code
        document.querySelector("nav").style.display = "none";
      } else {
        // upscroll code
        document.querySelector("nav").style.display = "flex";
      }
      lastScrollTop = st <= 0 ? 0 : st;
    },
    false
  );
  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <NavBar isLight={isLight} setIsLight={setIsLight} />
                <main id="main">
                  <Home isLight={isLight} />
                  <About isLight={isLight} />
                </main>
                <Footer isLight={isLight} />
              </>
            }
          />
          <Route
            path="/Education"
            exact
            element={
              <>
                <NavBar isLight={isLight} setIsLight={setIsLight} />
                <main id="main">
                  <Education isLight={isLight} />
                  <EducationLayout data={Study} isLight={isLight} />
                  <CertificationCards isLight={isLight} />
                  <Experiences isLight={isLight} />
                </main>
                <Footer isLight={isLight} />
              </>
            }
          />
          <Route
            path="/Projects"
            exact
            element={
              <>
                <NavBar isLight={isLight} setIsLight={setIsLight} />
                <main id="main">
                  <Projects isLight={isLight} />
                </main>
                <Footer isLight={isLight} />
              </>
            }
          />
          <Route
            path="*"
            exact
            element={
              <>
                <main id="main">{"Error"}</main>
              </>
            }
          />
        </Routes>
      </>
    </Router>
  );
}
let element = <App />;

root.render(element);
