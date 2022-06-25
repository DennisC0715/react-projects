import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, remove }) => {
  const onRemove = () => {};

  return (
    <section>
      <div className="title">
        <h2>OUR TOURS</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} onRemove={remove} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
