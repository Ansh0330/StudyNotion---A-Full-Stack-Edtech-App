# StudyNotion 🚀

![License: MIT](https://img.shields.io/badge/License-MIT-green) ![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue)

A full‑stack EdTech platform built with the MERN stack—allowing instructors to create, manage, and monetize courses while students can browse, purchase, and engage with interactive content.

---

## 🔗 Live Demo

[Live Demo ](https://studynotion-frontend-beta-jet.vercel.app/ "Go to homepage")

---

## 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Usage](#-usage)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- Full course lifecycle: **Create**, **Read**, **Update**, **Delete**
- Payment flow via **Razorpay**
- Cloud-based media storage using **Cloudinary**
- Profile, wishlist, cart, and course management
- Instructor dashboards with analytics (progress charts, earnings)
- Authentication with JWT and OTP

---

## 🛠️ Tech Stack

| Frontend     | Backend              | Database & Storage   |
| ------------ | -------------------- | -------------------- |
| React.js     | Node.js + Express.js | MongoDB (Atlas)      |
| Tailwind CSS | REST API endpoints   | Cloudinary (uploads) |
| Chart.js     | Razorpay integration | JWT / bcrypt auth    |

---

## 🖼️ Screenshots

### Landing Page

![1750963919394](image/readme/1750963919394.png)

---

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ansh0330/StudyNotion---A-Full-Stack-Edtech-App.git
   cd StudyNotion---A-Full-Stack-Edtech-App
   ```
2. **Install dependencies**

   - For frontend:

     ```bash
     npm install
     ```
   - For backend:

     ```bash
     cd server
     npm install
     ```
3. **Set up environment variables**

   Create a `.env` file in the `server` directory and add the following:

   ```env
   PORT=5000
   MONGODB_URI=your_mongo_atlas_uri
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY_ID=your_key_id
   RAZORPAY_KEY_SECRET=your_key_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
4. **Run the application**

   - To run both frontend and backend concurrently (if configured):

     ```bash
     npm run dev
     ```
   - Alternatively, run frontend and backend separately in two terminals:

     ```bash
     # Terminal 1 - Frontend
     npm start

     # Terminal 2 - Backend
     cd server
     npm run server
     ```
   - Frontend will be available at: `http://localhost:5173`
   - Backend API will run at: `http://localhost:4000/api`

---

## 🚀 Usage

1. **Sign Up / Login** as a Student or Instructor.
2. Instructors can **create categories** and **add/edit courses**.
3. Students can **browse**, **purchase via Razorpay**, and **enroll** in courses.
4. View **progress**, **wishlist**, **cart**, and **profile**.
5. Instructors can view **analytics**, respond to feedback, and manage earnings.

---

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/NewCoolFeature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/NewCoolFeature`).
5. Open a pull request and describe your updates.

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

---

## 📝 Contact

Created by **Ansh** – feel free to [open an issue](https://github.com/Ansh0330/StudyNotion---A-Full-Stack-Edtech-App/issues) or reach out via GitHub Discussions.

Enjoy exploring and contributing to StudyNotion! 😊 [![rzp-logo.png](https://i.postimg.cc/4ywPP5TD/rzp-logo.png)](https://postimg.cc/Pvp1r1Jy)
