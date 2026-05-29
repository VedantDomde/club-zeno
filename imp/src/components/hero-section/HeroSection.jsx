import React from 'react'
import Header from '../header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter'
import './HeroSection.css'

import { motion } from 'framer-motion'

const HeroSection = () => {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className="hero" id="home">

            <div className="blur hero-blur"></div>

            {/* LEFT SIDE */}
            <div className="left-h">

                <Header />

                {/* BEST CLUB TAG */}
                <div className="the-best-ad">

                    <motion.div
                        initial={{ left: mobile ? "165px" : "238px" }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: "tween" }}
                    >
                    </motion.div>

                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>

                </div>

                {/* HERO TEXT */}
                <div className="hero-text">

                    <div>
                        <span className="stroke-text">SHAPE </span>
                        <span>YOUR</span>
                    </div>

                    <div>
                        <span>IDEAL BODY</span>
                    </div>

                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body
                            and live up your life to fullest
                        </span>
                    </div>

                </div>

                {/* FIGURES */}
                <div className="figures">

                    {/* COACHES */}
                    <div>
                        <span>
                            <NumberCounter
                                end={3}
                                start={0}
                                delay="2"
                            />
                        </span>

                        <span>expert coaches</span>
                    </div>

                    {/* MEMBERS */}
                    <div>
                        <span>
                            <NumberCounter
                                end={10}
                                start={0}
                                delay="2"
                            />
                        </span>

                        <span>members</span>
                    </div>

                    {/* FITNESS PROGRAMS */}
                    <div>
                        <span>
                            <NumberCounter
                                end={2}
                                start={0}
                                delay="2"
                            />
                        </span>

                        <span>fitness programs</span>
                    </div>

                </div>

                {/* BUTTONS */}
                <div className="hero-buttons">

                    <button className="btn">
                        Get Started
                    </button>

                    <button className="btn">
                        Learn More
                    </button>

                </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="right-h">

            
                {/* HEART RATE */}
                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate"
                >

                    <img src={Heart} alt="" />

                    <span>Heart Rate</span>

                    <span>116 bpm</span>

                </motion.div>

                {/* HERO IMAGE */}
                <img
                    src={hero_image}
                    alt=""
                    className="hero-image"
                />

                {/* BACK IMAGE */}
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    src={hero_image_back}
                    alt=""
                    className="hero-image-back"
                />

                {/* CALORIES */}
                <motion.div
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories"
                >

                    <img src={Calories} alt="" />

                    <div>

                        <span>Calories Burned</span>

                        <span>220 kcal</span>

                    </div>

                </motion.div>

            </div>

        </div>
    )
}

export default HeroSection