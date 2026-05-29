import React from "react";
import {
  Dumbbell,
  Flame,
  Activity,
  HeartPulse,
  Waves,
  Move3D,
} from "lucide-react";

import "./Programs.css";

const servicesData = [
  {
    icon: <Activity size={40} />,
    heading: "AI Modes",
    details:
      "Advanced AI powered fitness experience with smart workout tracking and performance optimization.",
  },

  {
    icon: <Dumbbell size={40} />,
    heading: "Kettlebell",
    details:
      "Build strength, endurance and explosive power with functional kettlebell workouts.",
  },

  {
    icon: <Flame size={40} />,
    heading: "Crossfit HIIT",
    details:
      "High intensity interval training sessions designed for fat burn and athletic conditioning.",
  },

  {
    icon: <Move3D size={40} />,
    heading: "Resistance Training",
    details:
      "Professional resistance workouts focused on muscle growth, strength and body shaping.",
  },

  {
    icon: <HeartPulse size={40} />,
    heading: "Recovery & Sauna",
    details:
      "Relax your muscles and recover faster with recovery sessions and sauna therapy.",
  },

  {
    icon: <Waves size={40} />,
    heading: "Slider Pilates",
    details:
      "Improve flexibility, posture and core strength with modern slider pilates training.",
  },

  {
    icon: <Activity size={40} />,
    heading: "Compound Movement",
    details:
      "Master functional full body movements for better athletic performance and strength.",
  },
];

const Programs = () => {
  return (
    <div className="Programs" id="services">
      
      <div className="programs-header">
        <span className="stroke-text">Explore Our</span>
        <span className="stroke-text">Services</span>
        <span className="stroke-text">At Club Zeno</span>
      </div>

      <div className="program-categories">
        {servicesData.map((service, index) => (
          <div className="category" key={index}>
            
            {service.icon}

            <span>{service.heading}</span>

            <span>{service.details}</span>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;