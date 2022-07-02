import React, { useState, useContext } from "react";
import subLinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [submenuLinks, setSubmenuLinks] = useState([]);

  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    setShowSubmenu(true);
    const currentPageItems = subLinks.find((item) => item.page === text);
    setSubmenuLinks(currentPageItems.links);
  };

  const closeSubmenu = () => {
    setShowSubmenu(false);
  };
  return (
    <AppContext.Provider
      value={{
        showSidebar,
        location,
        showSubmenu,
        submenuLinks,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
