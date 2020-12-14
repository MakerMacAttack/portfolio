import React, { useState } from "react";
import submitContact from "../../services/ContactForm";
import "./ContactForm.css";

export default function ContactForm(props) {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    body: "",
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
    if (formData.name === "" || formData.email === "" || formData.body === "") {
      alert(
        "Looks like you forgot to fill in a required field before clicking Submit."
      );
    } else {
      submitContact(formData);
      setFormData({
        company: "",
        name: "",
        email: "",
        body: "",
      });
      alert("Thank you! Mac will get back to you within one business day.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="identifiers">
        <label>
          {/* Name: */}
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          {/* Company: */}
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
        </label>
        <label>
          {/* E-mail: */}
          <input
            type="text"
            name="email"
            placeholder="E-mail*"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <label>
        {/* Message: */}
        <textarea
          rows="4"
          cols="59"
          name="body"
          placeholder="Your Message*"
          value={formData.body}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
