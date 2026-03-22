# 🚀 Job Portal Backend

## 📌 Description
This is a Job Portal backend system built using Node.js, Express, and MongoDB. It supports user authentication, job posting, job search, and job application features.

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## ⚙️ Features
- User Registration (POST /register)
- User Login (POST /login)
- Add Job (POST /jobs)
- Get All Jobs (GET /jobs)
- Search Jobs (GET /jobs/search?q=keyword)
- Update Job (PUT /jobs/:id)
- Delete Job (DELETE /jobs/:id)
- Apply for Job (POST /apply)

---

## 📂 Project Structure
job-portal-system/
│── models/
│   ├── Job.js
│   ├── Application.js
│   └── User.js
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

### 👤 User
- POST /register
- POST /login

### 💼 Jobs
- POST /jobs
- GET /jobs
- GET /jobs/search?q=keyword
- PUT /jobs/:id
- DELETE /jobs/:id

### 📥 Applications
- POST /apply

---

## 📊 MongoDB Queries Used
- insertOne
- find
- findOne
- regex search
- updateOne
- deleteOne

---

## 🚀 Future Improvements
- Frontend (React)
- JWT Authentication
- Role-based access (Admin/User)
- Job filtering

---

## 👩‍💻 Author
Ankitha