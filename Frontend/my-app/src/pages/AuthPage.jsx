import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function AuthPage() {
  const { role,action} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "fresher" && action=="signup") {
      navigate("/Freshersignup");
    } 
    if (role === "fresher" && action=="signin") {
      navigate("/Freshersignin");
    } 
    if (role === "employer" && action=="signin") {
      navigate("/Employersignin");
    } 
    
    if (role === "employer" && action=="signup") {
      navigate("/Employersignup");
    }
  }, [role,action]);

  return (
    <div className="container my-5 text-center">
      <h3>Redirecting to your dashboard...</h3>
    </div>
  );
}
