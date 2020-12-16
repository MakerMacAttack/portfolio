import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";

export default function Contact(props) {
  return (
    <div>
      <h1 class-name="screen-title">Don't be a stranger</h1>
      <h3 className="sub-title">Call or text</h3>
      <p className="body-text">Phone: 202.306.1913</p>
      <h3 className="sub-title">The lost art of letter writing</h3>
      <p className="body-text">Email: tmcpbmay [at] gmail [point] com</p>
      <h3 className="sub-title">Use this convenient form</h3>
      <p>(fields with a * are required)</p>
      <ContactForm />
    </div>
  );
}
