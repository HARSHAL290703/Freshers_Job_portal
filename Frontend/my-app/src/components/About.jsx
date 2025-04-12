import React from "react";

export default function About() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-header text-white" style={{ backgroundColor: '#2A2F4F' }}>
              <h3 className="card-title mb-0">About Freshers Job Portal</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Welcome to the **Freshers Job Portal** – your one-stop solution for finding entry-level
                job opportunities. This platform is designed specifically for freshers who are looking to
                kickstart their careers and find suitable job roles in various industries.
              </p>
              <p className="card-text">
                As a fresher, you can explore job postings, apply for jobs, and manage your profile with
                resume uploads, skills, and job interests. On the other hand, employers can post job openings,
                review applications, and access profiles of candidates that match their hiring criteria.
              </p>
              <p className="card-text">
                **Key Features:**
                <ul>
                  <li>Easy job search and application for freshers</li>
                  <li>Job posting and application management for employers</li>
                  <li>Profile management with resumes, skills, and job preferences</li>
                  <li>Responsive design for better accessibility across devices</li>
                </ul>
              </p>
              <p className="card-text">
                Our goal is to connect fresh talent with the right job opportunities and help employers find
                the best candidates for their job openings.
              </p>
            </div>
            <div className="card-footer text-muted">
              <p className="mb-0">Created with passion by the Freshers Job Portal Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
