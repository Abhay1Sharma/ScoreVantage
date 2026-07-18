<div align="center">

# 🚀 AIResumePro
### 💼 AI-Powered Resume Analysis & Smart Recruitment Platform

<img src="https://img.shields.io/badge/MERN-Full%20Stack-green?style=for-the-badge&logo=mongodb" />
<img src="https://img.shields.io/badge/ATS%20Resume%20Scoring-AI-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Open%20Source-Learning-orange?style=for-the-badge" />
<img src="https://img.shields.io/badge/Responsive-100%25-success?style=for-the-badge" />
<img src="https://img.shields.io/badge/License-MIT-red?style=for-the-badge" />

### 🌐 Live Demo
### 🔗 https://scorevantage.vercel.app

---

### ⭐ An AI-Powered Recruitment Platform that connects Students with Recruiters through ATS Resume Analysis.

</div>

---

# 📌 Overview

**AIResumePro** is a full-stack AI-powered recruitment platform built using the **MERN Stack** that helps **Students** optimize their resumes using ATS (Applicant Tracking System) analysis while enabling **HRs/Recruiters** to efficiently discover high-quality candidates.

Instead of manually filtering thousands of resumes, recruiters can shortlist candidates based on ATS scores, profile quality, resume analysis, and application insights.

The platform bridges the gap between freshers and recruiters through intelligent resume evaluation.

---

# 🎯 Key Highlights

✨ ATS Resume Score Analysis

📄 Resume Parsing using PDF Parser

👨‍🎓 Student Dashboard

🏢 Recruiter Dashboard

📬 Email Notifications

🔐 Secure Authentication

📊 Analytics Dashboard

☁️ Cloud Storage

📈 Job Recommendation Engine

❤️ Recruiter Like System

👀 Resume View Tracking

💼 Smart Job Matching

---

# 🌟 Features

# 👨‍🎓 Student Module

### 🔐 Authentication

- Login
- Register
- JWT Authentication
- Google OAuth Login
- Secure Session Handling

---

### 👤 Student Profile

Students can create a professional profile by adding:

- 📸 Profile Photo
- 🎯 Target Role
- 🔗 LinkedIn URL
- 💻 GitHub URL
- 📝 Professional Bio

---

### 📄 Resume Upload

- Upload Resume (PDF)
- Resume stored securely on Cloudinary
- Resume Parsing
- ATS Score Generation

---

### 🤖 ATS Resume Analysis

The platform analyzes resumes and provides:

- Overall ATS Score
- Resume Ranking
- Resume Storage
- ATS History

---

### 💼 Smart Job Recommendations

Based on ATS Score and Target Role,

Students receive:

✅ Recommended Jobs

✅ Jobs matching above 75%

✅ Latest Openings

✅ Previously Viewed Jobs

---

### 📨 Apply to Jobs

Students can

- View Job Details
- Apply Instantly
- Redirect to Application Link
- Track Applied Jobs

---

### ❤️ Recruiter Interaction

Students can monitor

👀 Resume Views

❤️ Recruiter Likes

📈 Profile Reach

---

# 🏢 Recruiter / HR Module

Recruiters can create their company profile.

---

### 👤 Company Profile

Includes

- Organization Logo
- Recruiter Photo
- Organization Name
- LinkedIn Profile
- Contact Email
- Optional Phone Number

---

### 💼 Job Management

Recruiters can

- Create Jobs
- Manage Active Jobs
- Publish Openings
- Add External Application Link (Google Form / Company Portal)

---

### 👨‍🎓 Candidate Discovery

Candidates are automatically sorted by

🏆 Highest ATS Score

This helps recruiters quickly identify top-quality resumes.

---

### 📄 Candidate Review

Recruiters can

- View Resume
- Open Candidate Profile
- Like Candidate
- View ATS Score

---

### 📊 Recruiter Dashboard

Dashboard Analytics include

📈 Total Job Views

📩 Total Applications

👨‍🎓 Candidate Statistics

📄 Active Jobs

---

# ⚙️ Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Axios
- React Router

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Authentication

- Passport.js
- JWT Authentication
- Google OAuth
- Passport + JWT

