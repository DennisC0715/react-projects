import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page section">
      <div className="error-container">
        <h1>Oops! It's A Dead End</h1>
        <Link to="/">
          <button className="btn btn-primary">BACK HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
