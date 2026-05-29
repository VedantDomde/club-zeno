import React from "react";
import {
  Dumbbell,
  Flame,
  Activity,
  HeartPulse,
} from "lucide-react";

import "./Programs.css";

const servicesData = [
  {
    icon: <Activity size={42} />,
    heading: "CrossFit Training",
    details:
      "High intensity training sessions for fat loss and athletic performance.",
  },
  {
    icon: <Dumbbell size={42} />,
    heading: "Strength Training",
    details:
      "Build lean muscle mass and explosive strength with expert trainers.",
  },
  {
    icon: <Flame size={42} />,
    heading: "Fat Loss Program",
    details:
      "Custom fat loss workout plans with nutrition guidance.",
  },
  {
    icon: <HeartPulse size={42} />,
    heading: "Cardio Sessions",
    details:
      "Advanced cardio and endurance programs for heart fitness.",
  },
];

const Programs = () => {
  return (
    <div className="Programs" id="services">
      {/* Background gradient overlay from image style */}
      <div className="programs-bg-gradient"></div>

      <div className="program-bg-blur blur-left"></div>
      <div className="program-bg-blur blur-right"></div>

      <div className="programs-title">
        <span className="mini-program-title">
          CLUB ZENO SERVICES
        </span>

        <h2>
          OUR FITNESS <span className="gradient-text">SERVICES</span>
        </h2>

        <p>
          Train smarter with modern fitness solutions at Club Zeno
        </p>
      </div>

      <div className="program-grid">
        {servicesData.map((item, index) => (
          <div className="program-card" key={index}>
            <div className="program-icon">
              {item.icon}
            </div>
            <h3>{item.heading}</h3>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;