import React, { useContext, createContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

export const useGlobeContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
