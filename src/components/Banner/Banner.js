import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div>
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner ">
            <div class="carousel-item active background-one">
              <div className="container mt-5 py-5">
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div className="banner-caption py-5">
                      <div className="caption animate__animated animate__backInLeft">
                        <h1>The Brand New Iphone XS Max</h1>
                        <p>
                          iPhone XS and iPhone XS Max feature the sharpest OLED
                          displays and highest pixel density of any Apple
                          device,
                          <br /> HDR 10,br and Wide Color. iPhone XS Max the
                          6.5-inch .
                        </p>
                        <Link to="/home">
                          <button>SHOP NOW</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7"></div>
                </div>
              </div>
            </div>
            <div class="carousel-item background-two ">
              <div className="container mt-5 py-5">
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div className="banner-caption py-5">
                      <div className="caption animate__animated animate__backInLeft">
                        <h1>The Brand New Samsung S20</h1>
                        <p>
                          The Samsung Galaxy S20 isn't the most cutting-edge of
                          Samsung's S20 lineup – that honor goes to the Galaxy
                          S20 Ultra
                          <br />
                          but it's still a powerful phone with an ergonomic and
                          attractive design.
                        </p>
                        <Link to="/home">
                          <button>SHOP NOW</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
              </div>
            </div>
            <div class="carousel-item background-three ">
              <div className="container mt-5 py-5">
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div className="banner-caption py-5">
                      <div className="caption animate__animated animate__backInLeft">
                        <h1>The Brand New Samsung S20</h1>
                        <p>
                          iPhone 12 pro and iPhone 12 pro feature the sharpest
                          OLED displays and highest pixel density of any Apple
                          device with
                          <br /> HDR 10,br and Wide Color. iPhone 12 pro the
                          6.5-inch .
                        </p>

                        <Link to="/home">
                          <button>SHOP NOW </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
