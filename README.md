<div align="center">

# 🚀 AIResumePro

### AI-Powered Resume Screening & Job Matching Platform

**Bridging the gap between talented candidates and the right opportunities — powered by AI-driven ATS scoring.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-scorevantage.vercel.app-2ea44f?style=for-the-badge)](https://scorevantage.vercel.app)
[![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=react&logoColor=black)](#-tech-stack)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#-license)

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=flat-square&logo=passport&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-22B573?style=flat-square&logo=gmail&logoColor=white)

</div>

---

## 📌 Overview

**AIResumePro** is a full-stack recruitment intelligence platform that connects **students/job-seekers** with **employers/HRs** through an intelligent, ATS (Applicant Tracking System) driven pipeline. Candidates upload their resumes to receive an **AI-generated ATS score**, get discovered by recruiters based on profile-job match percentage, and apply directly to relevant openings — while HRs get a ranked, data-driven candidate pool instead of sifting through hundreds of unsorted resumes manually.

> 💡 **Why it matters:** Recruiters spend an average of just 6–7 seconds scanning a resume. AIResumePro removes the guesswork by quantifying resume quality and job-fit, so the *right* people get seen first.

---

## 🎯 Problem Statement

| Challenge | AIResumePro's Solution |
|---|---|
| 📄 Recruiters manually screening hundreds of resumes | ⚡ Automated ATS scoring ranks candidates instantly |
| 🧑‍🎓 Students unaware of how "ATS-friendly" their resume is | 📊 Real-time resume score with actionable feedback |
| 🕵️ No visibility into who's viewing your profile | 👁️ Track HR views & likes on your dashboard |
| 🎯 Low relevance in job applications | 🔗 Smart job matching based on profile-role compatibility (75%+ match) |
| 🏢 HRs lack a centralized way to track job performance | 📈 Dashboard analytics for applications, views & candidate pipeline |

---

## ✨ Key Features

### 👨‍🎓 For Students / Job Seekers
- 🔐 Secure Sign Up / Login via **JWT** + **OAuth**
- 🧾 Personalized onboarding — profile photo, target role, LinkedIn, GitHub & bio
- 📤 Resume upload with instant **AI-driven ATS Score** calculation
- 📊 Dashboard showing resume score history, uploaded resumes & profile analytics
- 🔍 **Job Match** section — auto-recommended jobs filtered by **75%+ compatibility**
- 📩 Get noticed — high-ATS resumes surface to recruiters automatically
- ❤️ Track **HR views & likes** to gauge profile reach and popularity
- 🗂️ One-click **Apply** to jobs + track previously viewed listings
- 🔔 Get emailed directly by HRs interested in your profile

### 🏢 For Employers / HR
- 🔐 Secure recruiter onboarding with dual profile photos (**personal + organization**)
- 🏬 Add organization details — name, contact email, phone (optional), LinkedIn
- 📢 Post job openings across multiple domains/roles
- 🏆 View candidates **auto-ranked by ATS score** — best-fit talent on top
- 👀 View & shortlist candidate resumes, **like** promising profiles
- 🔗 Attach external application forms (e.g., Google Forms) to any listing
- 📊 Recruiter dashboard — track views, applications & active job postings
- 🧑‍💼 Centralized **Candidate Explorer** to browse and filter applicants

---

## 🧠 How It Works

```
                     ┌────────────────────────┐
                     │   Sign Up / Login       │
                     │  (JWT + OAuth + Passport)│
                     └───────────┬─────────────┘
                                 │
                     ┌───────────▼─────────────┐
                     │   Select Role: Student   │
                     │        or Employee/HR    │
                     └───────────┬─────────────┘
             ┌───────────────────┴───────────────────┐
             ▼                                        ▼
   ┌───────────────────┐                   ┌────────────────────────┐
   │   STUDENT FLOW     │                   │    EMPLOYEE/HR FLOW    │
   ├────────────────────┤                   ├─────────────────────────┤
   │ Fill Profile        │                   │ Fill Org & Profile Info │
   │ (photo, role, links)│                   │ (2 photos, org details) │
   ├────────────────────┤                   ├─────────────────────────┤
   │ Upload Resume (PDF) │                   │ Post Job Listings       │
   ├────────────────────┤                   ├─────────────────────────┤
   │ PDF Parser + AI     │──── ATS Score ───▶│ View Ranked Candidates  │
   │ ATS Scoring Engine  │                   │ by ATS Score            │
   ├────────────────────┤                   ├─────────────────────────┤
   │ Browse Job Matches  │◀── 75%+ Match ────│ Like / Shortlist        │
   │ (auto-filtered)     │                   │ Candidate Resumes       │
   ├────────────────────┤                   ├─────────────────────────┤
   │ Apply + Track Views │                   │ Track Applications &    │
   │ / Likes on Profile  │                   │ Job Performance         │
   └────────────────────┘                   └─────────────────────────┘
```

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| **Frontend** | React.js |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Authentication** | Passport.js + Mongoose, JWT, OAuth 2.0 |
| **File Storage** | Cloudinary (Images & PDF Resumes) |
| **Resume Parsing** | PDF Parser Engine (ATS Score Generation) |
| **Emailing** | Nodemailer (Password Reset, Notifications) |
| **Deployment** | Vercel |

</div>

---

## 🔐 Authentication & Security

- ✅ **Passport.js + Mongoose** local strategy for email/password auth
- ✅ **JWT (JSON Web Tokens)** for stateless, secure session management
- ✅ **OAuth 2.0** integration for social login + JWT issuance
- ✅ **Forgot / Reset Password** flow via **Nodemailer** — secure email-based password recovery
- ✅ Role-based access control (Student vs Employee/HR) enforced at both route & UI level

---

## 📸 Core Modules

<table>
<tr>
<td width="50%">

### 🧑‍🎓 Student Dashboard
- Profile summary & bio
- ATS score tracker
- Resume upload history
- Job match recommendations
- HR views & likes analytics
- Applied / viewed job history

</td>
<td width="50%">

### 🏢 HR Dashboard
- Organization profile
- Active job postings
- Candidate ranking by ATS score
- View/like candidate resumes
- Application & view analytics
- External application link integration

</td>
</tr>
</table>

---

## ⚙️ Getting Started

### Prerequisites
```bash
Node.js >= 16.x
MongoDB (local or Atlas)
Cloudinary account
SMTP credentials (for Nodemailer)
```

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/airesumepro.git
cd airesumepro

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
OAUTH_CLIENT_ID=your_oauth_client_id
OAUTH_CLIENT_SECRET=your_oauth_client_secret
SMTP_EMAIL=your_email
SMTP_PASSWORD=your_email_app_password
```

### Run Locally

```bash
# Start backend
cd server
npm run dev

# Start frontend
cd client
npm start
```

The app will be running at `http://localhost:3000` 🎉

---

## 🌐 Live Deployment

<div align="center">

### 🔗 [https://scorevantage.vercel.app](https://scorevantage.vercel.app)

</div>

---

## 🗺️ Roadmap

- [ ] AI-based resume improvement suggestions
- [ ] In-app chat between HR and candidates
- [ ] Advanced analytics dashboard with charts
- [ ] Multi-resume version comparison
- [ ] Mobile app (React Native)
- [ ] Interview scheduling integration

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

<div align="center">

**Built with ❤️ for the future of recruitment**

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-Visit-orange?style=for-the-badge)](#)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](#)

⭐ **If you found this project useful, consider giving it a star!** ⭐

</div>
