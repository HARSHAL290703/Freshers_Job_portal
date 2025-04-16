// src/components/FresherNavbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBriefcase, FaUserCircle, FaGraduationCap } from "react-icons/fa";

export default function FresherNavbar() {
  return (
    <Navbar bg="light" expand="lg" style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <Container>
        <Navbar.Brand as={Link} to="/freshdashboard/view-jobs" style={{ color: "#007BFF", fontWeight: "bold", display: "flex", alignItems: "center" }}>
          <FaGraduationCap style={{ marginRight: "8px" }} />
          Fresher Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/freshdashboard/view-jobs" style={navStyle}>
              <FaBriefcase style={{ marginRight: "6px" }} />
              View Jobs
            </Nav.Link>
            <Nav.Link as={Link} to="/freshdashboard/profile" style={navStyle}>
              <FaUserCircle style={{ marginRight: "6px" }} />
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const navStyle = {
  fontWeight: "500",
  color: "#333",
  padding: "0.5rem 1rem",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  transition: "0.3s",
};
