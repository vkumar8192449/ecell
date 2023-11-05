import React from "react";
import "../styles/AboutUs.css";

export const AboutUs = () => {
  return (
    <>
      <div id="aboutus-head">ABOUT US</div>
      <div id="aboutus">
        <div className="desc">
          E-Cell NIT Jamshedpur is an independent student run body operating in
          the premises of NIT Jamshedpur. We have embarked on a journey to
          develop and nurture an entrepreneurial spirit in students by
          familiarising them with the skills and fundas of entrepreneurship. We
          strive to develop a keen sense of business understanding in the
          students and therefore train them to identify potential opportunities
          in the modern world.
        </div>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ userSelect: "none" }}
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active slidecover slidecover-1"
              data-bs-interval="10000"
            >
              <h4>OUR VISION</h4>
              <p>
                To create a sustainable and easily accessible environment where
                the idea from the quality brains could outreach to building
                professionals, mentors, venture capitalists and angel investors
                fostering the growth of startups in India.
              </p>
            </div>
            <div
              className="carousel-item slidecover slidecover-2"
              data-bs-interval="10000"
            >
              <h4>OUR MISSION</h4>
              <p>
                To spread awareness about India's growing startup ecosystem and
                expose students to it's nuances thereby developing an
                entrepreneurial spirit in the students. We encourage students by
                educating them about diverse fields and their roles right from
                ideation to operation.
              </p>
            </div>
            <div
              className="carousel-item slidecover slidecover-3"
              data-bs-interval="10000"
            >
              <h4>OUR ACHIEVEMENTS</h4>
              <p>
                Within a year of it's foundation the students of Nit Jamshedpur
                had an opportunity to represent their institute at state level
                and there bagged 1st & 3rd prize in technology sector during
                start-up India Jharkhand Event.
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
