// import React, { useState } from "react";
// import "./contact.css";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const response = await fetch("http://localhost:5000/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (result.success) {
//         setStatus("Message sent successfully ✅");
//         setFormData({ name: "", email: "", phone: "", message: "" });
//       } else {
//         setStatus("Failed to send ❌");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setStatus("Error sending message ❌");
//     }
//   };

//   return (
//     <form className="Contact2" onSubmit={handleSubmit}>
//       <h1 className="Contact2-1">Say Hello</h1>

//       <input
//         type="text"
//         className="Contact2-2"
//         name="name"
//         placeholder="Drop a name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />

//       <input
//         type="email"
//         className="Contact2-3"
//         name="email"
//         placeholder="Add your email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />

//       <input
//         type="tel"
//         className="Contact2-4"
//         name="phone"
//         placeholder="Wanna give your number?"
//         value={formData.phone}
//         onChange={handleChange}
//         required
//       />

//       <textarea
//         className="Contact2-5"
//         name="message"
//         rows="5"
//         cols="50"
//         placeholder="Say hello or drop a note..."
//         value={formData.message}
//         onChange={handleChange}
//         required
//       ></textarea>

//       <button className="Contact2-6" type="submit">
//         Send
//       </button>

//       {status && <p style={{ textAlign: "center", color: "white" }}>{status}</p>}
//     </form>
//   );
// };

// export default ContactForm;


import React, { useState } from "react";
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Use your deployed backend URL on Render
      const response = await fetch("https://nikhiljadhav-portfolio.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message ❌");
    }
  };

  return (
    <form className="Contact2" onSubmit={handleSubmit}>
      <h1 className="Contact2-1">Say Hello</h1>

      <input
        type="text"
        className="Contact2-2"
        name="name"
        placeholder="Drop a name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        className="Contact2-3"
        name="email"
        placeholder="Add your email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        className="Contact2-4"
        name="phone"
        placeholder="Wanna give your number?"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <textarea
        className="Contact2-5"
        name="message"
        rows="5"
        cols="50"
        placeholder="Say hello or drop a note..."
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button className="Contact2-6" type="submit">
        Send
      </button>

      {status && <p style={{ textAlign: "center", color: "white" }}>{status}</p>}
    </form>
  );
};

export default ContactForm;
