import React from "react";

export default function Cards({ title, info, className }) {
  return (
    <div className="col-12">
      <div className={className}>
        <div className="header">
          <h4>{title}</h4>
        </div>
        <div className="body">
          <h5 className="card-text muted">{info} </h5>
        </div>
      </div>
    </div>
  );
}
