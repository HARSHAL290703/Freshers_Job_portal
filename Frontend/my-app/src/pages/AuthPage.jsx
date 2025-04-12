import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function AuthPage() {
  const { role, action } = useParams(); // Get role (fresher/employer) and action (signup/signin)
  const navigate = useNavigate();

  const handleAuthSubmit = (data) => {
    console.log(data); // Handle authentication logic (skip actual logic for now)

    // Redirect based on role (fresher or employer)
    if (data.role === "fresher") {
      navigate("/fresher"); // Redirect to Fresher Dashboard
    } else {
      navigate("/employer"); // Redirect to Employer Dashboard
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: '#2A2F4F' }}>
        {action === "signup" ? `Sign Up` : `Sign In`} as {role}
      </h2>
      <AuthForm onSubmit={handleAuthSubmit} type={action} role={role} />
    </div>
  );
}
