import React from "react";

const Education = ({ isLight }) => {
  return (
    <section className="container align-items-center  center-block">
      <div className="container align-self-center text-center">
        <div
          className="row justify-content-center align-items-center"
          style={{ paddingTop: "90px" }}
        >
          <div className="col-lg-6  text-light">
            <h1
              className="text-center"
              style={{ color: isLight ? "black" : "white" }}
            >
              Education
            </h1>
            <p
              className="text description"
              style={{
                textAlign: "justify",
                color: isLight ? "black" : "white",
              }}
            >
              I'm a Software Engineer <br />
              I've always been fascinated by IT and I am more interested in web
              development. I started to learn and discover as much as possible
              about this field. And now I become more familiar with a variety of
              web development processes, including UX, UI design, database
              design, and with front-end and back-end technologies. For me the
              idea of creating something that didn’t previously exist ,the joy
              of building something and seeing it come to life is what makes Web
              development really amazing .And every day you get to learn
              something new.
            </p>
          </div>
          <div className="col-lg-6  ">
            <img
              src="./imgs/Education.png"
              alt="logo Edu"
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
