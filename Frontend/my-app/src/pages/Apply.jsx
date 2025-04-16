import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaListUl,
  FaLink,
  FaCheckCircle,
  FaBriefcase,
} from "react-icons/fa";

export default function Apply() {
  const [formData, setFormData] = useState({
    jobId: "",
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    resumeLink: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resumeLink.trim()) {
      setError("Please paste your resume link.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/submitformdata",
        formData
      );

      if (response.status === 201 || response.status === 200) {
        setSuccess(true);
        setError("");
        setFormData({
          jobId: "",
          fullName: "",
          email: "",
          phone: "",
          skills: "",
          experience: "",
          resumeLink: "",
        });
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Try again!");
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4" style={{ color: "#5F4B8B" }}>
        <FaCheckCircle style={{ marginRight: "10px" }} />
        Apply for the Job
      </h2>

      {success && (
        <Alert variant="success">Application submitted successfully!</Alert>
      )}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>
            <FaBriefcase style={{ marginRight: "10px" }} />
            Job ID
          </Form.Label>
          <Form.Control
            type="text"
            name="jobId"
            placeholder="Enter the Job ID"
            value={formData.jobId}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaUser style={{ marginRight: "10px" }} />
                Full Name
              </Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Your name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaEnvelope style={{ marginRight: "10px" }} />
                Email
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaPhoneAlt style={{ marginRight: "10px" }} />
                Phone
              </Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="1234567890"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaListUl style={{ marginRight: "10px" }} />
                Experience (years)
              </Form.Label>
              <Form.Control
                type="number"
                name="experience"
                placeholder="0"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>
            <FaListUl style={{ marginRight: "10px" }} />
            Skills
          </Form.Label>
          <Form.Control
            type="text"
            name="skills"
            placeholder="HTML, CSS, JavaScript"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>
            <FaLink style={{ marginRight: "10px" }} />
            Resume Link
          </Form.Label>
          <Form.Control
            type="url"
            name="resumeLink"
            placeholder="Paste Google Drive link"
            value={formData.resumeLink}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button
            type="submit"
            style={{
              backgroundColor: "#5F4B8B",
              border: "none",
              borderRadius: "30px",
              padding: "0.75rem 1.5rem",
            }}
          >
            Submit Application
          </Button>
        </div>
      </Form>
    </Container>
  );
}
