require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Job = require("./models/Job");
const Application = require("./models/Application");
const User = require("./models/User");

console.log(process.env.MONGO_URI);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log("MongoDB connection error:", err);
});

// Test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});

app.post("/jobs", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.json({ message: "Job added successfully", job: newJob });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/apply", async (req, res) => {
  try {
    const { userId, jobId } = req.body;

    const application = new Application({
      userId,
      jobId
    });

    await application.save();

    res.json({
      message: "Job applied successfully",
      application
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    res.json({
      message: "User registered successfully",
      user: newUser
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/jobs/search", async (req, res) => {
  try {
    const keyword = req.query.q;

    const jobs = await Job.find({
      title: { $regex: keyword, $options: "i" }
    });

    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/jobs/:id", async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Job updated successfully",
      job: updatedJob
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/jobs/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    res.json({
      message: "Job deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});