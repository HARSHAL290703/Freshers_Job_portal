import React, { useState } from "react";
import { Form, Button, Container, Alert, Card } from "react-bootstrap";
import axios from "axios";

export default function Freshersignup() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const res = await axios.post("http://localhost:3000/api/signup", formData);
      if (res.data.success) {
        setSuccess(true);
        setFormData({ email: "", password: "" });
      } else {
        setError(res.data.message || "Signup failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <Card style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)", padding: "30px" }}>
        <h3 className="text-center mb-4" style={{ color: "#5F4B8B" }}>Fresher Signup</h3>

        {success && <Alert variant="success">Signup successful!</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="example@gmail.com"
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
              placeholder="Enter a strong password"
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
