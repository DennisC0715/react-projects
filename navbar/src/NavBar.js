import logo from "./logoNav.svg";
import React, { useState, useRef, useEffect } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linkContainerRef.current.style.height = "0px";
    }

    console.log(linkContainerRef.current.style);
  }, [showLinks]);

  const toggleButton = () => {
    toggleRef.current.style.transform = `${showLinks ? "" : "rotate(90deg)"}`;
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            ref={toggleRef}
            onClick={() => {
              setShowLinks(!showLinks);
              toggleButton();
            }}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linkContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((item) => (
              <li key={item.id}>
                <a href={item.url}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
