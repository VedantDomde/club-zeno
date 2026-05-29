import React from 'react';
import './Reasons.css';

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

import tick from "../../assets/tick.png";

import { motion } from 'framer-motion';

const Reasons = () => {

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="Reasons" id="reasons">

      {/* BLUR EFFECTS - Updated colors to match image */}
      <div className="reasons-blur-1"></div>
      <div className="reasons-blur-2"></div>

      {/* LEFT IMAGES */}
      <motion.div
        className="left-r"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.img
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          src={image1}
          alt=""
        />
        <motion.img
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          src={image2}
          alt=""
        />
        <motion.img
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          src={image3}
          alt=""
        />
        <motion.img
          variants={fadeUp}
          transition={{ duration: 0.9 }}
          src={image4}
          alt=""
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="right-r"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="mini-title">
          WHY CLUB ZENO
        </span>

        <div className="main-title">
          <span className="stroke-text">
            WHY
          </span>
          <span className="gradient-text">
            CHOOSE US?
          </span>
        </div>

        <p className="reason-description">
          Club Zeno provides premium fitness experience with
          professional coaches, modern equipment, personalized
          workouts and energetic environment to transform your body
          and lifestyle.
        </p>

        {/* DETAILS */}
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>2+ Expert Fitness Coaches</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>High Quality Modern Equipment</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Free Beginner Training Program</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Personalized Workout Guidance</span>
          </div>
        </div>

        {/* PARTNERS */}
        <div className="partners-section">
          <span>OUR PARTNERS</span>
          <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Reasons;