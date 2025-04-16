import React, { useState } from "react";
import { Form, Button, Container, Alert, Card } from "react-bootstrap";
import axios from "axios";

export default function Employersignup() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    try {
      const res = await axios.post("http://localhost:3000/api/employer-signup", formData);
      if (res.data.success) {
        setSuccess(true);
        setFormData({ email: "", password: "" });
      } else {
        setError("Email already used");
      }
    } catch (err) {
      setError("Email already used or server error");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <Card style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)", padding: "30px" }}>
        <h3 className="text-center mb-4" style={{ color: "#5F4B8B" }}>Employer Signup</h3>

        {success && <Alert variant="success">Signup successful!</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button type="submit" style={{ backgroundColor: "#5F4B8B", border: "none" }}>
              Sign Up
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
