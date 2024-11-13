import React from "react";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <>
      <section id="hero" className="hero section dark-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 text-start order-2 order-lg-1 d-flex flex-column justify-content-center">
              
              <h1>Software Development and Video Editing Solutions
                </h1>
              <p>
              Better Solutions For Your Business
              </p>
              <div className="d-flex">
                <a href="#about" className="btn-get-started">
                  Recent Projects
                </a>
                <a
                  href="#"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Get Free Estimation</span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos-delay="200"
            >
              <img
                src="assets/img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="clients section light-background">
        <div className="container">
          <Swiper
             modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={6}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
             }}
            loop
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                src="assets/img/clients/client-1.png"
                className="img-fluid"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="assets/img/clients/client-2.png"
                className="img-fluid"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="assets/img/clients/client-3.png"
                className="img-fluid"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="assets/img/clients/client-4.png"
                className="img-fluid"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="assets/img/clients/client-5.png"
                className="img-fluid"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="assets/img/clients/client-6.png"
                className="img-fluid"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="assets/img/clients/client-7.png"
                className="img-fluid"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Banner;
