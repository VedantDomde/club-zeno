import React, { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

import './Testimonials.css';

const Testimonials = () => {

    const transition = { type: "spring", duration: 0.8 };

    const [selected, setSelected] = useState(0);

    const tLength = testimonialsData.length;

    return (
        <div className="testimonials" id="testimonials">

            <div className="testimonial-top">

                <span className="small-heading">
                    MEMBER TRANSFORMATIONS
                </span>

                <h1>
                    What Our <span>Members Say</span>
                </h1>

                <p>
                    Real people. Real transformations.
                </p>

            </div>

            <div className="testimonial-card">

                <div className="left-t">

                    <motion.span
                        key={selected}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={transition}
                        className="review"
                    >
                        “{testimonialsData[selected].review}”
                    </motion.span>

                    <div className="member-info">

                        <h3>
                            {testimonialsData[selected].name}
                        </h3>

                        <span>
                            {testimonialsData[selected].status}
                        </span>

                    </div>

                    <div className="arrows">

                        <button
                            onClick={() => {
                                selected === 0
                                    ? setSelected(tLength - 1)
                                    : setSelected((prev) => prev - 1);
                            }}
                        >
                            <img src={leftArrow} alt="" />
                        </button>

                        <button
                            onClick={() => {
                                selected === tLength - 1
                                    ? setSelected(0)
                                    : setSelected((prev) => prev + 1);
                            }}
                        >
                            <img src={rightArrow} alt="" />
                        </button>

                    </div>

                </div>

                <div className="right-t">

                    <div className="image-bg"></div>

                    <motion.img
                        key={selected}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={transition}
                        src={testimonialsData[selected].image}
                        alt=""
                    />

                </div>

            </div>

        </div>
    );
};

export default Testimonials;