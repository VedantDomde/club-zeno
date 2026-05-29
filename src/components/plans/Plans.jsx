import React from 'react';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import { motion } from 'framer-motion';
import './Plans.css';

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      {/* Background gradient overlay from image style */}
      <div className="plans-bg-gradient"></div>
      
      {/* BLUR EFFECTS */}
      <div className="plans-blur-1"></div>
      <div className="plans-blur-2"></div>

      {/* HEADER with color style from image */}
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span className="highlight-text">YOUR FITNESS</span>
        <span className="stroke-text">JOURNEY</span>
      </div>

      {/* PLANS */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <motion.div
            key={i}
            className={`plan ${i === 1 ? "popular-plan" : ""}`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.2,
            }}
            viewport={{ once: true }}
          >
            {/* BADGE */}
            {i === 1 && <div className="popular-badge">MOST POPULAR</div>}

            {/* ICON */}
            <div className="plan-icon">{plan.icon}</div>

            {/* PLAN NAME */}
            <span className="plan-name">{plan.name}</span>

            {/* FEATURES */}
            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <button
              className="join-plan-btn"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Join Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Plans;