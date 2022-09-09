import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { headerParticles } from "../config/tsParticles";

const Home = ({ isLight }) => {
  // dark & light mode control :
  const [particlesCon, setParticleCon] = useState({
    ...headerParticles,
    background: { color: { value: !isLight ? "#0c070d" : "#DBBDDB" } },
  });

  useEffect(
    () =>
      setParticleCon({
        ...headerParticles,
        background: { color: { value: !isLight ? "#0c070d" : "#DBBDDB" } },
      }),
    [isLight]
  );
  //
  const particlesInit = useCallback(async (engine) => {
    console.log(particlesCon);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center text-center"
    >
      <div className="container row">
        <div
          className="col-lg-6"
          style={{
            textAlign: "-webkit-center",
            alignSelf: "center",
            color: isLight ? "black" : "white",
          }}
        >
          <h1> Hello dear</h1>
          <h3>
            I'm <span className="myname">Lahoucine EL ADDALI</span>
          </h3>
          <div
            className="row align-items-center"
            style={{ padding: "30px 0px", gap: "0.9rem" }}
          >
            <i className="fa-brands fa-stack fa-square-github"></i>
            <i className="fa-brands fa-stack fa-linkedin"></i>
            <i className="fa-brands fa-stack fa-square-facebook"></i>
            <i className="fa-brands fa-stack fa-square-instagram"></i>
            <i className="fa-solid fa-stack fa-square-envelope"></i>
          </div>
          <a href="#About" className="btn btn-lg  btn-primary">
            Explore More
          </a>
        </div>
        <div className="col-lg-6" style={{ position: "relative" }}>
          <img
            src="./imgs/me.png"
            alt="my photo"
            className="img-fluid1"
            style={{
              backgroundImage: "url('./imgs/graph1.png')",
              width: "80%",
            }}
          />
        </div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesCon}
      />
    </section>
  );
};

export default Home;
