import React from "react";

import { projects } from "../data/data";
const ProjectCard = ({ title, img, link, gitlink, technologies, isLight }) => {
  return (
    <div
      className="card"
      style={{
        maxWidth: "450px",
        borderRadius: "30px",
        backgroundColor: "inherit",
        boxShadow:
          "rgb(222 7 255) 0px 2px 4px 0px, rgb(255 0 255) 0px 5px 15px 0px",
      }}
    >
      <div className="card-body d-flex flex-row justify-content-center">
        <h5
          className="card-title font-weight-bold mb-2"
          style={{ color: isLight ? "black" : "white" }}
        >
          {title}
        </h5>
      </div>
      <div
        className="bg-image hover-overlay ripple rounded-0"
        data-mdb-ripple-color="light"
      >
        <img className="img-fluid project-img" src={img} alt="Card image cap" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div
            className="container row"
            style={{ flexWrap: "wrap", gap: "15px" }}
          >
            {technologies.map((tech, index) => {
              return (
                <b
                  className="stack-project"
                  key={index}
                  style={{ color: isLight ? "black" : "white" }}
                >
                  {tech}
                </b>
              );
            })}
          </div>

          <div className="d-flex justify-content-around projects-icons">
            <a href={link}>
              <i className="bi bi-link-45deg"> </i>
            </a>
            <a href={gitlink}>
              <i className="bi bi-github"> </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = ({ isLight }) => {
  return (
    <>
      <section
        className="projects d-flex flex-column justify-content-center align-items-center text-center"
        style={{ padding: "3rem 0" }}
      >
        <div className="container align-center">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="./imgs/projects.png"
                alt="Project"
              />
            </div>
            <div className="col-lg-6">
              <h1
                className="heading-projects title"
                style={{ color: isLight ? "black" : "white" }}
              >
                Projects
              </h1>
              <p
                className="text-align-justify"
                style={{ color: isLight ? "black" : "white" }}
              >
                this a desc to this section currently empty. sorry for that i'll
                work on this later
              </p>
            </div>
          </div>
        </div>

        <div className="heading " style={{ padding: "5rem 0" }}>
          <h1
            className="heading"
            style={{ color: isLight ? "black" : "white" }}
          >
            Selected porjects
          </h1>
        </div>
        <div className="container row" style={{ gap: "20px" }}>
          {projects.map((project, index) => {
            return (
              <ProjectCard
                title={project.title}
                img={project.img}
                link={project.link}
                gitlink={project.gitLink}
                technologies={project.technologies}
                isLight={isLight}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

//
