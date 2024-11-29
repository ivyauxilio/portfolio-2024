import React from "react";
import { FaCheck, FaCheckCircle, FaAngleRight } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section id="about" className="about section">
        {/* <div className="container section-title">
          <h2>About Us</h2>
        </div> */}
        <div className="container">
          <div className="row gy-4">
            {/* <div className="col-lg-6 content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-circle"></i>{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>{" "}
                  <span>Ullamco laboris nisi ut aliquip ex ea commodo</span>
                </li>
              </ul>
            </div> */}
            <div className="col-lg-6 elementor-container elementor-column-gap-extended">
              <div className="">
                <div className="position-relative">
                  <div className="row mb-4 mt-n1-9">
                    <div className="col-6 mt-1-9">
                      <div className="about-img">
                        <img
                          decoding="async"
                          src="https://flywebwp.websitelayout.net/wp-content/uploads/2024/02/about17.jpg"
                          alt="About Image 01"
                        />
                      </div>
                    </div>
                    <div className="col-6 mt-1-9">
                      <div className="about-img">
                        <img
                          decoding="async"
                          src="https://flywebwp.websitelayout.net/wp-content/uploads/2024/02/about18.jpg"
                          alt="About Image 02"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-n1-9">
                    <div className="col-6 mt-1-9">
                      <div className="about-img">
                        <img
                          decoding="async"
                          src="https://flywebwp.websitelayout.net/wp-content/uploads/2024/02/about19.jpg"
                          alt="About Image 03"
                        />
                      </div>
                    </div>
                    <div className="col-6 mt-1-9">
                      <div className="about-img">
                        <img
                          decoding="async"
                          src="https://flywebwp.websitelayout.net/wp-content/uploads/2024/02/about20.jpg"
                          alt="About Image 04"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="about-boxs">
                    <h4 className="text-primary display-3 font-weight-800 mb-0">
                      <span
                        className="odometer odometer-auto-theme"
                        data-count="25"
                      >
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">2</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">5</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </span>
                      +
                    </h4>
                    <p className="mb-0 font-weight-800">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-start">
              <div className="elementor-element elementor-element-af8b8eb mb-0 elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <div className="section-title-02 mb-1-9">
                    <span className="sm-title">Who We Are</span>
                    <h2 className="mb-0 h1">
                      Are you prepared to develop your businesses!
                    </h2>
                  </div>{" "}
                </div>
              </div>
              <p>
                We’re a passionate startup team with a combined experience in
                video creation and editing, and expertise in software
                development. Hailing from the Philippines, we’re committed to
                delivering innovative video solutions that captivate audiences
                and drive results. Our team is dedicated to providing top-notch
                services, from concept to completion. We leverage our technical
                skills and creative vision to produce stunning visuals that
                resonate with your target audience.
              </p>

              <div
                className="elementor-element elementor-element-4c91dbc elementor-align-left elementor-widget elementor-widget-wl-features-box-v7"
                data-id="4c91dbc"
                data-element_type="widget"
                data-widget_type="wl-features-box-v7.default"
              >
                <div className="elementor-widget-container">
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0 me-1-6">
                      <div className="about-icon-02">
                        {/* <i className="ti-check"></i>{" "} */}
                        <FaCheck />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h4>Creative Ideas</h4>

                      <p className="mb-0">
                        We utilize vital showcasing strategies that have been
                        demonstrated programming
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0 me-1-6">
                      <div className="about-icon-02">
                       <FaCheck />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h4>Quality Web Designing</h4>

                      <p className="mb-0">
                        We utilize vital showcasing strategies that have been
                        demonstrated programming
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0 me-1-6">
                      <div className="about-icon-02">
                      <FaCheck />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h4>Marketing Solution</h4>

                      <p className="mb-0">
                        We utilize vital showcasing strategies that have been
                        demonstrated programming
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
