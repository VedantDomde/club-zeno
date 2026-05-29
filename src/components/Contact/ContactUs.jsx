import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {

  const [toast, setToast] = useState(false);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    goal: "",
    plan: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // VALIDATION
  const validate = () => {

    let newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (formData.age < 15 || formData.age > 60) {
      newErrors.age = "Enter valid age";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.goal) {
      newErrors.goal = "Select fitness goal";
    }

    if (!formData.gender) {
      newErrors.gender = "Select gender";
    }

    if (!formData.plan) {
      newErrors.plan = "Select plan";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validate()) return;

    const number = "919699237168";

    const message = `
🔥 NEW CLUB ZENO LEAD 🔥

Name: ${formData.name}
Age: ${formData.age}
Gender: ${formData.gender}
Phone: ${formData.phone}
Fitness Goal: ${formData.goal}
Plan: ${formData.plan}
`;

    const whatsappURL = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappURL;

    setToast(true);

    setFormData({
      name: "",
      age: "",
      gender: "",
      phone: "",
      goal: "",
      plan: "",
    });

    setTimeout(() => {
      setToast(false);
    }, 3000);
  };

  return (
    <div className="contact-container" id="contact">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* HEADING */}
      <div className="contact-top">

        <p className="small-heading">
          PREMIUM FITNESS EXPERIENCE
        </p>

        <h2>
          Join <span>CLUB ZENO</span>
        </h2>

        <p className="gym-info">
          CLUB ZENO is Nagpur’s premium rooftop fitness destination
          designed for strength, transformation, fat loss, aesthetics,
          and functional training.
        </p>

      </div>

      {/* FORM */}
      <form
        className="contact-form slide-in"
        onSubmit={handleSubmit}
      >

        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <input
            type="number"
            name="age"
            placeholder="Your Age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <div>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        {/* FITNESS GOALS */}
        <div>
          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
          >
            <option value="">Select Fitness Goal</option>
            <option>Weight Loss</option>
            <option>Muscle Gain</option>
            <option>Body Transformation</option>
            <option>Fat Loss</option>
            <option>Strength Training</option>
            <option>Cardio Fitness</option>
            <option>General Fitness</option>
            <option>Six Pack Abs</option>
            <option>Powerlifting</option>
          </select>

          {errors.goal && <p className="error">{errors.goal}</p>}
        </div>

        {/* PLAN */}
        <div>
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
          >
            <option value="">Select Plan</option>
            <option>Monthly Plan</option>
            <option>Quarterly Plan</option>
            <option>Half-Yearly Plan</option>
            <option>Yearly Plan</option>
          </select>

          {errors.plan && <p className="error">{errors.plan}</p>}
        </div>

        <button type="submit">
          Join Club Zeno
        </button>

      </form>

      {/* INFO CARDS */}
      <div className="contact-cards">

        <div className="info-card">
          <h3>📍 Address</h3>
          <p>
            Corporate Plot No 10, Rooftop K10,
            Wardha Rd, Jai Prakash Nagar,
            New Sneh Nagar,
            Nagpur, Maharashtra 440015
          </p>
        </div>

        <div className="info-card">
          <h3>📞 Phone</h3>
          <p>9699237168</p>
        </div>

        <div className="info-card">
          <h3>📸 Instagram</h3>

          <a
            href="https://www.instagram.com/clubzeno/"
            target="_blank"
            rel="noreferrer"
          >
            @clubzeno
          </a>
        </div>

      </div>

      {/* MAP */}
      <div className="map-container">

        <iframe
          title="Club Zeno Map"
          src="https://www.google.com/maps?q=CLUB+ZENO+Nagpur&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

      </div>

      {toast && (
        <div className="toast">
          Submitted Successfully 🚀
        </div>
      )}

    </div>
  );
};

export default ContactUs;