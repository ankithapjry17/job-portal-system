# 🚀 Job Portal Backend

## 📌 Description
This is a Job Portal backend system built using Node.js, Express, and MongoDB. It allows employers to post jobs and users to view and apply for jobs.

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## ⚙️ Features
- Add Job (POST /jobs)
- Get All Jobs (GET /jobs)
- Apply for Job (POST /apply)
- MongoDB integration

---

## 📂 Project Structure
job-portal-system/
│── models/
│   ├── Job.js
│   └── Application.js
│── server.js
│── package.json

---

## ▶️ How to Run

1. Clone the repository
2. Install dependencies:
   npm install
3. Create a .env file and add:
   MONGO_URI=your_mongodb_connection_string
4. Start server:
   node server.js

---

## 🌐 API Endpoints

### Add Job
POST /jobs

### Get Jobs
GET /jobs

### Apply Job
POST /apply

---

## 📊 Future Improvements
- User authentication (login/register)
- Frontend (React UI)
- Job filtering & search

---

## 👩‍💻 Author
Ankitha
