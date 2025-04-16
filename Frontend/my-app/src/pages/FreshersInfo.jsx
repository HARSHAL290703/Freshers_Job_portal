import React from "react";
import { PersonBadge, ClipboardCheck, RocketTakeoff } from "react-bootstrap-icons";

const FreshersInfo = () => {
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
        <h2 className="card-title text-center text-primary fw-bold mb-4">
          <PersonBadge className="me-2" />
          How Our Job Portal Supports Freshers
        </h2>
        <p className="card-text text-dark mb-3" style={{ lineHeight: "1.8" }}>
          <ClipboardCheck className="me-2 text-success" />
          Our platform is crafted to help <strong>freshers kickstart their career</strong> with confidence. We feature job listings that require no prior experience, connecting fresh graduates to the right opportunities quickly.
        </p>
        <p className="card-text text-dark mb-3" style={{ lineHeight: "1.8" }}>
          <RocketTakeoff className="me-2 text-danger" />
          Get access to <strong>free resume builders, mock interviews</strong>, and expert preparation tools. We match your skills and interests with roles where you can learn, grow, and shine.
        </p>
        <p className="card-text text-dark mb-2" style={{ lineHeight: "1.8" }}>
          🌍 Whether you're from a metro city or a small town, our mission is to <strong>bridge the gap</strong> between talent and opportunity — empowering freshers from every corner of the country.
        </p>
        <p className="text-center mt-4 fw-semibold text-secondary">
          Begin your professional journey with us — where freshers are always a priority.
        </p>
      </div>
    </div>
  );
};

export default FreshersInfo;
