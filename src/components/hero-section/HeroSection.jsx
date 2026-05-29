import React from "react";
import Header from "../header/Header";
import hero_image from "../../assets/hero_image.png";
import NumberCounter from "number-counter";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero" id="home">

      <Header />

      <div className="hero-content">

        <div className="hero-left">

          <div className="hero-badge">
            #1 Premium Fitness Club In Nagpur
          </div>

          <h1>
            BUILD YOUR
            <span> DREAM BODY </span>
            AT CLUB ZENO
          </h1>

          <p>
            Transform your body with elite training, modern equipment,
            personal coaching and premium fitness experience.
          </p>

          <div className="hero-stats">

            <div>
              <span>
                <NumberCounter end={10} start={0} delay="2" />
              </span>
              <p>Expert Trainers</p>
            </div>

            <div>
              <span>
                <NumberCounter end={500} start={0} delay="2" />
              </span>
              <p>Active Members</p>
            </div>

            <div>
              <span>
                <NumberCounter end={15} start={0} delay="2" />
              </span>
              <p>Programs</p>
            </div>

          </div>

          <div className="hero-buttons">

            <button className="primary-btn">
              Join Today
            </button>

            <button className="secondary-btn">
              Explore More
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-circle"></div>
          <div className="hero-circle-blur"></div>

          <img
            src={hero_image}
            alt="hero"
            className="hero-image"
          />

        </div>

      </div>
    </div>
  );
};

export default HeroSection;