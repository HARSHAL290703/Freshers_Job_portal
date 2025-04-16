import React, { useState } from "react";
import axios from "axios";
import {
  FaBriefcase,
  FaRegIdCard,
  FaTools,
  FaCalendarAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function AddJob() {
  const [formData, setFormData] = useState({
    email: localStorage.getItem("employerEmail") || "", // auto-fill from localStorage
    jobName: "",
    jobId: "",
    skillsRequired: "",
    yearsOfExperience: 0, // always 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/jobs", formData);
      alert("Job added successfully!");
      setFormData({
        email: localStorage.getItem("employerEmail") || "",
        jobName: "",
        jobId: "",
        skillsRequired: "",
        yearsOfExperience: 0,
      });
    } catch (error) {
      console.error("Error adding job:", error);
      alert("Failed to add job.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-success fw-bold">Add a New Job</h2>
      <form
        onSubmit={handleSubmit}
        className="w-75 mx-auto shadow-lg p-4 rounded-3 bg-white"
      >
        <div className="mb-3">
          <label className="form-label fw-semibold">
            <FaEnvelope className="me-2" /> Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            <FaBriefcase className="me-2" /> Job Name
          </label>
          <input
            type="text"
            name="jobName"
            className="form-control"
            value={formData.jobName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            <FaRegIdCard className="me-2" /> Job ID
          </label>
          <input
            type="text"
            name="jobId"
            className="form-control"
            value={formData.jobId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            <FaTools className="me-2" /> Skills Required
          </label>
          <input
            type="text"
            name="skillsRequired"
            className="form-control"
            value={formData.skillsRequired}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            <FaCalendarAlt className="me-2" /> Years of Experience
          </label>
          <input
            type="number"
            name="yearsOfExperience"
            className="form-control"
            value={formData.yearsOfExperience}
            disabled
          />
        </div>

        <button
          type="submit"
          className="btn btn-success w-100 py-2 mt-3"
          style={{
            borderRadius: "25px",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          Submit Job
        </button>
      </form>
    </div>
  );
}
