import React from "react";
import "./Footer.css";

import Logo2 from "../../assets/logo2.png";
import Instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer-container">

      {/* TOP GRADIENT LINE */}
      <div className="footer-line"></div>

      <div className="footer-content">

        {/* LEFT */}
        <div className="footer-left">

          <img
            src={Logo2}
            alt="Club Zeno"
            className="footer-logo"
          />

          <p>
            Club Zeno is a premium fitness destination in Nagpur
            focused on strength, transformation, performance and
            modern lifestyle fitness.
          </p>

          <div className="footer-socials">

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/clubzeno/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt="Instagram"
              />
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919699237168"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
              />
            </a>

          </div>

        </div>

        {/* CENTER */}
        <div className="footer-center">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#plans">Plans</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>

        </div>

        {/* RIGHT */}
        <div className="footer-right">

          <h3>Contact Info</h3>

          <p>
            📞 +91 9699237168
          </p>

          <p>
            📍 CLUB ZENO, Rooftop K10,
            Wardha Road, Nagpur
          </p>

          <p>
            ✉️ clubzenofitness@gmail.com
          </p>

          <a
            href="https://wa.me/919699237168?text=Hi%20Club%20Zeno"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-btn"
          >
            Join On WhatsApp
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2026 Club Zeno Fitness. All Rights Reserved.
      </div>

      {/* BLUR EFFECTS */}
      <div className="footer-blur-1"></div>
      <div className="footer-blur-2"></div>

    </div>
  );
};

export default Footer;