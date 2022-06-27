import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const randomIndex = () => {
    setIndex(Math.floor(Math.random() * people.length));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => {
            if (index <= 0) {
              return setIndex(people.length - 1);
            } else {
              return setIndex(index - 1);
            }
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => {
            if (index >= people.length - 1) {
              return setIndex(0);
            } else return setIndex(index + 1);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomIndex}>
        surprise me
      </button>
    </article>
  );
};

export default Reviews;
