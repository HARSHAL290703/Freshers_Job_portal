const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/jobportal")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Mongoose Schema
const jobSchema = new mongoose.Schema({
  email:String,
  jobName: String,
  jobId: String,
  skillsRequired: String,
  yearsOfExperience: {
    type: Number,
    default: 0
  }
});
const jobSchema2 = new mongoose.Schema({
  jobId: String,
  fullName: String,
  email: String,
  phone: String,
  skills: String,
  experience: Number,
  resumeLink: String,
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const employerSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Employer = mongoose.model("Employer", employerSchema);
const User = mongoose.model("applydata", userSchema);
const Job = mongoose.model("datas", jobSchema); // Collection name = datas
const Job2=mongoose.model("jobapplications",jobSchema2);
// POST /api/employer-signup
app.post("/api/employer-signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existing = await Employer.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    const newEmployer = new Employer({ email, password });
    await newEmployer.save();

    res.json({ success: true, message: "Employer registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
app.post("/api/submitformdata", async (req, res) => {
  try {
    const newApplication = new Job2(req.body);
    await newApplication.save();
    res.status(201).json({ message: "Application stored successfully!" });
  } catch (error) {
    console.error("Error storing application:", error);
    res.status(500).json({ message: "Failed to store application." });
  }
});

app.post("/api/jobs", async (req, res) => {
  try {
    const data = req.body;

    if (data.yearsOfExperience === 0) {
      const job = new Job(data);
      await job.save();
      res.status(201).json({ message: "Job added successfully" });
    } else {
      res.status(400).json({ message: "Job should be for freshers only" });
    }
  } catch (err) {
    console.error("Error saving job:", err);
    res.status(500).json({ error: "Failed to save job. This portal is only for freshers." });
  }
});

app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if email already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: "Email already used" });
    }

    // Save new user
    const newUser = new User({ email, password });
    await newUser.save();

    res.json({ success: true, message: "Signup successful" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
app.get('/api/applications', async (req, res) => {
  try {
    const applications = await Job2.find();
    res.json(applications);
  } catch (err) {
    res.status(500).send("Server error");
  }
});
// GET route to fetch all jobs
app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).send("Server error");
  }
});
app.get("/api/jobs-byemail", async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) return res.status(400).json({ error: "Email required" });

    const jobs = await Job.find({ email: email });
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    res.json({ success: true, message: "Signin successful" });
  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
// POST /api/employer-signin
app.post("/api/employer-signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find employer by email
    const employer = await Employer.findOne({ email });

    if (!employer) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // Check if the password matches
    if (employer.password !== password) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // Successful login
    res.json({ success: true, message: "Signin successful" });

  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
