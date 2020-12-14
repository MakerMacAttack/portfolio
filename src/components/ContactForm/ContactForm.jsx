import React, { useState } from "react";
import submitContact from "../../services/ContactForm";
import "./ContactForm.css";

export default function ContactForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      alert(
        "Looks like you forgot to fill in a required field before clicking Submit."
      );
    } else {
      submitContact(formData);
      setFormData({
        company: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      alert("Thank you! Mac will get back to you within one business day.");
    }
  }

  return (
    <form onSubmit={handleSubmit} id="contact-form">
      <label id="contact-name">
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label id="contact-company">
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
      </label>
      <label id="contact-email">
        <input
          type="text"
          name="email"
          placeholder="E-mail*"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label id="contact-phone">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <label id="contact-message">
        <textarea
          // rows="4"
          // cols="59"
          name="message"
          placeholder="Your Message*"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <input type="submit" id="contact-submit" />
    </form>
  );
}
