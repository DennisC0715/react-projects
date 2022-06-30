import React from "react";

const Alert = ({ condition }) => {
  const { msg, type } = condition;
  return (
    <div className="alert">
      <p className={type}>{msg}</p>
    </div>
  );
};

export default Alert;
