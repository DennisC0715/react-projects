import data from "./data";
import { useState, useEffect } from "react";
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }

    console.log("running");
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, arrayIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (arrayIndex === index) {
            position = "activeSlide";
          }
          if (
            arrayIndex === index - 1 ||
            (index === 0 && arrayIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <div className="title">{title}</div>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <AiFillLeftSquare />
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <AiFillRightSquare />
        </button>
      </div>
    </section>
  );
}

export default App;
