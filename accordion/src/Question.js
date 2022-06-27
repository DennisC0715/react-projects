import React, { useState } from "react";

const Question = ({ title, info }) => {
  const [btnContent, setBtnContent] = useState("+");
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleAnswer}>
          {showAnswer ? "-" : "+"}
        </button>
      </header>
      {showAnswer && <p>{info}</p>}
    </div>
  );
};

export default Question;
