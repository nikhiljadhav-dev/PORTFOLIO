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


// frontend/src/components/ContactForm.js
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
//       // Use env var (set on Vercel). Falls back to localhost for local dev.
//       const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";
//       const response = await fetch(`${API_BASE}/send-email`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       // If server returned non-JSON or non-2xx
//       if (!response.ok) {
//         const errorBody = await response.text().catch(() => null);
//         console.error("Server returned non-OK:", response.status, errorBody);
//         setStatus("Failed to send ❌");
//         return;
//       }

//       const result = await response.json();
//       if (result && result.success) {
//         setStatus("Message sent successfully ✅");
//         setFormData({ name: "", email: "", phone: "", message: "" });
//       } else {
//         console.error("Send failed:", result);
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



// frontend/src/components/ContactForm.js
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

  const getApiBase = () => {
    // 1) Prefer build-time env (set in Vercel)
    if (process.env.REACT_APP_API_URL) return process.env.REACT_APP_API_URL;
    // 2) If running on localhost (dev), use local backend
    if (typeof window !== "undefined" && window.location.hostname === "localhost") {
      return "http://localhost:5000";
    }
    // 3) Production fallback: your Render URL (use exact URL)
    return "https://nikhiljadhav-portfolio.onrender.com";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const API_BASE = getApiBase();
      console.log("ContactForm using API base:", API_BASE); // helpful for debugging
      const response = await fetch(`${API_BASE}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorBody = await response.text().catch(() => null);
        console.error("Server returned non-OK:", response.status, errorBody);
        setStatus("Failed to send ❌");
        return;
      }

      const result = await response.json().catch(() => null);
      if (result && result.success) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("Send failed:", result);
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
      />

      <button className="Contact2-6" type="submit">
        Send
      </button>

      {status && <p style={{ textAlign: "center", color: "white" }}>{status}</p>}
    </form>
  );
};

export default ContactForm;
