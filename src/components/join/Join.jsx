import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Join.css';

const Join = () => {

    const form = useRef();

    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm(
            'service_h9g0btg',
            'template_5urckpa',
            form.current,
            'GJAtl73WZaFyf9KlA'
        )
        .then(() => {

            setSuccess(true);

            form.current.reset();

            setTimeout(() => {
                setSuccess(false);
            }, 3000);

        })
        .catch((error) => {
            console.log(error.text);
        });
    };

    return (

        <div className="Join" id="join-us">

            {/* LEFT SIDE */}
            <div className="left-j">

                <span className="small-text">
                    JOIN CLUB ZENO
                </span>

                <h1>
                    READY TO
                    <span> TRANSFORM </span>
                    YOUR BODY?
                </h1>

                <p>
                    Start your fitness journey with Nagpur’s
                    premium gym experience. Build strength,
                    confidence, and discipline with CLUB ZENO.
                </p>

            </div>

            {/* RIGHT SIDE */}
            <div className="right-j">

                <form
                    ref={form}
                    className="email-container"
                    onSubmit={sendEmail}
                >

                    <h2>
                        Get Started Today
                    </h2>

                    <input
                        type="email"
                        name="user_email"
                        placeholder="Enter your email address"
                        required
                    />

                    <button className="btn-j">
                        Join Now
                    </button>

                    {success && (
                        <div className="success-msg">
                            Successfully Submitted 🔥
                        </div>
                    )}

                </form>

            </div>

        </div>
    );
};

export default Join;