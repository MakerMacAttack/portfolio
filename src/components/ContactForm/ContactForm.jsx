import React /*, { useState }*/ from "react";
import "./ContactForm.css";

export default function ContactForm(props) {
  // const [formData, setFormData] = useState({
  //   company: "",
  //   name: "",
  //   email: "",
  //   body: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (formData.name === "" || formData.email === "" || formData.body === "") {
  //     alert(
  //       "Looks like you forgot to fill in a required field before clicking Submit."
  //     );
  //   } else {
  //   }
  // }

  return (
    <iframe
      title="contact"
      id="google-contact"
      src="https://docs.google.com/forms/d/e/1FAIpQLSdcsKMEuEAHtQeK4Ei3_PYPGrXbg_AeojY4oyf_1mJuuzOqTQ/viewform?embedded=true"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  );
}
// {
//   <form action="https://formspree.io/f/mzbkjvde" method="POST">
//         <label>
//           Your Name:
//           <input type="text" name="name" />
//         </label>
//         <label>
//           Contact E-mail:
//           <input type="email" name="_replyto" />
//         </label>
//         <label>
//           Your Message:
//           <textarea rows="4" cols="50" name="body" />
//         </label>
//         <input type="submit" value="Send" />
//       </form>
// }
// {
//   <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             placeholder="Name*"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Company:
//           <input
//             type="text"
//             name="company"
//             placeholder="Company"
//             value={formData.company}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           E-mail:
//           <input
//             type="text"
//             name="email"
//             placeholder="E-mail*"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Message:
//           <textarea
//             rows="4"
//             cols="50"
//             name="body"
//             placeholder="Your Message*"
//             value={formData.body}
//             onChange={handleChange}
//           />
//         </label>
//         <input type="submit" />
//       </form>
// }
