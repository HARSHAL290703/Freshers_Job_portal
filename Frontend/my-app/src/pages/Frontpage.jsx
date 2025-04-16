import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './Frontpage.css';  
import { useNavigate } from 'react-router-dom';

const Frontpage = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/gotobutton");
  };

  return (
    <div className="front-page-container">
      <div className="background-image">
        <div className="overlay">
          <div className="content text-center text-white p-4">
            <h1 className="display-4 fw-bold">Find Your Career, You Deserve It!</h1>
            <p className="lead mb-4">Unlock endless opportunities and take the first step towards a rewarding career with us. Explore a wide range of job openings tailored to your skills and aspirations, and find the perfect fit for your career goals. Join a community of professionals and discover the perfect job that matches your passion, guiding you toward a successful future.</p>
            <button className="btn btn-lg btn-primary shadow-sm rounded-pill px-5 py-3" onClick={clickHandler}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
