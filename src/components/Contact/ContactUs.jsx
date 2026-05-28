import React, { useEffect, useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {

  const [toast, setToast] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    goal: "",
    plan: "",
  });

  useEffect(() => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // GOOGLE FORM URL
      const formURL =
        "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

      const formBody = new FormData();

      // GOOGLE FORM FIELD IDS
      formBody.append("entry.111111111", formData.name);
      formBody.append("entry.222222222", formData.age);
      formBody.append("entry.333333333", formData.gender);
      formBody.append("entry.444444444", formData.phone);
      formBody.append("entry.555555555", formData.goal);
      formBody.append("entry.666666666", formData.plan);

      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      // SUCCESS POPUP
      setToast(true);

      // RESET FORM
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

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-container" id="contact">

      {/* ORANGE BLOBS */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <h2>
        Contact <span>Us</span>
      </h2>

      <form
        className="contact-form slide-in"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Your Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="goal"
          placeholder="Fitness Goal"
          value={formData.goal}
          onChange={handleChange}
          required
        />

        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          required
        >
          <option value="">Select Plan</option>
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Yearly</option>
        </select>

        <button type="submit">
          Submit
        </button>

      </form>

      {/* SUCCESS TOAST */}
      {toast && (
        <div className="toast">
          Submitted Successfully ✅
        </div>
      )}

    </div>
  );
};

export default ContactUs;