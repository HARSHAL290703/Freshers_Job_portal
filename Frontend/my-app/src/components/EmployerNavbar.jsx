// src/components/EmployerNavbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaClipboardList, FaUserTie } from "react-icons/fa";

export default function EmployerNavbar() {
  const navStyle = {
    backgroundColor: "#5F4B8B",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    color: "#fff",
    fontWeight: "bold",
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
    position: "sticky", // Keeps the navbar fixed at the top of the page
    top: "0",
    zIndex: "100"
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1rem"
  };

  return (
    <nav style={navStyle}>
      <Link to="/employerdashboard/add-job" style={linkStyle}>
        <FaPlusCircle />
        Add Job
      </Link>
      <Link to="/employerdashboard/view-jobs" style={linkStyle}>
        <FaClipboardList />
        View Jobs
      </Link>
      <Link to="/employerdashboard/profile" style={linkStyle}>
        <FaUserTie />
        Profile
      </Link>
    </nav>
  );
}
