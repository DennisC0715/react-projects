import React, { useContext, createContext, useState, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";

const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sport",
    difficulty: "easy",
  });
  const [error, setError] = useState();

  const handleChange = () => {};
  const handleSubmit = () => {};

  const fetchQuiz = async () => {
    setLoading(true);
    fetch(url);
  };

  return (
    <AppContext.Provider value={{ quiz, error, handleChange, handleSubmit }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobeContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
