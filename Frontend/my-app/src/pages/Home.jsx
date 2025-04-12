import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: '#2A2F4F' }}>Welcome to the Freshers Job Portal</h2>
      <div className="row">
        <div className="col-md-6 text-center mb-4">
          <Link
            to="/auth/fresher/signup"
            className="btn btn-lg w-75"
            style={{
              backgroundColor: '#FFB300',
              color: '#fff',
              border: 'none',
              fontWeight: 'bold',
            }}
          >
            Fresher Sign Up
          </Link>
          <Link
            to="/auth/fresher/signin"
            className="btn btn-lg w-75 mt-3"
            style={{
              backgroundColor: '#D32F2F',
              color: '#fff',
              border: 'none',
              fontWeight: 'bold',
            }}
          >
            Fresher Sign In
          </Link>
        </div>
        <div className="col-md-6 text-center mb-4">
          <Link
            to="/auth/employer/signup"
            className="btn btn-lg w-75"
            style={{
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              fontWeight: 'bold',
            }}
          >
            Employer Sign Up
          </Link>
          <Link
            to="/auth/employer/signin"
            className="btn btn-lg w-75 mt-3"
            style={{
              backgroundColor: '#1976D2',
              color: '#fff',
              border: 'none',
              fontWeight: 'bold',
            }}
          >
            Employer Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
