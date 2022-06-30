import React from "react";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const Lists = ({ item, removeOneItem, edit }) => {
  return (
    <>
      {item.map((item) => {
        const { id, title } = item;
        return (
          <div className="grocery-item " key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                className="edit-btn"
                onClick={() => {
                  edit(id);
                }}
              >
                <FiEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  removeOneItem(id);
                }}
              >
                <BsTrash />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Lists;
