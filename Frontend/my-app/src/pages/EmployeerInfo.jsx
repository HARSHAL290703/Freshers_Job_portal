import React from "react";
import { PeopleFill, FunnelFill, GearFill } from "react-bootstrap-icons";

const EmployeerInfo = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center py-5 bg-light min-vh-100">
      <div
        className="card shadow-lg p-4"
        style={{
          maxWidth: "750px",
          borderRadius: "20px",
          backgroundColor: "#fefefe",
          border: "none",
        }}
      >
        <h2 className="card-title text-center text-success fw-bold mb-4">
          <PeopleFill className="me-2" />
          How Our Job Portal Supports Employers
        </h2>
        <p className="card-text text-dark mb-3" style={{ lineHeight: "1.8" }}>
          <FunnelFill className="me-2 text-primary" />
          Gain access to a <strong>pool of skilled and enthusiastic freshers</strong> eager to grow and contribute. We make hiring easy by connecting you with the right candidates with the potential to grow into future assets.
        </p>
        <p className="card-text text-dark mb-3" style={{ lineHeight: "1.8" }}>
          🎯 Post jobs specifically for freshers, use filters to sort candidates by skills, and leverage our <strong>AI-based matching</strong> system to discover the best fits effortlessly.
        </p>
        <p className="card-text text-dark mb-2" style={{ lineHeight: "1.8" }}>
          <GearFill className="me-2 text-warning" />
          Utilize our powerful tools — from <strong>resume screening</strong> to <strong>interview scheduling</strong> and <strong>real-time messaging</strong> — to make your hiring process fast, smooth, and efficient.
        </p>
        <p className="text-center mt-4 fw-semibold text-secondary">
          Build your future-ready team with fresh talent today!
        </p>
      </div>
    </div>
  );
};

export default EmployeerInfo;
