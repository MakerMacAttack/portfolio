import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";

export default function Contact(props) {
  return (
    <div>
      <h1>Don't be a stranger</h1>
      <h3>Phone: 202.306.1913</h3>
      <h3>
        Email: tmcpbmay {"[at]"} gmail {"[point]"} com
      </h3>
      <ContactForm />
    </div>
  );
}
