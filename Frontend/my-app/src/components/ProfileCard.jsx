import React from "react";

export default function ProfileCard({ user }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">Email: {user.email}</p>
        {user.skills && <p className="card-text">Skills: {user.skills.join(", ")}</p>}
        {user.jobInterest && <p className="card-text">Interested In: {user.jobInterest}</p>}
      </div>
    </div>
  );
}
