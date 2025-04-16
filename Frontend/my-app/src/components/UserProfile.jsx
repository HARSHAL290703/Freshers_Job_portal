import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button, Form, Alert, Badge } from "react-bootstrap";
import axios from "axios";
import { FaPlus, FaTrash, FaUserTie, FaGraduationCap } from "react-icons/fa";

export default function UserProfile() {
  const [profile, setProfile] = useState({
    email: "",
    name: "",
    company: "",
    skills: [],
    role: "",
  });
  const [newSkill, setNewSkill] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const employerEmail = localStorage.getItem("employerEmail");
        const fresherEmail = localStorage.getItem("fresherEmail");
        const email = employerEmail || fresherEmail;
        const role = employerEmail ? "employer" : "fresher";

        if (!email) {
          setError("No user email found. Please sign in again.");
          return;
        }

        const response = await axios.get(`http://localhost:3000/api/${role}-profile/${email}`);
        setProfile({ ...response.data, role });
        setLoading(false);
      } catch (err) {
        setError("Failed to load profile. Please try again later.");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleAddSkill = async () => {
    if (!newSkill.trim()) return;

    try {
      const updatedSkills = [...profile.skills, newSkill.trim()];
      const response = await axios.post(`http://localhost:3000/api/${profile.role}-profile`, {
        ...profile,
        skills: updatedSkills,
      });

      setProfile({ ...response.data, role: profile.role });
      setNewSkill("");
      setSuccess("Skill added successfully!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Failed to add skill. Please try again.");
    }
  };

  const handleRemoveSkill = async (skillToRemove) => {
    try {
      const updatedSkills = profile.skills.filter(skill => skill !== skillToRemove);
      const response = await axios.post(`http://localhost:3000/api/${profile.role}-profile`, {
        ...profile,
        skills: updatedSkills,
      });

      setProfile({ ...response.data, role: profile.role });
      setSuccess("Skill removed successfully!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Failed to remove skill. Please try again.");
    }
  };

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Card className="p-4 mb-5 shadow-lg" style={{ 
        background: "linear-gradient(145deg, #f3f3f3, #d7dbe8)", 
        border: "none",
        borderRadius: "15px"
      }}>
        <Row className="align-items-center">
          <Col md={2} className="text-center">
            <div className="profile-icon" style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              backgroundColor: profile.role === "employer" ? "#5F4B8B" : "#007BFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              border: "3px solid #fff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}>
              {profile.role === "employer" ? (
                <FaUserTie style={{ fontSize: "3rem", color: "#fff" }} />
              ) : (
                <FaGraduationCap style={{ fontSize: "3rem", color: "#fff" }} />
              )}
            </div>
          </Col>

          <Col md={10}>
            <h3 style={{ color: profile.role === "employer" ? "#5F4B8B" : "#007BFF" }}>
              {profile.name || profile.company || "Profile"}
            </h3>
            <p><strong>Email:</strong> {profile.email}</p>
            {profile.role === "employer" && (
              <p><strong>Company:</strong> {profile.company}</p>
            )}
          </Col>
        </Row>
      </Card>

      <Card className="p-4 mb-5 shadow-lg" style={{ borderRadius: "15px" }}>
        <h4 className="mb-4" style={{ color: profile.role === "employer" ? "#5F4B8B" : "#007BFF" }}>
          Skills
        </h4>
        
        <div className="mb-4">
          <Form.Group className="d-flex gap-2">
            <Form.Control
              type="text"
              placeholder="Add a new skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              style={{ borderRadius: "10px" }}
            />
            <Button 
              variant={profile.role === "employer" ? "primary" : "success"}
              onClick={handleAddSkill}
              style={{ borderRadius: "10px" }}
            >
              <FaPlus /> Add
            </Button>
          </Form.Group>
        </div>

        <div className="d-flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <Badge 
              key={index}
              pill
              bg={profile.role === "employer" ? "primary" : "success"}
              className="p-2 d-flex align-items-center gap-2"
              style={{ fontSize: "1rem" }}
            >
              {skill}
              <FaTrash 
                style={{ cursor: "pointer" }} 
                onClick={() => handleRemoveSkill(skill)}
              />
            </Badge>
          ))}
        </div>
      </Card>
    </Container>
  );
} 