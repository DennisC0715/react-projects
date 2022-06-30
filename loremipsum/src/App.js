import text from "./data";
import { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const [paragraph, setParagraph] = useState([]);

  const showParagraph = () => {
    let amount = number;
    if (number < 0) {
      amount = 1;
    }
    if (number > text.length - 1) {
      amount = text.length - 1;
    }

    const newParagraph = text.slice(0, amount);
    setParagraph(newParagraph);
  };

  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM</h3>
      <div className="lorem-form">
        <label htmlFor="paragraph">Paragraphs:</label>
        <input
          id="paragraph"
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={showParagraph}
          onKeyDown={(event) => {}}
        >
          GENERATE
        </button>
      </div>
      {paragraph.map((item, index) => (
        <article key={index} className="lorem-text">
          <p>{item}</p>
        </article>
      ))}
    </section>
  );
}

export default App;
