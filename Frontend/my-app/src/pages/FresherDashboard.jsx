import React from "react";
import FresherNavbar from "../components/FresherNavbar";
import { Card, Row, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FresherDashboard() {
  return (
    <>
      <FresherNavbar />
      <Container className="my-5">
        <h2 className="text-center mb-5 text-success fw-bold">How We Support Freshers</h2>
        <Row className="g-4">
          {[
            {
              title: "Find Jobs Fast",
              text: "Access thousands of entry-level opportunities tailored to your skills.",
              bg: "#e3f2fd"
            },
            {
              title: "Resume Builder",
              text: "Create professional resumes in minutes with ready-to-use templates.",
              bg: "#fce4ec"
            },
            {
              title: "Skill Boosters",
              text: "Learn in-demand skills through free training and certification courses.",
              bg: "#e8f5e9"
            },
            {
              title: "One-Click Apply",
              text: "Apply to multiple jobs with just one click to save time.",
              bg: "#fff3e0"
            },
            {
              title: "Mock Interviews",
              text: "Practice interviews with AI and expert-reviewed feedback.",
              bg: "#ede7f6"
            },
            {
              title: "Internship Programs",
              text: "Explore paid internships to gain experience and build your resume.",
              bg: "#e0f7fa"
            },
            {
              title: "Job Alerts",
              text: "Get instant alerts for new jobs matching your profile.",
              bg: "#f1f8e9"
            },
            {
              title: "Career Guidance",
              text: "Talk to career coaches and get personalized advice.",
              bg: "#f9fbe7"
            },
            {
              title: "Profile Insights",
              text: "See how your profile ranks and improve visibility to employers.",
              bg: "#f3e5f5"
            }
          ].map((card, index) => (
            <Col md={4} key={index}>
              <Card className="shadow-lg h-100 border-0 p-3" style={{ background: card.bg, minHeight: "260px" }}>
                <Card.Body>
                  <Card.Title className="fw-bold fs-4">{card.title}</Card.Title>
                  <Card.Text className="fs-5">{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
