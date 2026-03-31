const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  degree: { type: String },
  major: { type: String },
  status: {
    type: String,
    default: "applied"
  }
});

module.exports = mongoose.model("Application", applicationSchema);