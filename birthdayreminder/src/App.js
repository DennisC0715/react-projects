import React, { useState } from "react";
import List from "./List";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  const list = people.map((people) => (
    <List
      name={people.name}
      age={people.age}
      key={people.id}
      image={people.image}
    />
  ));

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        {list}
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear ALL
        </button>
      </section>
    </main>
  );
};

export default App;
