import React from "react";
import Slider from "react-slick";

function MySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="container featured-carousel owl-carousel">
      <div style={{ background: "whitesmoke" }}>
        <div className="item">
          <div className="work">
            <div
              className="img d-flex align-items-end justify-content-center"
              style={{
                backgroundImage: "url(./imgs/judo.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text w-100">
                <span className="cat">Judo</span>
                <h3>
                  <a href="#">
                    Au judo, vous utilisez l'énergie de votre adversaire à votre
                    avantage
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "black" }}>
        <div className="item">
          <div className="work">
            <div
              className="img d-flex align-items-end justify-content-center"
              style={{
                backgroundImage: "url(./imgs/judo.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text w-100">
                <span className="cat">Judo</span>
                <h3>
                  <a href="#">
                    Au judo, vous utilisez l'énergie de votre adversaire à votre
                    avantage
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "royalblue" }}>
        <div className="item">
          <div className="work">
            <div
              className="img d-flex align-items-end justify-content-center"
              style={{
                backgroundImage: "url(./imgs/judo.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text w-100">
                <span className="cat">Judo</span>
                <h3>
                  <a href="#">
                    Au judo, vous utilisez l'énergie de votre adversaire à votre
                    avantage
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "blueviolet" }}>
        <div className="item">
          <div className="work">
            <div
              className="img d-flex align-items-end justify-content-center"
              style={{
                backgroundImage: "url(./imgs/judo.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text w-100">
                <span className="cat">Judo</span>
                <h3>
                  <a href="#">
                    Au judo, vous utilisez l'énergie de votre adversaire à votre
                    avantage
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="item">
          <div className="work">
            <div
              className="img d-flex align-items-end justify-content-center"
              style={{
                backgroundImage: "url(./imgs/judo.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text w-100">
                <span className="cat">Judo</span>
                <h3>
                  <a href="#">
                    Au judo, vous utilisez l'énergie de votre adversaire à votre
                    avantage
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="item">
          <div className="work">
            <div
              className="img d-flex align-items-end justify-content-center"
              style={{
                backgroundImage: "url(./imgs/judo.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text w-100">
                <span className="cat">Judo</span>
                <h3>
                  <a href="#">
                    Au judo, vous utilisez l'énergie de votre adversaire à votre
                    avantage
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default MySlider;
