import React from "react";

const List = ({ id, name, image, age }) => {
  return (
    <div className="person">
      <img src={image} alt={`photo of ${name}`} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default List;
