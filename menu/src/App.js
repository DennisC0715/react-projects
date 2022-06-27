import menu from "./data";
import Menus from "./Menus";
import { useState } from "react";
import Category from "./Category";

const categories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
  const [menus, setMenus] = useState(menu);

  const filterItems = (category) => {
    if (category === "all") {
      return setMenus(menu);
    }
    const filteredItems = menu.filter((item) => item.category === category);
    return setMenus(filteredItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title ">
          <h2>Our Menu</h2>
          <div className="underline" />
        </div>
        <div className="btn-container">
          <Category categories={categories} filter={filterItems} />
        </div>
        <div className="section-center">
          <Menus items={menus} />
        </div>
      </section>
    </main>
  );
}

export default App;
