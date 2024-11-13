import React from "react";

const Skills = () => {
  return (
    <div className="elementor-container elementor-widget-wrap" style={{ backgroundColor: "#1F2733" }}>
      <div
        id="skills"
        className="skills skills-section elementor-section-stretched"
       
      >
        {/* <div className="container">
  
          <div className="row">
  
            <div className="col-lg-6 d-flex align-items-center">
              <img src="assets/img/skills.png" className="img-fluid" alt=""/>
            </div>
  
            <div className="col-lg-6 pt-4 pt-lg-0 content">
  
              <h3>Voluptatem dignissimos provident quasi corporis voluptas</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
  
              <div className="skills-content skills-animation">
  
                <div className="progress">
                  <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
  
                <div className="progress">
                  <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
  
                <div className="progress">
                  <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
  
              </div>
  
            </div>
          </div>
  
        </div> */}

        <div className="container section-title">
          <span className="sm-title text-white">Work Process</span>
          <h2 className="text-white">Our Working Process</h2>
          <p></p>
        </div>

        <div className="container elementor-column-gap-extended">
          <div>
            <div className="elementor-widget-container">
              <div className="main-process text-center">
                <div
                  className="line-shape wow fadeIn"
                  data-wow-delay="200ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "200ms",
                    animationName: "fadeIn",
                  }}
                >
                  <img
                    decoding="async"
                    src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/process-line.png"
                    alt="Process Line"
                  />
                </div>

                <div className="row mt-n6">
                  <div
                    className="process-style-01 process-style-02 col-lg-4 col-md-6 mt-6  wow fadeInUp"
                    data-wow-delay="200ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "200ms",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="item">
                      <div className="thumb">
                        <img
                          decoding="async"
                          src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/process-01.jpg"
                          alt="Process"
                        />

                        <span>01</span>
                      </div>
                      <h5 className="text-white">Design</h5>
                      <p className="w-lg-80 mx-auto mb-0 text-white">
                        Lorem ipsum dolor sit amet, consectetur notted
                        adipisicing.
                      </p>{" "}
                    </div>
                  </div>

                  <div
                    className="process-style-01 col-lg-4 col-md-6 mt-6  wow fadeInUp"
                    data-wow-delay="300ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "200ms",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="item">
                      <div className="thumb">
                        <img
                          decoding="async"
                          src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/process-02.jpg"
                          alt="Process"
                        />

                        <span>02</span>
                      </div>
                      <h5 className="text-white">Strategy</h5>
                      <p className="w-lg-80 mx-auto mb-0 text-white">
                        Lorem ipsum dolor sit amet, consectetur notted
                        adipisicing.
                      </p>{" "}
                    </div>
                  </div>

                  <div
                    className="process-style-01 col-lg-4 col-md-6 mt-6  wow fadeInUp"
                    data-wow-delay="400ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "200ms",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="item">
                      <div className="thumb">
                        <img
                          decoding="async"
                          src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/process-03.jpg"
                          alt="Process"
                        />

                        <span>03</span>
                      </div>
                      <h5 className="text-white">Develop</h5>
                      <p className="w-lg-80 mx-auto mb-0 text-white">
                        Lorem ipsum dolor sit amet, consectetur notted
                        adipisicing.
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="elementor-element elementor-element-144d534 elementor-widget__width-auto position-absolute elementor-widget elementor-widget-image"
      >
        <div className="image-elementor-bg elementor-widget-container">
          <img
            decoding="async"
            src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/about3.png"
            title="about3"
            alt="about3"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
