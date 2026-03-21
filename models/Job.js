const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  salary: Number,
  location: String
});

module.exports = mongoose.model("Job", jobSchema);