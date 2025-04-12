import React from "react";

export default function JobCard({ job, onApply }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{job.company} - {job.location}</h6>
        <p className="card-text">{job.description}</p>
        {onApply && <button onClick={() => onApply(job._id)} className="btn btn-success">Apply</button>}
      </div>
    </div>
  );
}
