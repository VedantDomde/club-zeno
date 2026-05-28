import React, { useEffect, useState } from "react";
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

    if (formData.goal.trim().length < 3) {
      newErrors.goal = "Enter valid goal";
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

    // YOUR WHATSAPP NUMBER
    const number = "919699237168";

    // MESSAGE
    const message = `
NEW GYM LEAD

Name: ${formData.name}
Age: ${formData.age}
Gender: ${formData.gender}
Phone: ${formData.phone}
Goal: ${formData.goal}
Plan: ${formData.plan}
`;

    // ENCODE MESSAGE
    const whatsappURL = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    // OPEN WHATSAPP
    window.open(whatsappURL, "_blank");

    // TOAST
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
  };

  return (
    <div className="contact-container" id="contact">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <h2>
        Contact <span>Us</span>
      </h2>

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

        <div>
          <input
            type="text"
            name="goal"
            placeholder="Fitness Goal"
            value={formData.goal}
            onChange={handleChange}
          />
          {errors.goal && <p className="error">{errors.goal}</p>}
        </div>

        <div>
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
          >
            <option value="">Select Plan</option>
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Yearly</option>
          </select>
          {errors.plan && <p className="error">{errors.plan}</p>}
        </div>

        <button type="submit">
          Submit
        </button>

      </form>

      {toast && (
        <div className="toast">
          Submitted Successfully
        </div>
      )}

    </div>
  );
};

export default ContactUs;