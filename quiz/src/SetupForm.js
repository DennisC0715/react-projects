import React from "react";
import { useGlobeContext } from "./context";

const SetupForm = () => {
  const { error, handleChange, handleSubmit, quiz } = useGlobeContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form" onSubmit={handleSubmit}>
          <h2>Setup Quiz</h2>
          <div className="form-control">
            <label for="question">Number Of Questions</label>
            <input
              id="question"
              type="number"
              className="form-input"
              value={quiz.amount}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label for="question">Category</label>
            <select id="question" className="form-input" value="sport">
              <option>sport</option>
              <option>history</option>
              <option>politics</option>
            </select>
          </div>
          <div className="form-control">
            <label for="question">Select Difficulty</label>
            <select id="question" className="form-input">
              <option>easy</option>
              <option>medium</option>
              <option>hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              can't generate questions, please try different options{" "}
            </p>
          )}
          <button className="submit-btn">Start</button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
