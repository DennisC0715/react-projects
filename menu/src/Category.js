import React from "react";

const Category = ({ categories, filter }) => {
  return categories.map((category, index) => (
    <button
      type="button"
      onClick={() => {
        filter(category);
      }}
      key={index}
      className="filter-btn"
    >
      {category}
    </button>
  ));
};

export default Category;
