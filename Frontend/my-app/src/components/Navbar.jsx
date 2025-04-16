import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserTie, FaUserGraduate, FaSignInAlt } from "react-icons/fa"; // Icons

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm"
      style={{ backgroundColor: '#2A2F4F', padding: '1.2rem 2rem' }} // Top-bottom padding increased
    >
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-white fw-bold">
          🎓 JobHunt
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4"> {/* more spacing between links */}
            <li className="nav-item">
              <Link
                className="nav-link text-white d-flex align-items-center gap-2 px-3 py-2"
                to="/"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white d-flex align-items-center gap-2 px-3 py-2"
                to="/employerinfo"
              >
                <FaUserTie /> Employer Info
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white d-flex align-items-center gap-2 px-3 py-2"
                to="/fresherinfo"
              >
                <FaUserGraduate /> Fresher Info
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white d-flex align-items-center gap-2 px-3 py-2"
                to="/about"
              >
                <FaUserGraduate /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white d-flex align-items-center gap-2 px-3 py-2"
                to="/signIn/signUp"
              >
                <FaSignInAlt /> Sign In / Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
