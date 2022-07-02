import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const { showSubmenu, location, submenuLinks, closeSubmenu } =
    useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (submenuLinks.length === 3) {
      setColumns("col-3");
    }
    if (submenuLinks.length > 3) {
      setColumns("col-4");
    }
  }, [location, submenuLinks]);

  return (
    <aside
      className={`${showSubmenu ? "submenu show" : "submenu"}`}
      ref={container}
      onMouseLeave={closeSubmenu}
    >
      <div className={`submenu-center ${columns}`}>
        {submenuLinks.map((link, index) => {
          const { url, label, icon } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
