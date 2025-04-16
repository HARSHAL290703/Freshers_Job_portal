import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Container, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTools,
  FaBriefcase,
  FaCalendarAlt,
  FaFileAlt
} from 'react-icons/fa';

const Viewapplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/applications')
      .then(res => {
        setApplications(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 text-primary fw-bold">All Job Applications</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row className="g-4">
          {applications.map((app, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="shadow-lg border-0 h-100" style={{ backgroundColor: "#fdfdfd", borderRadius: "15px" }}>
                <Card.Body>
                  <Card.Title className="text-success fs-4 fw-semibold">
                    <FaUser className="me-2" />
                    {app.fullName}
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    <FaFileAlt className="me-2" />Job ID: {app.jobId}
                  </Card.Subtitle>
                  <Card.Text className="fs-6">
                    <p><FaEnvelope className="me-2 text-danger" /> <strong>Email:</strong> {app.email}</p>
                    <p><FaPhone className="me-2 text-info" /> <strong>Phone:</strong> {app.phone}</p>
                    <p><FaTools className="me-2 text-warning" /> <strong>Skills:</strong> {app.skills}</p>
                    <p><FaBriefcase className="me-2 text-secondary" /> <strong>Experience:</strong> {app.experience} years</p>
                    <p><FaCalendarAlt className="me-2 text-primary" /> <strong>Applied At:</strong> {formatDate(app.appliedAt)}</p>
                  </Card.Text>
                  <a
                    href={app.resumeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    <FaFileAlt className="me-1" />
                    View Resume
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Viewapplications;
