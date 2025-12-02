// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Route
// app.post("/send-email", async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "process.env.EMAIL_USER",   // replace with your email
//       pass: "process.env.EMAIL_PASS",     // use Gmail App Password, not real password
//     },
//   });

//   try {
//     // Send to yourself
//     await transporter.sendMail({
//       from: email,
//       to: "process.env.EMAIL_USER",
//       subject: "New Contact Form Submission",
//       text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
//     });

//     // Send confirmation to user
//     await transporter.sendMail({
//       from: "process.env.EMAIL_USER",
//       to: email,
//       subject: "Thanks for reaching out!",
//       text: "Thanks for contacting us. We'll get back to you soon!",
//     });

//     res.json({ success: true });
//   } catch (err) {
//     console.error("Email error:", err);
//     res.json({ success: false });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



// ----------------------------------------------


// // server.js
// import express from "express";
// import cors from "cors";
// // import dotenv from "dotenv";
// import nodemailer from "nodemailer";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors({
//   origin: "http://localhost:3000" // or '*' during dev, but lock it down when deploying
// }));
// app.use(express.json());

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS // for Gmail: use an App Password if account has 2FA
//   }
// });

// // verify transporter at startup (helpful debug)
// transporter.verify((err, success) => {
//   if (err) {
//     console.error("Nodemailer verify error:", err);
//   } else {
//     console.log("Nodemailer transporter ready");
//   }
// });

// app.post("/send-email", async (req, res) => {
//   const { name, email, phone, message } = req.body;
//   if (!name || !email || !message) {
//     return res.status(400).json({ success: false, error: "Missing required fields" });
//   }

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_USER, // or wherever you want messages sent
//     subject: `New message from ${name} (${email})`,
//     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.response);
//     res.json({ success: true });
//   } catch (err) {
//     console.error("Email error:", err);
//     // send helpful error back to front-end (but avoid leaking secrets)
//     res.status(500).json({ success: false, error: err.message || "Internal error" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


// -------------------------------

// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Use CLIENT_URL env var in production; fallback to localhost during local dev
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";

app.use(cors({
  origin: CLIENT_URL
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use an App Password if using Gmail + 2FA
  }
});

// verify transporter at startup (helpful debug)
transporter.verify((err, success) => {
  if (err) {
    console.error("Nodemailer verify error:", err);
  } else {
    console.log("Nodemailer transporter ready");
  }
});

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // where contact form messages are sent
    subject: `New message from ${name} (${email})`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response || info);
    res.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
