import React from "react";

function Card({ icon, title, children }) {
  return (
    <div className="card mt-4 p-3 mb-2 bg-dark text-white">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
