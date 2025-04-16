import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Form,
  Badge,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaEnvelope,
  FaBuilding,
  FaFileUpload,
  FaFileAlt,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

export default function EmployerProfile() {
  const storedEmail = localStorage.getItem("employerEmail");

  const [employerInfo, setEmployerInfo] = useState({
    name: storedEmail,
    email: storedEmail,
    company: "Tech Corp",
    profileImage: null,
    resumeLink: "",
    skills: [],
  });

  const navigate = useNavigate();

  const submithandler = () => {
    navigate("/viewapplications");
  };

  const [newSkill, setNewSkill] = useState("");
  const [resumeInput, setResumeInput] = useState("");
  const [postedJobs, setPostedJobs] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const employerEmail = employerInfo.email;
    axios
      .get(`http://localhost:3000/api/jobs-byemail?email=${employerEmail}`)
      .then((res) => {
        setPostedJobs(res.data);
      })
      .catch((err) => console.error("Error fetching jobs:", err));
  }, [employerInfo.email]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setEmployerInfo((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }));
      setNewSkill("");
    }
  };

  const handleAddResume = () => {
    if (resumeInput.trim() !== "") {
      setEmployerInfo((prev) => ({
        ...prev,
        resumeLink: resumeInput.trim(),
      }));
      setResumeInput("");
    }
  };

  return (
    <Container className="mt-4">
      {/* Profile Header */}
      <Card className="p-4 mb-5 shadow-lg" style={{ background: "#f3f4f6", border: "none" }}>
        <Row className="align-items-center">
          <Col md={2} className="text-center">
            <img
              src={previewImage || "https://via.placeholder.com/100"}
              alt="Profile"
              className="rounded-circle mb-3"
              style={{
                width: "110px",
                height: "110px",
                objectFit: "cover",
                border: "3px solid #0077B5",
              }}
            />
            <Form.Group controlId="uploadImage">
              <Form.Label className="btn btn-outline-secondary btn-sm">
                Upload Image
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </Form.Label>
            </Form.Group>
          </Col>

          <Col md={10}>
            <h3 style={{ color: "#0077B5" }}>
              <FaUserCircle className="me-2" />
              {employerInfo.name}
            </h3>
            <p><FaEnvelope className="me-2" /><strong>Email:</strong> {employerInfo.email}</p>
            <p><FaBuilding className="me-2" /><strong>Company:</strong> {employerInfo.company}</p>

            <Form className="d-flex align-items-center gap-2 mb-2">
              <Form.Control
                type="text"
                placeholder="Paste your resume link"
                value={resumeInput}
                onChange={(e) => setResumeInput(e.target.value)}
              />
              <Button variant="primary" onClick={handleAddResume}>
                <FaFileUpload className="me-2" />
                Add Resume
              </Button>
            </Form>
            {employerInfo.resumeLink && (
              <p>
                <FaFileAlt className="me-2" />
                <a href={employerInfo.resumeLink} target="_blank" rel="noopener noreferrer" className="text-primary">
                  View Resume
                </a>
              </p>
            )}
          </Col>
        </Row>
      </Card>

      {/* Skills Section */}
      <Card className="p-4 mb-5 shadow-sm">
        <h5 style={{ color: "#0077B5" }}>Skills</h5>
        <Form className="d-flex align-items-center gap-2 mb-3">
          <Form.Control
            type="text"
            placeholder="Add a skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <Button variant="success" onClick={handleAddSkill}>
            <FaCode className="me-2" />
            Add Skill
          </Button>
        </Form>

        <div>
          {employerInfo.skills.length === 0 && <p>No skills added yet.</p>}
          {employerInfo.skills.map((skill, idx) => (
            <Badge key={idx} bg="info" className="me-2 mb-2 p-2">{skill}</Badge>
          ))}
        </div>
      </Card>

      {/* Jobs Posted Section */}
      <Card className="p-4 shadow-sm mb-5">
        <h4 style={{ color: "#0077B5" }}>Jobs Posted</h4>
        <Row>
          {postedJobs.length === 0 && <p className="text-muted ps-3">No jobs posted yet.</p>}
          {postedJobs.map((job) => (
            <Col key={job._id} md={4} className="mb-4">
              <Card className="shadow-sm border-0 h-100">
                <Card.Body>
                  <Card.Title style={{ color: "#0077B5" }}>{job.jobName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Job ID: {job.jobId}</Card.Subtitle>
                  <Card.Text>
                    <strong>Skills:</strong> {job.skillsRequired}<br />
                    <strong>Experience:</strong> {job.yearsOfExperience} years
                  </Card.Text>
                  <Button variant="outline-primary" className="w-100" onClick={submithandler}>
                    <FaArrowRight className="me-2" />
                    View Applications
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </Container>
  );
}
