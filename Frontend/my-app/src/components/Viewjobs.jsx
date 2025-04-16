// src/pages/ViewJobs.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ViewJobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate(); // ✅ Use hook at top-level

  useEffect(() => {
    axios.get("http://localhost:3000/api/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const handleSubmit = () => {
    navigate("/apply"); // ✅ Use navigate here
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4" style={{ color: "#5F4B8B" }}>Available Jobs</h2>
      <Row>
        {jobs.map((job) => (
          <Col key={job._id} md={4} className="mb-4">
            <Card style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
              <Card.Body>
                <Card.Title>{job.jobName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Job ID: {job.jobId}</Card.Subtitle>
                <Card.Text>
                  <strong>Skills Required: </strong>{job.skillsRequired}<br />
                  <strong>Experience: 0</strong>{job.yearOfExperience} years
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ backgroundColor: "#5F4B8B", border: "none" }}
                  onClick={handleSubmit}
                >
                  Apply Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
