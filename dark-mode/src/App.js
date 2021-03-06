import React, { useState, useEffect } from "react";
import data from "./data";
import Articles from "./Articles";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const mode = theme === "light-theme" ? "Dark Mode" : " Normal Mode";

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            {mode}
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Articles key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
