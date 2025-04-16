import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const buttonStyle = {
    width: '80%',
    padding: '0.75rem 1.5rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: '#2A2F4F', fontSize: '2rem' }}>
        🎓 Welcome to the Freshers Job Portal
      </h2>

      <div className="row justify-content-center">
        {/* Fresher Section */}
        <div className="col-md-5 text-center mb-4">
          <h4 className="mb-4 fw-semibold" style={{ color: '#333' }}>Fresher</h4>
          <Link
            to="/auth/fresher/signup"
            className="btn d-block mx-auto"
            style={{ ...buttonStyle, backgroundColor: '#FFB300', color: '#fff' }}
          >
            🚀 Sign Up
          </Link>
          <Link
            to="/auth/fresher/signin"
            className="btn mt-3 d-block mx-auto"
            style={{ ...buttonStyle, backgroundColor: '#D32F2F', color: '#fff' }}
          >
            🔐 Sign In
          </Link>
        </div>

        {/* Employer Section */}
        <div className="col-md-5 text-center mb-4">
          <h4 className="mb-4 fw-semibold" style={{ color: '#333' }}>Employer</h4>
          <Link
            to="/auth/employer/signup"
            className="btn d-block mx-auto"
            style={{ ...buttonStyle, backgroundColor: '#4CAF50', color: '#fff' }}
          >
            🏢 Sign Up
          </Link>
          <Link
            to="/auth/employer/signin"
            className="btn mt-3 d-block mx-auto"
            style={{ ...buttonStyle, backgroundColor: '#1976D2', color: '#fff' }}
          >
            🔑 Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
