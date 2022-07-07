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
              name="amount"
              className="form-input"
              value={quiz.amount}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label for="category">Category</label>
            <select
              id="category"
              className="form-input"
              value={quiz.category}
              name="category"
              onChange={handleChange}
            >
              <option value="sports">sport</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="form-control">
            <label for="difficulty">Select Difficulty</label>
            <select
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              name="difficulty"
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              can't generate questions, please try different options
            </p>
          )}
          <button className="submit-btn">Start</button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
