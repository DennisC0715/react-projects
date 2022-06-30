import Lists from "./Lists";
import { useState, useEffect } from "react";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ show: false, msg: "", type: "" });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [items]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setAlert({
        show: true,
        msg: "Please Enter Valid Name",
        type: "alert-danger",
      });
    } else if (input && isEditing) {
      const specificItem = items.find((item) => item.id === editID);
      specificItem.title = input;
      setAlert({
        show: true,
        msg: "item has been edited",
        type: "alert-success",
      });
      setTimeout(() => {
        setAlert({ show: false });
      }, 3000);
      setIsEditing(false);
      setEditID(null);
      setInput("");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: input };
      setItems([...items, newItem]);
      setAlert({
        show: true,
        msg: "Item Added To The List",
        type: "alert-success",
      });
      setInput("");
    }
  };

  const removeOneItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setAlert({
      show: true,
      msg: "item has been removed from List",
      type: "alert-danger",
    });
  };

  const editItem = (id) => {
    const specificItem = items.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setInput(specificItem.title);
  };

  return (
    <section className="section-center ">
      {alert.show && <Alert condition={alert} />}
      <div className="grocery-form">
        <h3>Grocery Bud</h3>
        <form className="form-control" onSubmit={handlerSubmit}>
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          {isEditing ? (
            <button className="submit-btn" type="submit">
              Edit
            </button>
          ) : (
            <button className="submit-btn" type="submit">
              Add
            </button>
          )}
        </form>
      </div>
      {items.length > 0 && (
        <div className="grocery-container">
          <Lists item={items} removeOneItem={removeOneItem} edit={editItem} />
          <button
            className="clear-btn"
            onClick={() => {
              setItems([]);
              setAlert({
                show: true,
                msg: "All Items has been removed",
                type: "alert-danger",
              });
            }}
          >
            Clear List
          </button>
        </div>
      )}
    </section>
  );
}
export default App;
