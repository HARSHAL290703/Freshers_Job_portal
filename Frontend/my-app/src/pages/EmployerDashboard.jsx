import React from "react";
import EmployerNavbar from "../components/EmployerNavbar";
import { Card, Row, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EmployerDashboard() {
  return (
    <>
      <EmployerNavbar />
      <Container className="my-5">
        <h2 className="text-center mb-5 text-warning fw-bold">How We Support Employers</h2>
        <Row className="g-4">
          {[
            {
              title: "Quick Talent Access",
              text: "Browse thousands of verified fresher profiles instantly.",
              bg: "#fff8e1"
            },
            {
              title: "Smart Filtering",
              text: "Use AI-based filters to shortlist candidates efficiently.",
              bg: "#e1f5fe"
            },
            {
              title: "Easy Job Posting",
              text: "Post multiple jobs easily with our streamlined interface.",
              bg: "#f3e5f5"
            },
            {
              title: "Verified Candidates",
              text: "All fresher profiles are pre-screened and verified for accuracy.",
              bg: "#e8f5e9"
            },
            {
              title: "Bulk Hiring Tools",
              text: "Hire at scale using our bulk recruitment tools and APIs.",
              bg: "#fff3e0"
            },
            {
              title: "Employer Branding",
              text: "Showcase your company to stand out and attract talent.",
              bg: "#ede7f6"
            },
            {
              title: "Interview Scheduler",
              text: "Schedule and manage interviews directly from the dashboard.",
              bg: "#fce4ec"
            },
            {
              title: "Insights & Analytics",
              text: "Track post performance and candidate behavior in real time.",
              bg: "#e0f7fa"
            },
            {
              title: "24/7 Support",
              text: "Get round-the-clock assistance from our hiring experts.",
              bg: "#f9fbe7"
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
