import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { headerParticles, particlesConfig } from "../config/tsParticles";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
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
          style={{ textAlign: "-webkit-center", alignSelf: "center" }}
        >
          <h1> Hello dear</h1>
          <h3>I'm Lahoucine EL ADDALI</h3>
          <div
            className="container row align-items-center justify-content-center"
            style={{ gap: "1rem", padding: "30px 0px" }}
          >
            <i className="fa-brands fa-stack fa-square-github"></i>
            <i className="fa-brands fa-stack fa-linkedin"></i>
            <i className="fa-brands fa-stack fa-square-facebook"></i>
            <i className="fa-brands fa-stack fa-square-instagram"></i>
            <i className="fa-solid fa-stack fa-square-envelope"></i>
          </div>
          <button className="btn btn-lg  btn-primary">EXplore More</button>
        </div>
        <div className="col-lg-6">
          <img
            src="./imgs/me.png"
            alt="mejknnnnnnnnnn"
            className="img-fluid img-fluid1"
          />
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: "0.8" }}
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stopColor="rgba(150, 60, 255, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stopColor="rgba(255, 0, 101, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M27,-27.9C34.6,-25.8,40.1,-16.9,40.7,-8C41.2,0.9,36.9,9.9,31.2,16.3C25.4,22.7,18.2,26.5,10.5,29.6C2.8,32.7,-5.4,35,-11.8,32.6C-18.2,30.2,-22.8,23,-28.7,15.4C-34.5,7.7,-41.6,-0.4,-41.3,-8.1C-40.9,-15.7,-33,-22.9,-24.9,-24.9C-16.8,-26.8,-8.4,-23.6,0.7,-24.4C9.7,-25.2,19.4,-30,27,-27.9Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              style={{
                transition: "all 0.3s ease 0s",
                justifyContent: "center",
                alignItems: "center",
              }}
              stroke="url(#sw-gradient)"
            ></path>
          </svg>
        </div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={headerParticles}
      />
    </section>
  );
};

// function Home() {
//   //

//   const options = {
//     particles: {
//       move: {
//         enable: true,
//       },
//     },
//   };
//   return (
//     <section
//       id="hero"
//       className="d-flex flex-column justify-content-center align-items-center"
//       style={{
//         height: "100vh",
//         width: "100%",
//       }}
//     >
//       <Particles options={options} />
//     </section>
//   );
// }

export default Home;
