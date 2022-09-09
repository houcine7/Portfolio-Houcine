import React from "react";
function Footer({ isLight }) {
  return (
    <footer
      id="footer"
      style={{ background: !isLight ? "#0c070d" : "#DBBDDB" }}
    >
      <div className="container text-center justify-content-center">
        <div
          className="copyright"
          style={{ color: isLight ? "black" : "white" }}
        >
          &copy; Copyright
          <strong>
            <span>
              <img
                src="./imgs/logo.png"
                alt="logo"
                className="logo img-fluid"
                style={{ maxWidth: "30px" }}
              />
              Lahoucine EL ADDALI
            </span>
          </strong>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
