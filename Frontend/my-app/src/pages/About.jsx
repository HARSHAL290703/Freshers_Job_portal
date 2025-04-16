import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
export default function About() {
  const navigate = useNavigate();

  const mainContainerStyle = {
    
    background: "linear-gradient(to right, #A084DC, #5F4B8B)",
    color: "#ffffff",
    padding: "4rem 2rem",
    fontFamily: "Segoe UI, sans-serif",
    animation: "fadeIn 1s ease-in-out",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.7rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: "0.8px",
  };

  const textBlockStyle = {
    maxWidth: "950px",
    margin: "0 auto",
    fontSize: "1.25rem",
    lineHeight: "1.8",
    animation: "slideIn 1s ease",
  };

  const listStyle = {
    marginTop: "1rem",
    paddingLeft: "1.2rem",
  };

  const footerStyle = {
    textAlign: "center",
    marginTop: "3rem",
    fontStyle: "italic",
    opacity: "0.9",
    fontSize: "1rem",
  };

  const buttonStyle = {
    backgroundColor: "#fff",
    color: "#5F4B8B",
    padding: "0.75rem 2rem",
    borderRadius: "30px",
    border: "none",
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginTop: "2rem",
    cursor: "pointer",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    transition: "all 0.3s ease-in-out",
  };

  const buttonHoverStyle = {
    backgroundColor: "#EDE4FF",
    color: "#5F4B8B",
    transform: "scale(1.05)",
  };

  const testimonialsStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "1.5rem",
    borderRadius: "10px",
    marginTop: "3rem",
  };

  const testimonialStyle = {
    marginBottom: "1rem",
    fontStyle: "italic",
    fontSize: "1rem",
    lineHeight: "1.6",
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, buttonHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, buttonStyle);
  };

  const handleSubmit = () => {
    alert("Redirecting to SignIn/SignUp");
    navigate("/home"); // Replace with "/" if your Home route is at root
  };

  return (
    <div style={mainContainerStyle}>
      <h1 style={headingStyle}>🎓 Welcome Freshers!</h1>
      <div style={textBlockStyle}>
        <p>
          Just graduated or stepping into the professional world?{" "}
          <strong>Freshers Job Portal</strong> is built just for <u>YOU</u>. Whether you’re from engineering, arts,
          commerce, or any stream — this platform helps you take your very first step toward a bright career.
        </p>
        <p>
          No experience? No problem! We connect you with companies that are actively hiring freshers for
          internships, trainee roles, and full-time entry-level positions.
        </p>

        <p><strong>💡 What You Get:</strong></p>
        <ul style={listStyle}>
          <li>🔍 Discover jobs made for fresh graduates and students</li>
          <li>📁 Create your profile and showcase your skills</li>
          <li>📝 Apply to jobs with just a few clicks</li>
          <li>🎯 Get matched based on your goals</li>
          <li>📱 Fully mobile friendly</li>
        </ul>

        <button
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleSubmit}
        >
          🚀 Get Started Now
        </button>

        <div style={testimonialsStyle}>
          <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>💬 What Freshers Say</h3>
          <p style={testimonialStyle}>
            “I found my first internship within a week of signing up. Super easy and helpful!” <br />
            — Aditi, Computer Science Graduate
          </p>
          <p style={testimonialStyle}>
            “The portal is beginner-friendly. As someone from a non-tech background, I still found great job options.” <br />
            — Rohan, B.Com Student
          </p>
        </div>

        <div style={footerStyle}>
          💙 Made with care for all dreamers and doers — <strong>Freshers Job Portal Team</strong>
        </div>
      </div>
    </div>
  );
}