---

## File Handling

- Cloudinary
- Multer
- PDF Parser

---

## Email Services

- Nodemailer

Used for

- Password Reset
- Email Verification
- Secure Password Recovery

---

# 🧠 System Workflow

```text
                    Register/Login
                           │
                           ▼
                  Select User Type
             ┌─────────────┴──────────────┐
             │                            │
             ▼                            ▼
         Student                     Recruiter
             │                            │
             ▼                            ▼
      Complete Profile           Complete Profile
             │                            │
             ▼                            ▼
      Upload Resume               Create Job Posts
             │                            │
             ▼                            ▼
      ATS Score Generated       Candidates Sorted by ATS
             │                            │
             ▼                            ▼
     Job Recommendations         View Candidate Resume
             │                            │
             ▼                            ▼
        Apply to Jobs            Like / Shortlist Candidate
```

---

# 🔥 Major Functionalities

## ✅ Authentication

- JWT Authentication
- Passport Authentication
- Google OAuth
- Secure Login
- Role Based Access

---

## ✅ Resume Parser

- PDF Resume Upload
- Resume Parsing
- ATS Analysis
- Resume Storage

---

## ✅ Job Portal

- Job Posting
- Job Filtering
- Job Recommendation
- Apply to Jobs

---

## ✅ Recruiter Portal

- Candidate Discovery
- ATS Ranking
- Resume Review
- Candidate Likes

---

## ✅ Student Portal

- ATS Dashboard
- Resume History
- Applied Jobs
- Profile Analytics

---

# 📂 Project Structure

```
AIResumePro/

├── client/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── hooks/
│   └── assets/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── routes/
│   ├── config/
│   ├── utils/
│   └── services/
│
├── uploads/
├── package.json
└── README.md
```

---

# 🔐 Security Features

✅ JWT Authentication

✅ Passport Authentication

✅ Google OAuth

✅ Password Encryption

✅ Protected Routes

✅ Cloud Storage Security

✅ Password Reset via Email

---

# ☁️ Cloud Services

- Cloudinary (Images)
- Cloudinary (Resume Storage)

---

# 📧 Email Services

Nodemailer is used for

- Password Reset
- Account Recovery
- Secure Email Verification

---

# 🚀 Future Improvements

- 🤖 AI Resume Suggestions
- 📈 Resume Improvement Tips
- 🎤 AI Mock Interview
- 💬 Recruiter Chat
- 📹 Video Resume
- 📊 Company Analytics
- 🔔 Real-time Notifications
- 🌙 Dark Mode
- 📱 Mobile Application

---

# 🖥️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/AIResumePro.git
```

Move into project

```bash
cd AIResumePro
```

Install dependencies

```bash
npm install
```

Client

```bash
cd client
npm install
```

Server

```bash
cd server
npm install
```

Run

```bash
npm run dev
```

---

# 🌍 Environment Variables

```env
PORT=

MONGO_URI=

JWT_SECRET=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

EMAIL=

EMAIL_PASSWORD=
```

---

# 📸 Screenshots

> Add screenshots here

- Landing Page
- Login
- Student Dashboard
- Recruiter Dashboard
- ATS Score
- Resume Upload
- Job Matching
- Candidate Dashboard

---

# 📈 Why AIResumePro?

✔ Helps Students Improve Resume

✔ ATS-Based Resume Evaluation

✔ Recruiters Save Hiring Time

✔ Smart Candidate Ranking

✔ Intelligent Job Recommendations

✔ Modern Full Stack Architecture

✔ Secure Authentication

✔ Professional Dashboard

---

# 💻 Built With

<p align="center">

<img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,javascript,tailwind,html,css,git,github,vscode"/>

</p>

---

# 👨‍💻 Developer

## **Your Name**

Full Stack MERN Developer

💼 Passionate about AI, Full Stack Development and Building Scalable Applications.

---

# ⭐ Support

If you like this project,

🌟 Star this repository

🍴 Fork it

💙 Follow for more projects

---

<div align="center">

# 🚀 Transforming Recruitment with AI

### Made with ❤️ using MERN Stack

</div> 
