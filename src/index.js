import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navElem";
import Home from "./components/Home";
import About from "./components/about";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//
function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <NavBar />
                <main id="main">
                  <Home />
                </main>
                <About />
              </>
            }
          />
          <Route
            path="*"
            exact
            element={
              <>
                <main id="main">
                  <h1>404 error</h1>
                </main>
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
