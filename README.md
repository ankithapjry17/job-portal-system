# 🚀 Job Portal System

## 📌 Description
This is a full-stack Job Portal system built using Node.js, Express, MongoDB, and React. It allows users to register, login, view jobs, and apply for jobs.

---

## 🛠️ Tech Stack
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- ORM: Mongoose
- API Calls: Axios

---

## ⚙️ Features

### 👤 User
- User Registration (POST /register)
- User Login (POST /login)

### 💼 Jobs
- Add Job (POST /jobs)
- Get All Jobs (GET /jobs)
- Search Jobs (GET /jobs/search?q=keyword)
- Update Job (PUT /jobs/:id)
- Delete Job (DELETE /jobs/:id)

### 📥 Applications
- Apply for Job (POST /apply)

---

## 📂 Project Structure
# 🚀 Job Portal System

## 📌 Description
This is a full-stack Job Portal system built using Node.js, Express, MongoDB, and React. It allows users to register, login, view jobs, and apply for jobs.

---

## 🛠️ Tech Stack
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- ORM: Mongoose
- API Calls: Axios

---

## ⚙️ Features

### 👤 User
- User Registration (POST /register)
- User Login (POST /login)

### 💼 Jobs
- Add Job (POST /jobs)
- Get All Jobs (GET /jobs)
- Search Jobs (GET /jobs/search?q=keyword)
- Update Job (PUT /jobs/:id)
- Delete Job (DELETE /jobs/:id)

### 📥 Applications
- Apply for Job (POST /apply)

---

## 📂 Project Structure
job-portal-system/
│── client/ → Frontend (React)
│── models/ → MongoDB Schemas
│ ├── Job.js
│ ├── Application.js
│ └── User.js
│── server.js → Backend API
│── package.json


---

## ▶️ How to Run

### Backend
npm install
node server.js


### Frontend
cd client
npm install
npm start


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
- JWT Authentication (secure login)
- Role-based access (Admin/User)
- Job filtering and pagination
- Resume upload feature
- Notifications system

---

## 👩‍💻 Author
Ankitha