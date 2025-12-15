🌐 Personal Portfolio Website

This is my full-stack personal portfolio website built using React on the frontend and Node.js + Express on the backend.
The portfolio showcases my About, Projects, Achievements, Skills, and includes a fully functional Contact form powered by Nodemailer.

🚀 Tech Stack
Frontend

React (CRA)

JavaScript (ES6+)

GSAP / React Spring

Custom CSS animations

Responsive UI

Backend

Node.js

Express.js

Nodemailer

CORS

dotenv

Deployment

Frontend: Vercel

Backend: Render

Repository: GitHub

📁 Folder Structure
PORTFOLIO/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/
│
├── frontend/
│   ├── public/
│   │   ├── Favicon.png
│   │   ├── index.html
│   │   └── manifest.json
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── about.js / about.css
│   │   │   ├── projects.js / project.css
│   │   │   ├── achivements.js / achivements.css
│   │   │   ├── skills.js / skills.css
│   │   │   ├── contact.js / contact.css
│   │   │   ├── ContactForm.js
│   │   │   ├── header.js / header.css
│   │   │   ├── LightRays.js / LightRays.css
│   │   │   ├── PhysicsCard.JSX / PhysicsCard.css
│   │   │   ├── readmore.jsx / readmore.css
│   │   │   ├── readmoree.jsx / readmoree.css
│   │   │   ├── ScrollProvider.js
│   │   │   ├── SocialIcons.jsx
│   │   │   ├── Space.js / Space.css
│   │   │   ├── StackWrapper.js / StackWrapper.css
│   │   │
│   │   ├── images/
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md

✨ Features
🔹 About Section

Includes introduction, personal summary, and background details.

🔹 Projects Showcase

A list of my key projects with descriptions, features, and links.

🔹 Achievements Section

Certifications, awards, and professional milestones.

🔹 Skills Overview

Technologies, frameworks, and tools I work with.

🔹 Animated UI

Custom CSS, GSAP, and React animations for smooth visuals
(e.g., Light Rays, Physics Cards, Scroll animations, etc.)

🔹 Contact Form

Built using React + Nodemailer

Sends email directly to my inbox

Backend API created with Express.js

Fully validated and error-handled

⚙️ Backend Setup (Development)

Open backend directory:

cd backend
npm install


Create .env file (local testing only):

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CLIENT_URL=http://localhost:3000


Start backend:

npm start

🎨 Frontend Setup (Development)

Open frontend folder:

cd frontend
npm install


Start frontend:

npm start


Runs on:
👉 http://localhost:3000

☁️ Deployment Instructions
Frontend → Vercel

Root directory: frontend

Build command: npm run build

Output directory: build

Environment variable:

REACT_APP_API_URL = <your-backend-render-url>

Backend → Render

Root directory: backend

Start command: npm start

Environment variables:

EMAIL_USER=<sender email>
EMAIL_PASS=<app password>
CLIENT_URL=<vercel-frontend-url>

📧 Contact Form API Flow

User submits form

Frontend sends request → POST /send-email

Express server handles request

Nodemailer sends formatted email

Response returned to frontend (success / failure)

🙌 Contributing

This is my personal project, but improvements and suggestions are welcome.

📜 License

This project is open-source and available under the MIT License.

⭐ Support

If you like this portfolio, consider giving the repository a star on GitHub!
