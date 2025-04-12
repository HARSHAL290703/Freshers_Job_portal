import { useState } from "react";

export default function AuthForm({ onSubmit, type, role }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: role,  // Role passed from AuthPage
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
      {type === "signup" && role === "fresher" && (
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} required />
        </div>
      )}
      {type === "signup" && (
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
      )}
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" name="password" className="form-control" onChange={handleChange} required />
      </div>

      {type === "signup" && role === "fresher" && (
        <div className="mb-3">
          <label className="form-label">Skills</label>
          <input type="text" name="skills" className="form-control" onChange={handleChange} required />
        </div>
      )}

      {type === "signin" && (
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
      )}

      <button type="submit" className="btn w-100" style={{ backgroundColor: '#2A2F4F', color: '#fff' }}>
        {type === "signup" ? "Sign Up" : "Sign In"}
      </button>
    </form>
  );
}
